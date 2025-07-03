document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const videoFeed = document.getElementById('videoFeed');
    const startBtn = document.querySelector('.start-btn');
    const playBtn = document.querySelector('.play-btn');
    const stopBtn = document.querySelector('.stop-btn');
    const speedSelect = document.querySelector('.speed-select');
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.querySelector('.status-text');
    const recognitionTextarea = document.querySelector('.recognition-textarea');
    const submitCorrectionBtn = document.querySelector('.submit-correction-btn');
    const downloadVideoBtn = document.querySelector('.download-video-btn');
    const shareVideoBtn = document.querySelector('.share-video-btn');

    // Variables
    let stream = null;
    let isRecognizing = false;

    // Initialize camera
    async function initializeCamera() {
        try {
            stream = await navigator.mediaDevices.getUserMedia({ 
                video: { 
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                } 
            });
            videoFeed.srcObject = stream;
            updateStatus('Camera Ready', 'ready');
        } catch (error) {
            console.error('Error accessing camera:', error);
            updateStatus('Camera Error', 'error');
        }
    }

    // Update status indicator
    function updateStatus(text, state) {
        statusText.textContent = text;
        statusDot.className = 'status-dot';
        statusDot.classList.add(state);
    }

    // Start recognition
    function startRecognition() {
        if (!stream) return;
        
        isRecognizing = true;
        startBtn.style.display = 'none';
        stopBtn.style.display = 'inline-block';
        playBtn.disabled = true;
        updateStatus('Recognizing', 'active');

        // Start recognition loop
        recognitionLoop();
    }

    // Stop recognition
    function stopRecognition() {
        isRecognizing = false;
        startBtn.style.display = 'inline-block';
        stopBtn.style.display = 'none';
        playBtn.disabled = false;
        updateStatus('Camera Ready', 'ready');
    }

    // Play/Pause video
    function playVideo() {
        if (videoFeed.paused) {
            videoFeed.play();
            playBtn.textContent = 'Pause';
        } else {
            videoFeed.pause();
            playBtn.textContent = 'Play';
        }
    }

    // Change video speed
    function changeVideoSpeed() {
        videoFeed.playbackRate = parseFloat(speedSelect.value.replace('x', ''));
    }

    // Recognition loop
    function recognitionLoop() {
        if (!isRecognizing) return;

        // Here you would implement the actual sign language recognition logic
        // For now, we'll simulate recognition with random results
        simulateRecognition();

        // Continue the loop
        requestAnimationFrame(recognitionLoop);
    }

    // Simulate recognition (replace with actual recognition logic)
    function simulateRecognition() {
        const signs = ['Hello', 'Thank you', 'Please', 'Yes', 'No', 'Good', 'Bad', 'Help'];
        const randomSign = signs[Math.floor(Math.random() * signs.length)];
        recognitionTextarea.value = randomSign;
    }

    // Submit correction
    function submitCorrection() {
        const correctionText = recognitionTextarea.value;
        console.log('Correction submitted:', correctionText);
        alert('Correction Submitted: ' + correctionText);
    }

    // Download video
    function downloadVideo() {
        console.log('Downloading video...');
        alert('Video Download Initiated');
    }

    // Share video
    function shareVideo() {
        console.log('Sharing video...');
        alert('Video Sharing Initiated');
    }

    // Event Listeners
    startBtn.addEventListener('click', startRecognition);
    stopBtn.addEventListener('click', stopRecognition);
    playBtn.addEventListener('click', playVideo);
    speedSelect.addEventListener('change', changeVideoSpeed);
    submitCorrectionBtn.addEventListener('click', submitCorrection);
    downloadVideoBtn.addEventListener('click', downloadVideo);
    shareVideoBtn.addEventListener('click', shareVideo);

    // Initialize camera on page load
    initializeCamera();
}); 