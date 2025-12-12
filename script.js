document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for primary button
  document.querySelectorAll("[data-scroll-target]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = document.querySelector(btn.getAttribute("data-scroll-target"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");

  document.querySelectorAll(".gallery-item").forEach(function (item) {
    item.addEventListener("click", function () {
      const fullSrc = item.getAttribute("data-full");
      const caption = item.querySelector("figcaption")?.textContent || "";
      lightboxImg.src = fullSrc;
      lightboxCaption.textContent = caption;
      lightbox.classList.add("visible");
      document.body.style.overflow = "hidden";
    });
  });

  document.querySelectorAll("[data-lightbox-close]").forEach(function (el) {
    el.addEventListener("click", function () {
      lightbox.classList.remove("visible");
      document.body.style.overflow = "";
      lightboxImg.src = "";
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox.classList.contains("visible")) {
      lightbox.classList.remove("visible");
      document.body.style.overflow = "";
      lightboxImg.src = "";
    }
  });
});
