import { execa } from 'execa';  // Importing the named export

async function downloadYouTubeAudio(url, outputFilename) {
    try {
        const { stdout } = await execa('yt-dlp', [
            '-f', 'bestaudio',
            '--extract-audio',
            '--audio-format', 'mp3',
            '-o', outputFilename,
            url
        ]);

        console.log('Download and conversion successful:', stdout);
    } catch (error) {
        console.error('Error downloading audio:', error);
    }
}

const youtubeURL = 'https://www.youtube.com/watch?v=C83HnyanNis';
const outputFilename = 'downloaded_audio.mp3';

downloadYouTubeAudio(youtubeURL, outputFilename);
