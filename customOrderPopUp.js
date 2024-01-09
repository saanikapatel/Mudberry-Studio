function showPopup2() {
    document.querySelector(".overlay").style.display = "block";
    document.querySelector("#order-pop-up").style.display = "block";
}

// Function to hide the popup
function hidePopup2() {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector("#order-pop-up").style.display = "none";
}

// Close the popup when clicking the close button
document.querySelector(".btn1").addEventListener("click", showPopup2);
document.querySelector(".btn2").addEventListener("click", hidePopup2);
