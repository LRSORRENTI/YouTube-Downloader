// download.mjs
import { execa } from 'execa';  // Importing the named export

async function downloadYouTubeVideo(url, outputFilename) {
    try {
        const { stdout } = await execa('yt-dlp', [
            '-f', 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best',
            '--merge-output-format', 'mp4',
            '-o', outputFilename,
            url
        ]);

        console.log('Download and conversion successful:', stdout);
    } catch (error) {
        console.error('Error downloading video:', error);
    }
}

const youtubeURL = 'https://www.youtube.com/replace-with-full-url';
const outputFilename = 'downloaded_video.mp4';

downloadYouTubeVideo(youtubeURL, outputFilename);
