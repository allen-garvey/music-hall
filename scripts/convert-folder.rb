require 'pathname'

# Open src folder and get list of music files
SRC_ROOT_DIR = '/media/allen/Mx-data/allen/Music/Music-Hall-Masters'
DEST_ROOT_DIR = '~/Sites/music-hall/public_html/media/music'

Dir.glob("#{SRC_ROOT_DIR}/**/*").each do |file|
    if File.directory?(file)
        next
    end

    extension = File.extname(file)
    filename = file.chomp(extension)
    # get directory relative to SRC_ROOT
    parent_dir = filename.reverse.chomp(SRC_ROOT_DIR.reverse).reverse

    filename_base_dest = File.expand_path(File.join(DEST_ROOT_DIR, parent_dir))
    parent_dir_dest = File.dirname(filename_base_dest)

    `mkdir -p "#{parent_dir_dest}"`

    case extension
        when ".wav"
            # if wav convert to opus 128k and aac 196k
            unless File.exist?("#{filename_base_dest}.opus")
                `ffmpeg -i "#{file}" -c:a libopus -b:a 128k -vbr:a on -strict -2 -y "#{filename_base_dest}.opus"`
            end
            puts "#{filename} is wav"
        when ".m4a"
            # if m4a copy and convert to opus 96k bitrate
            unless File.exist?("#{filename_base_dest}.opus")
                `ffmpeg -i "#{file}" -c:a libopus -b:a 96k -vbr:a on -strict -2 -y "#{filename_base_dest}.opus"`
            end
            `cp "#{file}" "#{filename_base_dest}#{extension}"`
        when ".mp3"
            # if mp3 copy and convert to opus 96k bitrate
            unless File.exist?("#{filename_base_dest}.opus")
                `ffmpeg -i "#{file}" -c:a libopus -b:a 96k -vbr:a on -strict -2 -y "#{filename_base_dest}.opus"`
            end
            `cp "#{file}" "#{filename_base_dest}#{extension}"`
    end
end
