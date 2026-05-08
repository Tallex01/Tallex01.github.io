document.addEventListener("DOMContentLoaded", async () => {
  const path = window.location.pathname;
  const currentPage = path === "/" ? "index.html" : path.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  const bioElement = document.getElementById("bio");

  if (!bioElement) {
    return;
  }

  try {
    const response = await fetch("bio.txt");
    if (!response.ok) {
      throw new Error("Failed to load bio");
    }

    const bio = await response.text();
    bioElement.textContent = bio.replace(/\s+/g, " ").trim();
  } catch (_error) {
    bioElement.textContent = "Welcome to my website.";
  }
});