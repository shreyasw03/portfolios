function startLoader() {
    let ce = document.querySelector('.counter');
    let currentValue = 0;
    function updateCounter() {
        if (currentValue === 100) {
            return;
        }
        currentValue += Math.floor(Math.random() * 10) + 1;
        if (currentValue > 100) {
            currentValue = 100;
        }
        ce.textContent = currentValue;
        let delay = Math.floor(Math.random() * 100) + 50;
        setTimeout(updateCounter, delay);
    }
    updateCounter();
}

startLoader();

gsap.to(".counter",0.25,{
    delay: 2.5, 
    opacity: 0,
    css:{display:"none"}
    });

    gsap.to(".bar",1.5,{
    delay: 2,
    width: 0,
    stagger:{amount: 0.5,
    },
    ease:"power4.inOut",
});
gsap.to(".overlayforLoader",1.5,{
    delay: 2, 
    css:{display:"none"}
    });