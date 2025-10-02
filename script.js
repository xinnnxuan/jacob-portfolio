// Grit Pictures inspired interactive effects
document.addEventListener('DOMContentLoaded', function() {
    
    // Random floating animation for elements
    function addFloatingAnimation() {
        const floatingElements = document.querySelectorAll('.ufo, .torn-paper, .small-figure');
        
        floatingElements.forEach((element, index) => {
            const randomDelay = Math.random() * 2;
            const randomDuration = 3 + Math.random() * 2;
            const randomAmplitude = 5 + Math.random() * 10;
            
            element.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`;
        });
    }

    // Add floating keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            100% { transform: translateY(-${Math.random() * 20 + 10}px) rotate(${Math.random() * 10 - 5}deg); }
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-2px); }
            75% { transform: translateX(2px); }
        }
        
        @keyframes lightning {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
        }
        
        @keyframes tearDrop {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(20px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // Interactive hover effects for torn papers
    const tornPapers = document.querySelectorAll('.torn-paper');
    tornPapers.forEach(paper => {
        paper.addEventListener('mouseenter', function() {
            this.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(1.1)`;
            this.style.zIndex = '100';
            this.style.boxShadow = '4px 4px 15px rgba(255, 255, 255, 0.5)';
        });
        
        paper.addEventListener('mouseleave', function() {
            const originalRotation = this.style.getPropertyValue('--rotation') || '0deg';
            this.style.transform = `rotate(${originalRotation}) scale(1)`;
            this.style.zIndex = '10';
            this.style.boxShadow = '2px 2px 8px rgba(255, 255, 255, 0.3)';
        });
    });

    // Menu button interaction
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.getElementById('navMenu');
    const navClose = document.getElementById('navClose');
    
    if (menuButton && navMenu) {
        menuButton.addEventListener('click', function() {
            this.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
                navMenu.classList.add('active');
            }, 500);
        });
    }
    
    // Close menu functionality
    if (navClose && navMenu) {
        navClose.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    }
    
    // Close menu when clicking outside
    if (navMenu) {
        navMenu.addEventListener('click', function(e) {
            if (e.target === navMenu) {
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Navigation button interactions
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Close menu
            navMenu.classList.remove('active');
            
            // Handle navigation to different pages
            switch(section) {
                case 'about':
                    window.location.href = 'about.html';
                    break;
                case 'work':
                    window.location.href = 'work.html';
                    break;
                case 'resume':
                    window.location.href = 'resume.html';
                    break;
                case 'contact':
                    window.location.href = 'contact.html';
                    break;
                default:
                    // Stay on current page for home
                    break;
            }
        });
        
        // Add hover effects
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Lightning effect on cloud
    const lightningBolts = document.querySelectorAll('.lightning');
    lightningBolts.forEach(bolt => {
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance every interval
                bolt.style.animation = 'lightning 0.2s ease-in-out';
                setTimeout(() => {
                    bolt.style.animation = '';
                }, 200);
            }
        }, 1000);
    });

    // Tear drop animation
    const tears = document.querySelectorAll('.tear');
    tears.forEach((tear, index) => {
        setInterval(() => {
            if (Math.random() < 0.05) { // 5% chance
                tear.style.animation = 'tearDrop 1s ease-out';
                setTimeout(() => {
                    tear.style.animation = '';
                }, 1000);
            }
        }, 2000 + index * 500);
    });

    // UFO movement
    const ufos = document.querySelectorAll('.ufo');
    ufos.forEach((ufo, index) => {
        let direction = 1;
        setInterval(() => {
            const currentTransform = ufo.style.transform || '';
            const currentX = (currentTransform.match(/translateX\(([^)]+)\)/) || [0, '0'])[1];
            const newX = parseFloat(currentX) + (direction * 2);
            
            if (newX > 50 || newX < -50) {
                direction *= -1;
            }
            
            ufo.style.transform = `translateX(${newX}px)`;
        }, 100 + index * 50);
    });

    // Camera lens effect
    const cameras = document.querySelectorAll('.film-camera');
    cameras.forEach(camera => {
        camera.addEventListener('mouseenter', function() {
            const lens = this.querySelector('::before') || this;
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
        });
        
        camera.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.boxShadow = 'none';
        });
    });

    // Skull interaction
    const skull = document.querySelector('.skull');
    if (skull) {
        skull.addEventListener('click', function() {
            this.style.animation = 'shake 0.3s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        });
    }

    // Nunchaku spinning effect
    const nunchaku = document.querySelector('.nunchaku');
    if (nunchaku) {
        nunchaku.addEventListener('mouseenter', function() {
            this.style.animation = 'spin 2s linear infinite';
        });
        
        nunchaku.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    }

    // Add spin keyframe
    const spinStyle = document.createElement('style');
    spinStyle.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinStyle);

    // Random star twinkling
    const stars = document.querySelector('.stars');
    if (stars) {
        setInterval(() => {
            stars.style.opacity = Math.random() * 0.5 + 0.2;
        }, 2000);
    }

    // Torn photo hover effects
    const tornPhotos = document.querySelectorAll('.torn-photo');
    tornPhotos.forEach(photo => {
        photo.addEventListener('mouseenter', function() {
            this.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(1.1)`;
            this.style.zIndex = '100';
            this.style.boxShadow = '5px 5px 20px rgba(255, 255, 255, 0.3)';
        });
        
        photo.addEventListener('mouseleave', function() {
            const originalRotation = this.style.getPropertyValue('--photo-rotation') || '0deg';
            this.style.transform = `rotate(${originalRotation}) scale(1)`;
            this.style.zIndex = '10';
            this.style.boxShadow = '3px 3px 10px rgba(255, 255, 255, 0.2)';
        });
    });


    // Eye tracking effect
    const eyes = document.querySelectorAll('.eye, .eye-photo');
    eyes.forEach(eye => {
        document.addEventListener('mousemove', function(e) {
            const rect = eye.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
            const pupil = eye.querySelector('.pupil') || eye;
            
            const moveX = Math.cos(angle) * 3;
            const moveY = Math.sin(angle) * 2;
            
            pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // Initialize floating animations
    addFloatingAnimation();

    // Random element movement
    setInterval(() => {
        const elements = document.querySelectorAll('.torn-paper, .ufo, .small-figure');
        elements.forEach(element => {
            if (Math.random() < 0.1) { // 10% chance
                const randomX = (Math.random() - 0.5) * 10;
                const randomY = (Math.random() - 0.5) * 10;
                const randomRotate = (Math.random() - 0.5) * 10;
                
                element.style.transform += ` translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
                
                setTimeout(() => {
                    element.style.transform = element.style.transform.replace(/ translate\([^)]+\) rotate\([^)]+\)/g, '');
                }, 2000);
            }
        });
    }, 3000);

    // Add some chaos - random element shaking
    setInterval(() => {
        const randomElement = document.querySelectorAll('.torn-paper, .ufo, .small-figure, .skull')[Math.floor(Math.random() * 4)];
        if (randomElement && Math.random() < 0.3) {
            randomElement.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                randomElement.style.animation = '';
            }, 500);
        }
    }, 5000);

    // Page load effect
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 1s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
        
        // Staggered element appearance
        const elements = document.querySelectorAll('.torn-paper, .ufo, .small-figure, .skull, .nunchaku');
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform += ' scale(0.5)';
            
            setTimeout(() => {
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                element.style.opacity = '1';
                element.style.transform = element.style.transform.replace(' scale(0.5)', '');
            }, index * 100);
        });
    });

    // Add some grit - random glitch effects
    setInterval(() => {
        if (Math.random() < 0.05) { // 5% chance
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 100);
        }
    }, 2000);

    // Image rotation functionality
    const imageSets = {
        photo1: [
            'images/Photos/Picture1.png',
            'images/Photos/Picture2.png',
            'images/Photos/Picture3.png',
            'images/Photos/Picture4.png'
        ],
        photo2: [
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&crop=face',
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop&crop=face',
            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&crop=face',
            'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=200&fit=crop&crop=face',
            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&crop=face'
        ]
    };

    let currentImageIndex = {
        photo1: 0,
        photo2: 0
    };

    function rotateImages() {
        const photo1Img = document.querySelector('.photo-1 .rotating-image');
        const photo2Img = document.querySelector('.photo-2 .rotating-image');
        
        if (photo1Img) {
            // Fade out current image
            photo1Img.classList.add('fade-out');
            
            setTimeout(() => {
                // Update to next image
                currentImageIndex.photo1 = (currentImageIndex.photo1 + 1) % imageSets.photo1.length;
                photo1Img.src = imageSets.photo1[currentImageIndex.photo1];
                photo1Img.alt = `Jacob - Personal photo ${currentImageIndex.photo1 + 1}`;
                
                // Fade in new image
                photo1Img.classList.remove('fade-out');
            }, 500);
        }
        
        if (photo2Img) {
            // Fade out current image
            photo2Img.classList.add('fade-out');
            
            setTimeout(() => {
                // Update to next image
                currentImageIndex.photo2 = (currentImageIndex.photo2 + 1) % imageSets.photo2.length;
                photo2Img.src = imageSets.photo2[currentImageIndex.photo2];
                photo2Img.alt = `Team collaboration ${currentImageIndex.photo2 + 1}`;
                
                // Fade in new image
                photo2Img.classList.remove('fade-out');
            }, 500);
        }
    }

    // Start image rotation every 2 seconds
    setInterval(rotateImages, 2000);

    // Graphics interaction
    const tornGraphics = document.querySelectorAll('.torn-graphic');
    tornGraphics.forEach(graphic => {
        graphic.addEventListener('mouseenter', function() {
            this.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(1.1)`;
            this.style.zIndex = '100';
            this.style.boxShadow = '4px 4px 15px rgba(255, 255, 255, 0.5)';
        });
        
        graphic.addEventListener('mouseleave', function() {
            const originalRotation = this.style.getPropertyValue('--graphic-rotation') || '0deg';
            this.style.transform = `rotate(${originalRotation}) scale(1)`;
            this.style.zIndex = '5';
            this.style.boxShadow = '2px 2px 8px rgba(255, 255, 255, 0.3)';
        });

        // Add click interaction
        graphic.addEventListener('click', function() {
            this.style.animation = 'shake 0.3s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        });
    });
});

// Utility functions for the gritty experience
const gritUtils = {
    // Add random chaos to elements
    addChaos: function() {
        const elements = document.querySelectorAll('.torn-paper, .ufo');
        elements.forEach(element => {
            if (Math.random() < 0.3) {
                const randomTransform = `rotate(${Math.random() * 360}deg) scale(${0.8 + Math.random() * 0.4})`;
                element.style.transform = randomTransform;
            }
        });
    },
    
    // Create random floating particles
    createParticle: function() {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = '#ffffff';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        
        document.body.appendChild(particle);
        
        const animation = particle.animate([
            { transform: 'translateY(0px)', opacity: 1 },
            { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
        ], {
            duration: 3000 + Math.random() * 2000,
            easing: 'linear'
        });
        
        animation.onfinish = () => particle.remove();
    }
};

// Create floating particles occasionally
setInterval(() => {
    if (Math.random() < 0.1) {
        gritUtils.createParticle();
    }
}, 2000);

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Create mailto link
            const mailtoLink = `mailto:jacob.r.spence@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Thank you for your message! Your email client should open with a pre-filled message. If it doesn\'t, please email jacob.r.spence@gmail.com directly.');
            
            // Reset form
            contactForm.reset();
        });
    }
});
