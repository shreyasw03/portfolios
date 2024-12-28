const pathbf = document.querySelector('.pathb1');
const lengthbf = pathbf.getTotalLength(); 
    pathbf.style.transition = pathbf.style.WebkitTransition = 'none';
pathbf.style.strokeDasharray = lengthbf + ' ' + lengthbf;
pathbf.style.strokeDashoffset = lengthbf;
pathbf.getBoundingClientRect();

const pathbf1 = document.querySelector('.pathb2');
const lengthbf1 = pathbf1.getTotalLength(); 
    pathbf1.style.transition = pathbf1.style.WebkitTransition = 'none';
pathbf1.style.strokeDasharray = lengthbf1 + ' ' + lengthbf1;
pathbf1.style.strokeDashoffset = lengthbf1;
pathbf1.getBoundingClientRect();

const pathbf2 = document.querySelector('.pathb3');
const lengthbf2 = pathbf2.getTotalLength(); 
    pathbf2.style.transition = pathbf2.style.WebkitTransition = 'none';
pathbf2.style.strokeDasharray = lengthbf2 + ' ' + lengthbf2;
pathbf2.style.strokeDashoffset = lengthbf;
pathbf2.getBoundingClientRect();

const pathbf3 = document.querySelector('.pathb4');
const lengthbf3 = pathbf3.getTotalLength(); 
    pathbf3.style.transition = pathbf3.style.WebkitTransition = 'none';
pathbf3.style.strokeDasharray = lengthbf3 + ' ' + lengthbf3;
pathbf3.style.strokeDashoffset = lengthbf3;
pathbf3.getBoundingClientRect();

gsap.to(".pathb1",{
    scrollTrigger: {
      trigger: ".pathb1",
      start:"-50px center",
      // end:"50% top",
      end:"+=170px",
      scrub:2,
      toggleActions: "restart pause reverse pause",
    },
  strokeDashoffset: '0',
  duration:3
  });

  gsap.to(".pathb2",{
    scrollTrigger: {
      trigger: ".pathb2",
      start:"-50px center",
      // end:"50% top",
      end:"+=170px",
      scrub:2,
      toggleActions: "restart pause reverse pause",
    },
  strokeDashoffset: '0',
  duration:3
  });

  gsap.to(".pathb3",{
    scrollTrigger: {
      trigger: ".pathb3",
      start:"-50px center",
      // end:"50% top",
      end:"+=170px",
      scrub:2,
      toggleActions: "restart pause reverse pause",
    },
  strokeDashoffset: '0',
  duration:3
  });

  gsap.to(".pathb4",{
    scrollTrigger: {
      trigger: ".pathb4",
      start:"-50px center",
      // end:"50% top",
      end:"+=170px",
      scrub:2,
      toggleActions: "restart pause reverse pause",
    },
  strokeDashoffset: '0',
  duration:3
  });



  const path2bf = document.querySelector('.pathb12');
  const length2bf = path2bf.getTotalLength(); 
      path2bf.style.transition = path2bf.style.WebkitTransition = 'none';
  path2bf.style.strokeDasharray = length2bf + ' ' + length2bf;
  path2bf.style.strokeDashoffset = length2bf;
  path2bf.getBoundingClientRect();

  const path3bf = document.querySelector('.pathb22');
const length3bf = path3bf.getTotalLength(); 
    path3bf.style.transition = path3bf.style.WebkitTransition = 'none';
path3bf.style.strokeDasharray = length3bf + ' ' + length3bf;
path3bf.style.strokeDashoffset = length3bf;
path3bf.getBoundingClientRect();

const path4bf = document.querySelector('.pathb32');
const length4bf = path4bf.getTotalLength(); 
    path4bf.style.transition = path4bf.style.WebkitTransition = 'none';
path4bf.style.strokeDasharray = length4bf + ' ' + length4bf;
path4bf.style.strokeDashoffset = length4bf;
path4bf.getBoundingClientRect();

const path5bf = document.querySelector('.pathb42');
const length5bf = path5bf.getTotalLength(); 
    path5bf.style.transition = path5bf.style.WebkitTransition = 'none';
path5bf.style.strokeDasharray = length5bf + ' ' + length5bf;
path5bf.style.strokeDashoffset = length5bf;
path5bf.getBoundingClientRect();

gsap.to(".pathb12",{
  scrollTrigger: {
    trigger: ".pathb12",
    start:"-50px center",
    // end:"50% top",
    end:"+=170px",
    scrub:2,
    toggleActions: "restart pause reverse pause"
  },
strokeDashoffset: '0',
duration:3
});

gsap.to(".pathb22",{
  scrollTrigger: {
    trigger: ".pathb22",
    start:"-50px center",
    // end:"50% top",
    end:"+=170px",
    scrub:2,
    toggleActions: "restart pause reverse pause"
  },
strokeDashoffset: '0',
duration:3
});

gsap.to(".pathb32",{
  scrollTrigger: {
    trigger: ".pathb32",
    start:"-50px center",
    // end:"50% top",
    end:"+=170px",
    scrub:2,
    toggleActions: "restart pause reverse pause"
  },
strokeDashoffset: '0',
duration:3
});

gsap.to(".pathb42",{
  scrollTrigger: {
    trigger: ".pathb42",
    start:"-50px center",
    // end:"50% top",
    end:"+=170px",
    scrub:2,
    toggleActions: "restart pause reverse pause"
  },
strokeDashoffset: '0',
duration:3
});