gsap.to(".spann", {
    scrollTrigger: {
      trigger: ".namevar",
      start: "-170px center",
      end: "270px center",
      scrub: 5,
    },
    y: -320,
    opacity: 1,
    stagger: 0.009,
  });

  gsap.to(".spannn", {
    scrollTrigger: {
      trigger: ".namevar",
      start: "0px center",
      end: "270px center",
      scrub: 5,
    },
    y: -320,
    opacity: 1,
    stagger: 0.009,
  });


  gsap.to(".name1", {
    scrollTrigger: {
      trigger: ".name1",
      start: "150px center",
      end: "570px center",
      scrub: 5,
    },
    x: -150
 
  });

  gsap.to(".name2", {
    scrollTrigger: {
      trigger: ".name2",
      start: "-50px center",
      end: "570px center",
      scrub: 5,
    },
    x: 150
 
  });

  gsap.to(".name3", {
    scrollTrigger: {
      trigger: ".name3",
      start: "10px center",
      end: "570px center",
      scrub: 5
    },
    x: 150
 
  });

  gsap.to(".name4", {
    scrollTrigger: {
      trigger: ".name4",
      start: "63px center",
      end: "570px center",
      scrub: 5
    },
    x: -150
 
  });