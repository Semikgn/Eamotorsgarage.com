document.addEventListener('DOMContentLoaded', () => {
    console.log('EA Motors site initialized');

    // --- 1. Header Scroll Efekti ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        }
    });

    // --- 2. WhatsApp Fonksiyonu (Merkezi Kontrol) ---
    function openWhatsapp(defaultMessage) {
        // Numara: 905433578491
        const phoneNumber = '905433578491';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(whatsappUrl, '_blank');
    }

    // Header "ARACINI HEMEN SAT" Butonu
    const sellButton = document.querySelector('.btn-sell');
    if (sellButton) {
        sellButton.addEventListener('click', (e) => {
            e.preventDefault(); 
            openWhatsapp('Merhaba, aracımı satmak istiyorum. Süreç hakkında bilgi alabilir miyim?');
        });
    }

    // Footer'daki WhatsApp İkonu
    const footerWpButton = document.querySelector('.footer-wp-btn');
    if (footerWpButton) {
        footerWpButton.addEventListener('click', (e) => {
            e.preventDefault();
            // Footer'dan gelenler genelde adres veya genel bilgi sorar
            openWhatsapp('Merhaba, EA Motors hizmetleri hakkında detaylı bilgi almak istiyorum.');
        });
    }

    // Hakkımızda "İLETİŞİME GEÇ" Butonu
    const aboutContactButton = document.querySelector('.btn-read-more');
    if (aboutContactButton) {
        aboutContactButton.addEventListener('click', (e) => {
            e.preventDefault();
            openWhatsapp('Merhaba, EA Motors hizmetleri hakkında detaylı bilgi almak istiyorum.');
        });
    }

    // --- 3. Hamburger Menü Mantığı ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if(menuToggle && mobileNav) {
        // Açma / Kapama
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            menuToggle.classList.toggle('active'); // İkonu döndürmek için
        });

        // Linke tıklanınca menüyü kapat
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
    // --- Hamburger Menüdeki "BİZE ULAŞIN" Butonu ---
    const mobileWpLink = document.querySelector('.mobile-wp-link');
    if (mobileWpLink) {
        mobileWpLink.addEventListener('click', (e) => {
            e.preventDefault(); // Sayfanın zıplamasını engelle
            // WhatsApp'ı aç
            openWhatsapp('Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.');
        });
    }
});