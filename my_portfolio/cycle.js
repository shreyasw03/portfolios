const pathcycle = document.querySelector('.pathcycle');
const lengthcycle = pathcycle.getTotalLength(); 
    pathcycle.style.transition = pathcycle.style.WebkitTransition = 'none';
pathcycle.style.strokeDasharray = lengthcycle + ' ' + lengthcycle;
pathcycle.style.strokeDashoffset = lengthcycle;
pathcycle.getBoundingClientRect();

const path2cycle = document.querySelector('.pathcycle2');
const length2cycle = path2cycle.getTotalLength(); 
    path2cycle.style.transition = path2cycle.style.WebkitTransition = 'none';
path2cycle.style.strokeDasharray = length2cycle + ' ' + length2cycle;
path2cycle.style.strokeDashoffset = length2cycle;
path2cycle.getBoundingClientRect();

gsap.to(".pathcycle",{
    scrollTrigger: {
      trigger: ".pathcycle",
      start:"1000px center",
      end:"3500px center",
      scrub:2,
      toggleActions: "restart pause reverse pause",
    },
  strokeDashoffset: '0',
  duration:3
  });

  gsap.to(".pathcycle2",{
    scrollTrigger: {
      trigger: ".pathcycle2",
      start:"top center",
      end:"500% center",
      scrub:2,
      toggleActions: "restart pause reverse pause",
    },
  strokeDashoffset: '0',
  duration:3
  });
  

gsap.set(".skillspanskillcy",{opacity:0,rotateX:90});

gsap.to(".skillspanskillcy",{
    scrollTrigger: {
      trigger: ".gsapskillcy",
      start:"690px center",
      scrub:3,
      end:"770px center"
    },
    opacity:1,
    rotateX:0,
    stagger: 0.1
  });

gsap.set(".skillspanskillcy2",{opacity:0,rotateX:90});

gsap.to(".skillspanskillcy2",{
    scrollTrigger: {
      trigger: ".gsapskillcy",
      start:"-150px center",
      scrub:3,
      end:"-100px center",
    },
    opacity:1,
    rotateX:0,
    stagger: 0.1
  });





  gsap.set(".fproj",{scale:0.65,y:300});
  gsap.to(".fproj",{
    scrollTrigger: {
      trigger: ".fproj",
      start:"1000px center",
      scrub:3,
      end:"1150px center",
    },
    scale: 1,
    y: 0, 
    ease: 'power1.inOut'

  });


  gsap.to(".proj-imgafter",{
    scrollTrigger: {
      trigger: ".proj-imgafter",
      start:"1100px center",
      end:"1400px center",
    },
    scaleX: 0
  });



  gsap.set(".sproj",{scale:0.65,y:300});
  gsap.to(".sproj",{
    scrollTrigger: {
      trigger: ".sproj",
      start:"1000px center",
      scrub:3,
      end:"1150px center"
    },
    scale: 1,
    y: 0, 
    ease: 'power1.inOut'

  });

  gsap.to(".proj-imgafter2",{
    scrollTrigger: {
      trigger: ".proj-imgafter2",
      start:"1100px center",
      end:"1400px center",
      // markers:true
    },
    scaleX: 0

  });

  gsap.set(".tproj",{scale:0.65,y:300});
  gsap.to(".tproj",{
    scrollTrigger: {
      trigger: ".tproj",
      start:"1000px center",
      scrub:3,
      end:"1150px center",
    },
    scale: 1,
    y: 0, 
    ease: 'power1.inOut'

  });

  gsap.to(".proj-imgafter3",{
    scrollTrigger: {
      trigger: ".proj-imgafter3",
      start:"1100px center",
      end:"1400px center"
    },
    scaleX: 0

  });




  gsap.set(".fprojformb",{scale:0.65,y:250});
  gsap.to(".fprojformb",{
    scrollTrigger: {
      trigger: ".fprojformb",
      start:"-360px center",
      scrub:3,
      end:"-360px center",
    },
    scale: 1,
    y: 0, 
    ease: 'power1.inOut'
  });

  gsap.set(".sprojformb",{scale:0.65,y:250});
  gsap.to(".sprojformb",{
    scrollTrigger: {
      trigger: ".sprojformb",
      start:"-300px center",
      scrub:3,
      end:"-300px center",
    },
    scale: 1,
    y: 0, 
    ease: 'power1.inOut'
  });

  gsap.set(".tprojformb",{scale:0.65,y:250});
  gsap.to(".tprojformb",{
    scrollTrigger: {
      trigger: ".tprojformb",
      start:"-360px center",
      scrub:3,
      end:"-360px center",
    },
    scale: 1,
    y: 0, 
    ease: 'power1.inOut'
  });

  gsap.to(".proj-imgafter1",{
    scrollTrigger: {
      trigger: ".proj-imgafter1",
      start:"-300px center",
      end:"-200px center"
    },
    scaleX: 0
  });
  gsap.to(".proj-imgafter22",{
    scrollTrigger: {
      trigger: ".proj-imgafter22",
      start:"-300px center",
      end:"-200px center"
    },
    scaleX: 0
  });
  gsap.to(".proj-imgafter33",{
    scrollTrigger: {
      trigger: ".proj-imgafter33",
      start:"-300px center",
      end:"-200px center"
    },
    scaleX: 0
  });