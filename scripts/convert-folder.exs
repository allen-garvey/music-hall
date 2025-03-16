defmodule SourceFile do
  defstruct [:path, targets: []]
end

defmodule ConvertFolder do
  @moduledoc """
  Converts wav or mp3 in source folder to opus or m4a in public html folder, if they don't already exist
  """
  defp source_dir do
    Path.join([__DIR__, "..", "music"]) |> Path.expand()
  end

  defp target_dir do
    Path.join([__DIR__, "..", "public_html", "media", "music"]) |> Path.expand()
  end

  defp get_files_recursive(source_path, %MapSet{} = extension_set) do
    case File.dir?(source_path) do
      true ->
        File.ls!(source_path)
        |> Enum.map(fn path ->
          Path.join(source_path, path) |> get_files_recursive(extension_set)
        end)
        |> Enum.flat_map(&Function.identity/1)

      false ->
        case MapSet.member?(extension_set, Path.extname(source_path)) do
          true -> [source_path]
          false -> []
        end
    end
  end

  defp to_source_file(path, %MapSet{} = target_files_set) do
    relative_path_without_extension = Path.relative_to(path, source_dir()) |> Path.rootname()

    targets =
      case Path.extname(path) == ".mp3" do
        false ->
          ["#{relative_path_without_extension}.m4a", "#{relative_path_without_extension}.opus"]

        true ->
          ["#{relative_path_without_extension}.mp3"]
      end
      |> Enum.filter(fn name -> !MapSet.member?(target_files_set, name) end)

    %SourceFile{path: path, targets: targets}
  end

  def main do
    # used to find out what target files we need to create
    target_files_set =
      get_files_recursive(target_dir(), MapSet.new([".m4a", ".opus", ".mp3"]))
      |> Enum.map(fn path -> Path.relative_to(path, target_dir()) end)
      |> MapSet.new()

    # get a list of source files, and the targets that need to be created from them
    source_files =
      get_files_recursive(source_dir(), MapSet.new([".wav", ".mp3", ".m4a", ".aif"]))
      |> Enum.map(fn path -> to_source_file(path, target_files_set) end)
      |> Enum.filter(fn source_file -> !Enum.empty?(source_file.targets) end)

    # get unique target folders to create, and create with mkdir_p
    target_directories_to_create =
      Enum.map(source_files, fn source_file -> source_file.targets end)
      |> Enum.flat_map(fn targets -> Enum.map(targets, &Path.dirname/1) end)
      |> MapSet.new()
      |> MapSet.to_list()
      |> Enum.filter(fn path -> !File.exists?(path) end)

    target_directories_to_create_count = Enum.count(target_directories_to_create)
    IO.puts("Creating #{target_directories_to_create_count} folders in #{target_dir()}\n")

    for target_directory <- target_directories_to_create do
      IO.puts("Creating #{target_directory}")
      File.mkdir_p!(target_directory)
    end

    source_files_count = Enum.count(source_files)
    # IO.inspect(source_files)
    IO.puts("\n#{source_files_count} files to convert")

    # https://hexdocs.pm/elixir/1.12/Task.html#async_stream/5
    # convert with Task.async_stream |> Enum.to_list()
  end
end

ConvertFolder.main()
