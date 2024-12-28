gsap.set(".featuredtextname",{opacity:0})
gsap.to(".featuredtextname",{
    scrollTrigger: {
      trigger: ".featuredtexthead",
      start:"+=" + 70 * panels.length + "%",
      end: "+=" + 10 * panels.length + "%",
      scrub:2
    },
  opacity: 1
  });
  
  gsap.set(".btnfeat",{opacity:0})
  gsap.to(".btnfeat",{
    scrollTrigger: {
      trigger: ".featuredtexthead",
      start:"+=" + 80 * panels.length + "%",
      end: "+=" + 10 * panels.length + "%",
      scrub:2,

    },
  opacity: 1
  });
  

  gsap.set(".img1ofc",{x:-105})
  gsap.to(".img1ofc",{
    scrollTrigger: {
      trigger: ".featuredtexthead",
      start:"+=" + 80 * panels.length + "%",
      end: "+=" + 20 * panels.length + "%",
      scrub:2
    },
  x:0
  });

  gsap.set(".img1ofc2",{x:-105})
  gsap.to(".img1ofc2",{
    scrollTrigger: {
      trigger: ".featuredtexthead",
      start:"+=" + 80 * panels.length + "%",
      end: "+=" + 20 * panels.length + "%",
      scrub:2
    },
  x:0
  });
  