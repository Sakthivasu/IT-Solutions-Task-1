// Interactive JS for Mobile Navbar, Working YouTube Video Modal, and Subscription Alert
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Newsletter Subscription Handler ("Subscribed Successfully!" only)
    const newsletterForm = document.getElementById('newsletter-form');
    const successMsg = document.getElementById('subscribe-success-msg');
    
    if (newsletterForm && successMsg) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('newsletter-email');
            if (emailInput && emailInput.value) {
                successMsg.classList.remove('hidden');
                emailInput.value = '';
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 5000);
            }
        });
    }

    // Working Video Modal Handlers with YouTube URL Injection
    const watchBtn = document.getElementById('watch-video-btn');
    const videoModal = document.getElementById('video-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const videoFrame = document.getElementById('youtube-video-frame');
    const youtubeUrl = "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1"; // Working IT/Tech overview video

    if (watchBtn && videoModal && closeModalBtn && videoFrame) {
        watchBtn.addEventListener('click', () => {
            videoFrame.src = youtubeUrl;
            videoModal.classList.remove('hidden');
        });

        closeModalBtn.addEventListener('click', () => {
            videoFrame.src = ""; // Stop video playback on close
            videoModal.classList.add('hidden');
        });

        window.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                videoFrame.src = "";
                videoModal.classList.add('hidden');
            }
        });
    }
});
// Services Page Interactive JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Newsletter Subscription Handler
    const newsletterForm = document.getElementById('newsletter-form');
    const successMsg = document.getElementById('subscribe-success-msg');
    
    if (newsletterForm && successMsg) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('newsletter-email');
            if (emailInput && emailInput.value) {
                successMsg.classList.remove('hidden');
                emailInput.value = '';
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 5000);
            }
        });
    }

    // Sidebar Navigation Active State Highlighting on Click & Scroll
    const navLinks = document.querySelectorAll('.service-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => {
                l.classList.remove('text-blue-400', 'bg-blue-950/60', 'border', 'border-blue-800/40', 'font-semibold');
                l.classList.add('text-slate-300', 'font-medium');
            });
            this.classList.remove('text-slate-300', 'font-medium');
            this.classList.add('text-blue-400', 'bg-blue-950/60', 'border', 'border-blue-800/40', 'font-semibold');
        });
    });
});
// Interactive JS for Mobile Navbar & Subscription Alert
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Newsletter Subscription Handler
    const newsletterForm = document.getElementById('newsletter-form');
    const successMsg = document.getElementById('subscribe-success-msg');
    
    if (newsletterForm && successMsg) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('newsletter-email');
            if (emailInput && emailInput.value) {
                successMsg.classList.remove('hidden');
                emailInput.value = '';
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 5000);
            }
        });
    }
});
// Enquiry Page Interactive JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.enquiry-tab');
    const formTitle = document.getElementById('form-title');
    const requirements = document.getElementById('requirements');

    // Category Selection Tabs (Managed IT, Cybersecurity, Cloud, IT Consulting)
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => {
                t.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
                t.classList.add('text-slate-400', 'hover:text-white', 'hover:bg-slate-800');
            });
            this.classList.remove('text-slate-400', 'hover:text-white', 'hover:bg-slate-800');
            this.classList.add('bg-blue-600', 'text-white', 'shadow-md');

            const category = this.getAttribute('data-category');
            if (formTitle && requirements) {
                formTitle.textContent = `Enquiry for ${category}`;
                requirements.placeholder = `Please share your requirements regarding ${category}, current challenges or any specific information.`;
            }
        });
    });

    // Mobile Menu Toggle
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Newsletter Subscription Alert Handler
    const newsletterForm = document.getElementById('newsletter-form');
    const successMsg = document.getElementById('subscribe-success-msg');
    if (newsletterForm && successMsg) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('newsletter-email');
            if (emailInput && emailInput.value) {
                successMsg.classList.remove('hidden');
                emailInput.value = '';
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 5000);
            }
        });
    }
});
// Confirmation Page Interactive JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const enquiryNumElem = document.getElementById('enquiry-number');
    const copyBtn = document.getElementById('copy-btn');
    const copyToast = document.getElementById('copy-toast');

    // Generate Dynamic Random Enquiry Number (e.g., NX-2026-8492)
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const generatedEnquiryId = `NX-2026-${randomNum}`;
    
    if (enquiryNumElem) {
        enquiryNumElem.textContent = generatedEnquiryId;
    }

    // Copy to Clipboard Feature
    if (copyBtn && enquiryNumElem) {
        copyBtn.addEventListener('click', () => {
            const numToCopy = enquiryNumElem.textContent;
            navigator.clipboard.writeText(numToCopy).then(() => {
                if (copyToast) {
                    copyToast.classList.remove('hidden');
                    setTimeout(() => {
                        copyToast.classList.add('hidden');
                    }, 3000);
                }
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }

    // Mobile Menu Toggle
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Newsletter Alert Handler
    const newsletterForm = document.getElementById('newsletter-form');
    const successMsg = document.getElementById('subscribe-success-msg');
    if (newsletterForm && successMsg) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('newsletter-email');
            if (emailInput && emailInput.value) {
                successMsg.classList.remove('hidden');
                emailInput.value = '';
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 5000);
            }
        });
    }
});