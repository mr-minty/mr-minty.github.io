const videos = ["beach.mp4", "countryside.mp4", "town.mp4", "snowymountain.mp4", "volcano.mp4", "skyline.mp4", "cliffs.mp4"];

videos.forEach((video, index) => {
    let galleryBox = document.createElement("div");
    galleryBox.setAttribute("class", "gallery-box");
    let thumbnail = document.createElement("video")
    const gallery = document.querySelector(".body-container-gallery");

    thumbnail.src = `video/${video}`;
	thumbnail.type = "video/mp4";
	thumbnail.controls = false;
	thumbnail.preload = "auto"; // Preload the video
	galleryBox.appendChild(thumbnail);
    gallery.appendChild(galleryBox);
});