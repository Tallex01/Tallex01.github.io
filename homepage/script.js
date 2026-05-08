document.addEventListener("DOMContentLoaded", async () => {
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