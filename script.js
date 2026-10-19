const counters = document.querySelectorAll(".counter");

function runCounter(counter) {
    const target = +counter.getAttribute("data-target");
    const increment = Math.max(1, target / 100);
    let current = 0;

    const updateCounter = () => {
        current += increment;

        if (current < target) {
            counter.innerText = Math.ceil(current);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
}

// Start each counter when it scrolls into view (once only)
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            runCounter(entry.target);
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.4 });

counters.forEach(counter => observer.observe(counter));
