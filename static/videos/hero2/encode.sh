#ffmpeg -y -i "hero.mp4" -c:a aac -b:a 192k -vn "output_audio.m4a"
ffmpeg -y -i "video.mp4" -preset slow -tune film -vsync passthrough -an -c:v libx264 -x264opts 'keyint=25:min-keyint=25:no-scenecut' -crf 22  -maxrate 5000k -bufsize 10000k -pix_fmt yuv420p -f mp4 "video_5000.mp4"
ffmpeg -y -i "video.mp4" -preset slow -tune film -vsync passthrough -an -c:v libx264 -x264opts 'keyint=25:min-keyint=25:no-scenecut' -crf 23  -maxrate 2000k -bufsize 4000k -pix_fmt yuv420p -f mp4 "video_2000.mp4"
MP4Box -dash 2000 -rap -frag-rap  -bs-switching no -profile "dashavc264:live" "video_5000.mp4" "video_2000.mp4"  -out "video.mpd"