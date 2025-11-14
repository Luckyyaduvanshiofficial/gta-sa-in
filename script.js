document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    const platformTabs = document.querySelectorAll('.platform-tab');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    let currentImageIndex = 0;
    const totalImages = galleryItems.length;

    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        });
    }

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function(e) {
            e.preventDefault();
            navMenu.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.length <= 1) return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                if (navMenu) navMenu.classList.remove('active');
            }
        });
    });

    if (accordionHeaders.length > 0) {
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

        accordionHeaders[0].parentElement.classList.add('active');
    }

    if (galleryItems.length > 0 && lightbox) {
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', function() {
                currentImageIndex = index;
                const img = this.querySelector('img');
                if (img) openLightbox(img.src);
            });
        });
    }

    function openLightbox(src) {
        if (lightbox && lightboxImg) {
            lightboxImg.src = src;
            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    function closeLightbox() {
        if (lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    function showNextImage() {
        if (galleryItems.length > 0) {
            currentImageIndex = (currentImageIndex + 1) % totalImages;
            const nextImg = galleryItems[currentImageIndex].querySelector('img');
            if (nextImg && lightboxImg) lightboxImg.src = nextImg.src;
        }
    }

    function showPrevImage() {
        if (galleryItems.length > 0) {
            currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
            const prevImg = galleryItems[currentImageIndex].querySelector('img');
            if (prevImg && lightboxImg) lightboxImg.src = prevImg.src;
        }
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

    if (lightbox) {
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
    }

    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length > 0) {
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
    }

    if (platformTabs.length > 0) {
        platformTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const platform = this.getAttribute('data-platform');
                
                platformTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                document.querySelectorAll('.platform-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                const targetContent = document.getElementById(platform + '-content');
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                galleryItems.forEach(item => {
                    if (filter === 'all') {
                        item.style.display = 'block';
                    } else {
                        const category = item.getAttribute('data-category');
                        item.style.display = category === filter ? 'block' : 'none';
                    }
                });
            });
        });
    }
});
