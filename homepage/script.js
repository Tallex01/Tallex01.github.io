document.addEventListener("DOMContentLoaded", async () => {
  if (window.location.pathname.length > 1 && window.location.pathname.endsWith("/")) {
    const cleanedPath = window.location.pathname.slice(0, -1);
    const cleanedUrl = `${cleanedPath}${window.location.search}${window.location.hash}`;
    window.history.replaceState({}, "", cleanedUrl);
  }

  const routeAliases = {
    "": "/",
    "/": "/",
    "/index.html": "/",
    "/links": "/links",
    "/links/": "/links",
    "/links.html": "/links",
    "/resume": "/resume",
    "/resume/": "/resume",
    "/resume.html": "/resume",
    "/projects": "/projects",
    "/projects/": "/projects",
    "/projects.html": "/projects",
  };

  const path = window.location.pathname;
  const normalizedPath = path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
  const currentRoute = routeAliases[path] || routeAliases[normalizedPath] || normalizedPath;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const normalizedHref = href.endsWith("/") && href !== "/" ? href.slice(0, -1) : href;

    if (normalizedHref === currentRoute) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  const bioElement = document.getElementById("bio");

  if (!bioElement) {
    return;
  }

  try {
    const response = await fetch("/bio.txt");
    if (!response.ok) {
      throw new Error("Failed to load bio");
    }

    const bio = await response.text();
    bioElement.textContent = bio.replace(/\s+/g, " ").trim();
  } catch (_error) {
    bioElement.textContent = "Welcome to my website.";
  }
});