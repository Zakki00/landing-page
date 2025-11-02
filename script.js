
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  let currentIndex = 0;
  let autoSlide;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Tombol manual
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });
  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
  });

  // Auto slide setiap 4 detik
  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 4000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  startAutoSlide();




const dataKonten = [
  {
    judul: "Design. Code. Create.",
    deskripsi: `Bangun kehadiran digital yang benar-benar mencerminkan kualitas 
                bisnismu. Di sini, kami membantu mewujudkan website profesional yang 
                tidak hanya menarik secara visual, tetapi juga cepat, responsif, dan 
                dirancang untuk tumbuh bersama bisnismu. Kami percaya setiap detail 
                punya makna dari warna yang menegaskan identitas, hingga pengalaman 
                pengguna yang meninggalkan kesan pertama yang tak terlupakan. Saat 
                dunia bergerak ke arah digital, biarkan websitemu menjadi langkah 
                pasti menuju masa depan.`
  },
  {
    judul: "Build. Launch. Grow.",
    deskripsi: `Mulailah langkah besar dalam membangun identitas digital yang kuat dan berkelanjutan. 
                Kami menghadirkan layanan pembuatan website yang dirancang untuk mempercepat pertumbuhan 
                bisnismu, mulai dari konsep hingga peluncuran. Setiap elemen dikembangkan dengan fokus 
                pada keindahan visual, kecepatan, dan strategi yang mendukung peningkatan pelanggan. 
                Dengan pendekatan yang terencana, kami memastikan setiap halaman bekerja selaras untuk 
                menyampaikan nilai dan karakter unik bisnismu. Saat ide tumbuh menjadi hasil nyata, 
                biarkan website-mu menjadi jembatan antara visi dan kesuksesan digitalmu.`
  },
  {
    judul: "Smart. Fast. Reliable.",
    deskripsi: `Kami menciptakan website yang tidak hanya terlihat cerdas, tetapi juga bekerja dengan 
                kecepatan dan keandalan tinggi. Setiap desain kami optimalkan agar tetap ringan, responsif, 
                dan nyaman diakses dari perangkat apa pun. Dengan teknologi terbaru, websitemu mampu 
                menangani kebutuhan bisnis tanpa mengorbankan performa atau tampilan. Kami percaya 
                bahwa kecepatan dan stabilitas adalah fondasi utama untuk pengalaman pengguna yang 
                memuaskan. Saat dunia digital menuntut efisiensi, biarkan websitemu menjadi representasi 
                terbaik dari profesionalisme dan keunggulan merekmu.`
  }
];

let konten_block = document.querySelectorAll('.konten-block');
let judul_utama = document.getElementById('judul_utama');
let paragraf_utama = document.getElementById('paragraf_utama');

konten_block.forEach((block, index) => {
  block.addEventListener('click', () => {
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