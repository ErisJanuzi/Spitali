
document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-up, .slide-left, .slide-right, .parallax-card");
    const options = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        });
    }, options);
    faders.forEach(fader => appearOnScroll.observe(fader));
});


window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    hero.style.transform = `translateY(${offset * 0.3}px)`;

    const parallaxCards = document.querySelectorAll('.parallax-card');
    parallaxCards.forEach(card => {
        const speed = parseFloat(card.closest('section')?.dataset?.parallaxSpeed) || 0.05;
        const cardOffset = card.getBoundingClientRect().top;
        card.style.transform = `translateY(${cardOffset * speed}px)`;
    });
});
