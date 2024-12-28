console.clear();

const panels = gsap.utils.toArray(".panelft");
const panelsTween = gsap.to(panels, {
  xPercent: (i) => -100 * i,
  duration: (i) => i,
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapperft",
    start: "top top",
    end: "+=" + 100 * panels.length + "%",
    scrub: true,
    pin: true
  },
  x:0,
  opacity: 1
});


