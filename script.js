const slides = document.querySelectorAll(".parfum-slideshow img");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 4000); // Ganti gambar tiap 4 detik

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");

  if (!navLinks.classList.contains("show")) {
    // Pastikan kondisi awal ter-render dulu
    requestAnimationFrame(() => {
      setTimeout(() => {
        navLinks.classList.add("show");
      }, 400); // kasih jeda sedikit biar smooth
    });
  } else {
    navLinks.classList.remove("show");
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        navLinks.classList.remove("show");
        menuToggle.classList.remove("active");
      }, 600);
    });
  });
});

const dataKonten = [
  {
    judul: "Curated Essenc.",
    deskripsi: `Setiap aroma Ovela lahir dari pilihan bahan terbaik yang diracik dengan presisi tinggi.
                Kami percaya bahwa keharuman sejati bukan sekadar wangi, melainkan cerminan karakter dan emosi.
                Setiap detail dari keseimbangan nada atas hingga dasardisusun untuk menghadirkan harmoni yang menenangkan.
                Inilah seni meramu parfum yang tak hanya memikat, tetapi juga meninggalkan kesan mendalam pada setiap momen.`,
  },
  {
    judul: "Crafted with Passion.",
    deskripsi: `Kami menyalurkan dedikasi dan cinta dalam setiap proses penciptaan parfum Ovela.
                Mulai dari desain botol yang menawan hingga aroma yang melebur lembut di kulit, semuanya penuh makna.
                Tak ada yang diciptakan secara kebetulan; setiap komposisi lahir dari intuisi dan kepekaan terhadap keindahan.
                Bagi kami, parfum adalah bahasa tanpa kata cara elegan untuk mengekspresikan diri dengan percaya diri.`,
  },
  {
    judul: "Timeless Impression.",
    deskripsi: `Parfum Ovela dirancang untuk melampaui waktu dan tren yang silih berganti.
                Kami menghadirkan keharuman yang tak hanya indah saat ini, tapi juga abadi dalam ingatan.
                Setiap semerbaknya mengisahkan elegansi, meninggalkan jejak lembut di setiap langkah dan pertemuan.
                Karena keanggunan sejati bukan hanya terlihatia terasa, dan dikenang dalam wangi yang tak pernah pudar.`,
  },
];

let konten_block = document.querySelectorAll(".konten-block");
let judul_utama = document.getElementById("judul_utama");
let paragraf_utama = document.getElementById("paragraf_utama");

konten_block.forEach((block, index) => {
  block.addEventListener("click", () => {
    // fade out dulu
    judul_utama.style.opacity = 0;
    paragraf_utama.style.opacity = 0;

    // setelah 300ms ganti konten baru + fade in
    setTimeout(() => {
      judul_utama.textContent = dataKonten[index].judul;
      paragraf_utama.textContent = dataKonten[index].deskripsi;

      judul_utama.style.opacity = 1;
      paragraf_utama.style.opacity = 1;
    }, 300);
  });
});

document.querySelectorAll(".auto-slider").forEach((slider) => {
  const slides = slider.querySelectorAll(".auto-slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // tampilkan pertama kali
  showSlide(currentIndex);

  // jalan otomatis tiap 4 detik
  setInterval(nextSlide, 4000);
});
