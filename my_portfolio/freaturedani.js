gsap.set(".skillspanskillft",{opacity:0,rotateX:90});

gsap.to(".skillspanskillft",{
    scrollTrigger: {
      trigger: ".gsapskillft",
      start:"-100px center",
      scrub:3,
      end:"-200px center",
    },
    opacity:1,
    rotateX:0,
    stagger: 0.1
  });


gsap.set(".skillspanskillft2",{opacity:0,rotateX:90});

gsap.to(".skillspanskillft2",{
    scrollTrigger: {
      trigger: ".gsapskillft2",
      start:"-200px center",
      scrub:3,
      end:"-100px center",
     
    },
    opacity:1,
    rotateX:0,
    stagger: 0.1
  });