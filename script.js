/**
 * Portfolio - Interactive Elements & Effects
 * Handles drawer navigation, custom cursor, scroll animations, and UI interactions
 */

// ============================================================================
// DRAWER NAVIGATION
// ============================================================================

const drawerElements = {
    drawer: document.getElementById('drawer'),
    overlay: document.getElementById('overlay'),
    floatBtn: document.getElementById('floatBtn'),
};

const toggleDrawer = () => {
    drawerElements.drawer.classList.contains('open')
        ? closeDrawer()
        : openDrawer();
};

const openDrawer = () => {
    Object.values(drawerElements).forEach(el => el?.classList.add('open'));
    document.body.style.overflow = 'hidden';
};

const closeDrawer = () => {
    Object.values(drawerElements).forEach(el => el?.classList.remove('open'));
    document.body.style.overflow = '';
};

// Expose to global scope for onclick handlers
window.dToggle = toggleDrawer;
window.dOpen = openDrawer;
window.dClose = closeDrawer;

// Close drawer on Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeDrawer();
    }
});

// ============================================================================
// CUSTOM CURSOR EFFECT
// ============================================================================

const cursorElements = {
    dot: document.getElementById('cur'),
    ring: document.getElementById('curl'),
};

let cursorPos = { mouse: { x: 0, y: 0 }, ring: { x: 0, y: 0 } };

const updateCursorPosition = (e) => {
    cursorPos.mouse.x = e.clientX;
    cursorPos.mouse.y = e.clientY;
    cursorElements.dot.style.left = `${e.clientX}px`;
    cursorElements.dot.style.top = `${e.clientY}px`;
};

const animateCursorRing = () => {
    const friction = 0.11;
    cursorPos.ring.x += (cursorPos.mouse.x - cursorPos.ring.x) * friction;
    cursorPos.ring.y += (cursorPos.mouse.y - cursorPos.ring.y) * friction;

    cursorElements.ring.style.left = `${cursorPos.ring.x}px`;
    cursorElements.ring.style.top = `${cursorPos.ring.y}px`;

    requestAnimationFrame(animateCursorRing);
};

document.addEventListener('mousemove', updateCursorPosition);
animateCursorRing();

// ============================================================================
// CURSOR HOVER EFFECT ON INTERACTIVE ELEMENTS
// ============================================================================

const interactiveSelectors = [
    'a',
    'button',
    '.chip',
    '.vc',
    '.edu-card',
    '.proj-card',
    '.prod-card',
    '.c-link',
];

const cursorScaleUp = () => {
    cursorElements.dot.style.transform = 'translate(-50%,-50%) scale(2)';
    cursorElements.ring.style.transform = 'translate(-50%,-50%) scale(1.4)';
    cursorElements.ring.style.borderColor = 'rgba(124,110,247,.9)';
};

const cursorScaleDown = () => {
    cursorElements.dot.style.transform = 'translate(-50%,-50%) scale(1)';
    cursorElements.ring.style.transform = 'translate(-50%,-50%) scale(1)';
    cursorElements.ring.style.borderColor = 'rgba(124,110,247,.5)';
};

interactiveSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
        element.addEventListener('mouseenter', cursorScaleUp);
        element.addEventListener('mouseleave', cursorScaleDown);
    });
});

// ============================================================================
// SCROLL-BASED REVEAL ANIMATIONS
// ============================================================================

const initializeRevealAnimations = () => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('on');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08 }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
};

initializeRevealAnimations();

// ============================================================================
// SCROLL-BASED ACTIVE NAVIGATION
// ============================================================================

const initializeScrollNav = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.dr-nav a');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach((section) => {
            if (window.scrollY >= section.offsetTop - 180) {
                currentSection = section.id;
            }
        });

        navLinks.forEach((link) => {
            const isActive = link.getAttribute('href') === `#${currentSection}`;
            link.classList.toggle('active', isActive);
        });
    });
};

initializeScrollNav();

// ============================================================================
// TYPEWRITER EFFECT FOR EYEBROW TEXT
// ============================================================================

const initializeTypewriterEffect = () => {
    const eyebrowElement = document.getElementById('eyebrow');
    const typewriterText = 'Founder & Builder · EdTech · AI';
    let textIndex = 0;

    eyebrowElement.style.opacity = '1';

    setTimeout(() => {
        const typewriterInterval = setInterval(() => {
            eyebrowElement.textContent = typewriterText.slice(0, ++textIndex);

            if (textIndex === typewriterText.length) {
                clearInterval(typewriterInterval);
            }
        }, 50);
    }, 500);
};

initializeTypewriterEffect();

// ============================================================================
// CONTACT FORM - SEND BUTTON HANDLER
// ============================================================================

const initializeSendButton = () => {
    const sendButton = document.getElementById('sendBtn');

    sendButton?.addEventListener('click', () => {
        sendButton.textContent = 'Message Sent ✓';
        sendButton.style.background = 'linear-gradient(135deg,#00f5c4,#7c6ef7)';
    });
};

initializeSendButton();
