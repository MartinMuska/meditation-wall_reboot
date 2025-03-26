const renderContent = (option) => {
    const colorWall = document.getElementById("color-wall");
    const imageWall = document.getElementById("image-wall");

    if (option === "color") {
        colorWall.style.display = "flex";
        imageWall.style.display = "none";
    } else if (option === "image") {
        colorWall.style.display = "none";
        imageWall.style.display = "flex";
    } else if (option === "default") {
        colorWall.style.display = "none";
        imageWall.style.display = "none";
    }
};

export { renderContent };
