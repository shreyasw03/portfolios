gsap.set(".skillspanskillbt",{opacity:0,rotateX:90});

gsap.to(".skillspanskillbt",{
    scrollTrigger: {
      trigger: ".gsapskillbt",
      start:"-230px center",
      scrub:3,
      end:"-180px center",
    },
    opacity:1,
    rotateX:0,
    stagger: 0.1
  });