// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//hamburger
const hamburger = document.querySelector("#hamburger");
const navmenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navmenu.classList.toggle("hidden");
});

//link whatsapp
function sendWhatsAppMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const phoneNumber = "628123456789"; // Ganti dengan nomor WhatsApp Anda
  const text = `Halo, saya ${name}.\nEmail: ${email}\nPesan: ${message}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    text
  )}`;

  window.open(whatsappUrl, "_blank");
}
