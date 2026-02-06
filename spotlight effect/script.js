const cover = document.querySelector(".cover");

cover.addEventListener("mousemove", (e) => {
    let x= e.x;
    let y = e.y;
    cover.style.background = `radial-gradient(100px at ${x}px ${y}px,transparent,rgba(0, 0, 0, 0.823))`
});
