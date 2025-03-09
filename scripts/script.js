document.addEventListener("DOMContentLoaded", () => {
    // Dynamically set the current year in the footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Display the last modified date in the footer
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Updated: ${lastModified}`;
});
