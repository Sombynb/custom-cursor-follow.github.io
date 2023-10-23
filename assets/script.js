const cursor = document.querySelector(".cursor");
let timeout;

// Follow cursor on mousemove 
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    // Cursor effect on mouse stopped
    function mouseStopped() {
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

// Cursor effect on mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});