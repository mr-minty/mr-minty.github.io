window.onload = (event) => {
    let counter = 0;
    const videos = ["beach.mp4", "countryside.mp4", "town.mp4", "snowymountain.mp4", "volcano.mp4", "skyline.mp4", "cliffs.mp4"];
    const gallery = document.getElementsByClassName("video-container")[0];

    // Preload all videos into the gallery
    videos.forEach((video, index) => {
/*
        const videoElement = document.createElement("video");
        videoElement.src = `video/${video}`;
        videoElement.type = "video/mp4";
        videoElement.controls = true;
        videoElement.style.display = index === 0 ? "block" : "none"; // Show only the first video
        videoElement.style.width = "100%";
        videoElement.style.height = "100%";
        videoElement.classList.add("video-element");
        gallery.appendChild(videoElement);
*/
	const videoElement = document.createElement("video");
	videoElement.src = `video/${video}`;
	videoElement.type = "video/mp4";
	videoElement.controls = true;
	videoElement.preload = "auto"; // Preload the video
	videoElement.style.display = index === 0 ? "block" : "none"; // Show only the first video
	videoElement.style.width = "100%";
	videoElement.style.height = "100%";
	videoElement.classList.add("video-element");
	gallery.appendChild(videoElement);
  
  });

    // Create a fade overlay
    const fadeOverlay = document.createElement("div");
    fadeOverlay.id = "fade-overlay";
    gallery.appendChild(fadeOverlay);

    const videoElements = gallery.getElementsByTagName("video");

    // Cycle through videos with fade-to-black transition
    setInterval(() => {
        const currentVideo = videoElements[counter];

        // Pause function if the current video is playing
        if (!currentVideo.paused) {
            return; // Exit if the video is playing
        }

        fadeOverlay.classList.add("fade-in"); // Start fade to black
        setTimeout(() => {
            currentVideo.style.display = "none"; // Hide current video
            counter = (counter + 1) % videos.length; // Increment counter
            videoElements[counter].style.display = "block"; // Show next video
            fadeOverlay.classList.remove("fade-in"); // Fade back to content
        }, 2000); // Duration of fade to black (matches CSS)
    }, 5000); // 5 seconds between videos
};

