gsap.to(".first",{
    scrollTrigger: {
      trigger: ".first",
      start:"-250px center",
      scrub:4,
      end:"550px center"
    },
    x:-40
  });
  
  gsap.to(".second",{
    scrollTrigger: {
      trigger: ".second",
      start:"-250px center",
      scrub:4,
      end:"550px center"
    },
    x:-40
  });
  