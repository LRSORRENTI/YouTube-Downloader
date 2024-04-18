# YouTube - MP4 Downloader

## Getting Started

1. Install yt-dlp
   If you haven't already installed yt-dlp, you can do so using Python's package manager, pip. First, ensure you have Python installed on your system. Then, open your command prompt and run:

```
pip install yt-dlp
```

2. Add yt-dlp to your PATH:

If yt-dlp is installed but not recognized, it might not be in your system's PATH. You can add it by finding the directory where yt-dlp is installed and adding that directory to the PATH environment variable. Here's how you can typically find and add it:

3. Find the installation directory:

If you used pip to install yt-dlp, it's likely installed in Python's Scripts directory. You can find Python's location by running where python in your command prompt, and the Scripts folder will be in the same directory as the Python executable.

4. Add to PATH:

Once you locate the Scripts directory, you can add it to the system's PATH:
On Windows, search for "Environment Variables" in the Start menu, choose "Edit the system environment variables", then in the System Properties window, click "Environment Variables". Find the "Path" variable in the "System variables" section, and add the path to the Scripts directory.

5. Verify Installation:

After installation and adding to PATH, open a new command prompt and type yt-dlp --version to check if it is recognized and working.

6. Install project dependencies from the package.json:

```
npm install
```

7. In download.mjs, change the below URL to the desired video URL

```
const youtubeURL = 'https://www.youtube.com/replace-with-full-url';

```

8. Run the script

```
node download.mjs
```
