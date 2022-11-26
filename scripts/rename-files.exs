defmodule RenameAudioFiles do
  @moduledoc """
  Renames source files in wav or aif format to match the filename of the closest matching mp3 or m4a file
  """

  def exit_with_error do
    IO.puts :stderr, "usage: elixir #{Path.basename(__ENV__.file)} <source_directory> <is_dry_run>"
  end

  def is_valid_directory(directory) do
    File.exists?(directory) and File.dir?(directory)
  end

  def rename_master_files_in_directory_from_compressed_files(directory, is_dry_run) when is_boolean(is_dry_run) do
    if is_valid_directory(directory) do
        rename_files(directory, is_dry_run)
    else
        exit_with_error()
    end
  end

  def rename_files(directory, is_dry_run) when is_boolean(is_dry_run) do
    compressed_files = File.ls!(directory) |> Enum.filter(fn file -> Path.extname(file) |> String.match?(~r/\.(mp3|m4a)$/) end)
    source_files = File.ls!(directory) |> Enum.filter(fn file -> Path.extname(file) |> String.match?(~r/\.(wav|aif)$/) end)

    for source_file <- source_files do
        {best_match, distance} = compressed_files 
            |> Enum.map(fn compressed_file -> {compressed_file, String.bag_distance(Path.rootname(source_file), Path.rootname(compressed_file))} end)
            |> Enum.reduce({"", 0}, fn {current_compressed_file, current_distance}, {acc_file, acc_distance} ->
                case acc_distance > current_distance do 
                    true -> {acc_file, acc_distance}
                    false -> {current_compressed_file, current_distance}
                end 
            end)
        
        if is_dry_run do 
            IO.puts "For #{source_file} best match is #{best_match} at distance #{distance}"
        else
            new_name = "#{Path.rootname(best_match)}#{Path.extname(source_file)}"
            source_full_path = Path.join(directory, source_file)
            new_full_path = Path.join(directory, new_name)
            
            IO.puts "Renaming #{source_file} to #{new_name}"
            File.rename!(source_full_path, new_full_path)
        end
    end
  end

end

case System.argv do
    [source_dir] -> RenameAudioFiles.rename_master_files_in_directory_from_compressed_files(source_dir, false)
    [source_dir, _is_dry_run] -> RenameAudioFiles.rename_master_files_in_directory_from_compressed_files(source_dir, true)
    _ -> RenameAudioFiles.exit_with_error() 
end