gsap.set(".movetoleft",{opacity:0,x:-80})

gsap.to(".movetoleft", {
    scrollTrigger: {
      trigger: ".movetoleft",
      start: "-400px center",
      end: "0 center",
      scrub: 4,
    },
    opacity: 1,
    x: 0,
    stagger: 0.2

  });