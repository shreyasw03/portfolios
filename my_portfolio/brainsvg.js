const path = document.querySelector('.path1');
const length = path.getTotalLength(); 
    path.style.transition = path.style.WebkitTransition = 'none';
path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;
path.getBoundingClientRect();

const path1 = document.querySelector('.path2');
const length1 = path1.getTotalLength(); 
    path1.style.transition = path1.style.WebkitTransition = 'none';
path1.style.strokeDasharray = length1 + ' ' + length1;
path1.style.strokeDashoffset = length1;
path1.getBoundingClientRect();

const path2 = document.querySelector('.path3');
const length2 = path2.getTotalLength(); 
    path2.style.transition = path2.style.WebkitTransition = 'none';
path2.style.strokeDasharray = length2 + ' ' + length2;
path2.style.strokeDashoffset = length2;
path2.getBoundingClientRect();


gsap.to(".path1",{
  scrollTrigger: {
    trigger: ".path1",
    start:"-50px center",
    // end:"50% top",
    end:"+=170px",
    scrub:2,
    toggleActions: "restart pause reverse pause",
  },
strokeDashoffset: '0',
duration:3
});

gsap.to(".path2",{
  scrollTrigger: {
    trigger: ".path2",
    start:"-150px center",
    // end:"50% top",
    end:"+=600px",
    scrub:2,
    toggleActions: "restart pause reverse pause",
  },
strokeDashoffset: '0',
duration:3
});

gsap.to(".path3",{
  scrollTrigger: {
    trigger: ".path3",
    start:"-150px center",
    // end:"50% top",
    end:"+=600px",
    scrub:2,
    toggleActions: "restart pause reverse pause",
  },
strokeDashoffset: '0',
duration:3
});