
window.onload = (event) => {

    let counter = 0;

    setInterval(() => {
        let images = ["cloud.png", "rj45.jpeg"];
        let gallery = document.getElementById("gallery");
        console.log(gallery.src);
        gallery.src = images[counter];
        counter++;
        if(counter > 1) counter = 0;
    }, 5000);
};
