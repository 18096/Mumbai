document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".find-her-button");
    const modal = document.getElementById("video-modal");
    const closeButton = document.querySelector(".close-button");
    const video = document.getElementById("wanted-video");

    // Open the modal
    button.addEventListener("click", () => {
        modal.style.display = "flex";
        video.play(); // Play the video automatically
    });

    // Close the modal
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
        video.pause(); // Pause the video
        video.currentTime = 0; // Reset video time
    });

    // Close the modal when clicking outside the content
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            video.pause();
            video.currentTime = 0;
        }
    });
});
