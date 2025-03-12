require 'pathname'

# Open src folder and get list of music files
SRC_ROOT_DIR = File.expand_path(File.join(__dir__, '../music'))
DEST_ROOT_DIR = File.expand_path(File.join(__dir__, '../public_html/media/music'))

Dir.glob("#{SRC_ROOT_DIR}/**/*").each do |file|
    if File.directory?(file)
        next
    end

    extension = File.extname(file)
    
    unless ['.wav', '.mp3', '.m4a', '.aif'].include? extension
        next
    end

    filename = file.chomp(extension)
    # get directory relative to SRC_ROOT
    parent_dir = filename.reverse.chomp(SRC_ROOT_DIR.reverse).reverse

    filename_base_dest = File.expand_path(File.join(DEST_ROOT_DIR, parent_dir))
    parent_dir_dest = File.dirname(filename_base_dest)

    puts file

    `mkdir -p "#{parent_dir_dest}"`

    unless File.exist?("#{filename_base_dest}.opus")
        opus_bitrate = extension == '.wav' ? '128k' : '96k'
        `ffmpeg -i "#{file}" -c:a libopus -b:a #{opus_bitrate} -vbr:a on -strict -2 -y "#{filename_base_dest}.opus"`
    end

    if extension === '.wav' or extension === '.aif'
        # if .wav convert to aac as fallback
        unless File.exist?("#{filename_base_dest}.m4a")
            `ffmpeg -i "#{file}" -c:a aac -b:a 196k -y "#{filename_base_dest}.m4a"`
        end
    else
        # copy .mp3 and .m4a to destination as a fallback
        unless File.exist?("#{filename_base_dest}#{extension}")
            `cp "#{file}" "#{filename_base_dest}#{extension}"`
        end
    end
end
