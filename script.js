const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");

    const updateCounter = () => {

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText =
                Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }
    };

    updateCounter();
});