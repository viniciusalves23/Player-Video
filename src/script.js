document.addEventListener('DOMContentLoaded', () => {
    const controls = [
        'play-large', // The large play button in the center
        'restart', // Restart playback
        'rewind', // Rewind by the seek time (default 10 seconds)
        'play', // Play/pause playback
        'fast-forward', // Fast forward by the seek time (default 10 seconds)
        'progress', // The progress bar and scrubber for playback and buffering
        'current-time', // The current time of playback
        'duration', // The full duration of the media
        'mute', // Toggle mute
        'volume', // Volume control
        'captions', // Toggle captions
        'settings', // Settings menu
        'pip', // Picture-in-picture (currently Safari only)
        'airplay', // Airplay (currently Safari only)
        'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
        'fullscreen',  // Toggle fullscreen
    ];

    const player = Plyr.setup('.js-player', {
        controls: controls,
        tooltips: { // Ensure tooltips are enabled
            controls: true,
            seek: true
        },
        i18n: {
            restart: 'Restart',
            rewind: 'Rewind {seektime}s',
            play: 'Play',
            pause: 'Pause',
            fastForward: 'Forward {seektime}s',
            seek: 'Seek',
            seekLabel: '{currentTime} of {duration}',
            played: 'Played',
            buffered: 'Buffered',
            currentTime: 'Current time',
            duration: 'Duration',
            volume: 'Volume',
            mute: 'Mute',
            unmute: 'Unmute',
            enableCaptions: 'Enable captions',
            disableCaptions: 'Disable captions',
            enterFullscreen: 'Enter fullscreen',
            exitFullscreen: 'Exit fullscreen',
            frameTitle: 'Player for {title}',
            captions: 'Captions',
            settings: 'Settings',
            pip: 'PIP',
            airplay: 'Airplay',
            download: 'Download',
            menuBack: 'Go back to previous menu',
            speed: 'Speed',
            normal: 'Normal',
            quality: 'Quality',
            loop: 'Loop'
        }
    });
});