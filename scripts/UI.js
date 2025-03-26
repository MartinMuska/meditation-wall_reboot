const renderContent = (option) => {
    const colorWall = document.getElementById("color-wall");
    const imageWall = document.getElementById("image-wall");

    if (option === "color") {
        colorWall.style.display = "flex";
    } else if (option === "image") {
        imageWall.style.display = "flex";
    }
};

export { renderContent };
