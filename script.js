document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll("#mobile-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetElement = document.getElementById(button.dataset.scrollTarget);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Manejo especial de enlaces a WhatsApp para el navegador in-app de TikTok
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const isTikTok = ua.indexOf("TikTok") > -1;

  if (isTikTok) {
    // Si entra desde TikTok, interceptamos los clics a WhatsApp
    document.querySelectorAll('a[href*="whatsapp.com"], a[href*="wa.me"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        // Forzar la apertura directa usando el esquema nativo de la app
        window.location.href = "whatsapp://send?phone=573207015183";
      });
    });
  }
});