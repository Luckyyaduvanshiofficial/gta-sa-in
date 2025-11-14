document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    let currentImageIndex = 0;
    const totalImages = galleryItems.length;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');
            
            document.querySelectorAll('.accordion-item').forEach(accItem => {
                accItem.classList.remove('active');
            });
            
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    if (accordionHeaders.length > 0) {
        accordionHeaders[0].parentElement.classList.add('active');
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentImageIndex = index;
            openLightbox(this.querySelector('img').src);
        });
    });

    function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        const nextImg = galleryItems[currentImageIndex].querySelector('img');
        lightboxImg.src = nextImg.src;
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        const prevImg = galleryItems[currentImageIndex].querySelector('img');
        lightboxImg.src = prevImg.src;
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'block') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        }
    });

    const featureCards = document.querySelectorAll('.feature-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Download will start shortly. Please check your downloads folder.');
        });
    });
});
