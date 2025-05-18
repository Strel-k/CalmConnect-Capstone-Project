document.addEventListener("DOMContentLoaded", () => {
    const profileImg = document.getElementById("profile-img");
    const profileDropdown = document.getElementById("profile-dropdown");
  
    const bellIcon = document.getElementById("bell-icon");
    const bellDropdown = document.getElementById("bell-dropdown");
  
    // Toggle profile dropdown
    profileImg.addEventListener("click", (e) => {
      profileDropdown.style.display = profileDropdown.style.display === "flex" ? "none" : "flex";
      bellDropdown.style.display = "none"; // close other dropdown
      e.stopPropagation();
    });
  
    // Toggle bell dropdown
    bellIcon.addEventListener("click", (e) => {
      bellDropdown.style.display = bellDropdown.style.display === "flex" ? "none" : "flex";
      profileDropdown.style.display = "none"; // close other dropdown
      e.stopPropagation();
    });
  
    // Close both dropdowns when clicking outside
    document.addEventListener("click", () => {
      profileDropdown.style.display = "none";
      bellDropdown.style.display = "none";
    });
  });
  