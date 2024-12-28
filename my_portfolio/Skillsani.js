gsap.set(".skillspanskill",{opacity:0,rotateX:90});

gsap.to(".skillspanskill",{
    scrollTrigger: {
      trigger: ".gsapskill",
      start:"-250px center",
      scrub:3,
      end:"-220px center",
    },
    opacity:1,
    rotateX:0,
    stagger: 0.1
  });


  gsap.set(".skillspanskill2",{opacity:0,rotateX:90});

gsap.to(".skillspanskill2",{
    scrollTrigger: {
      trigger: ".gsapskill",
      start:"-200px center",
      scrub:3,
      end:"-170px center"
    },
    opacity:1,
    rotateX:0,
    stagger: 0.1
  });





  gsap.set(".spanskill",{opacity:0,y:30});
  gsap.to(".spanskill",{
    scrollTrigger: {
      trigger: ".ulskill",
      start:"-300px center",
      scrub:5,
      end:"-100px center"
    },
    opacity:1,
    y:0,
    stagger: 0.1
  });


  const textfill = document.querySelector('.filltext');
  textfill.innerHTML = textfill.innerText.split('').map(
      (char) => 
      `<span class="spantextfill">${char}</span>`
  ).join('');


  gsap.to(".spantextfill",{
    scrollTrigger: {
      trigger: ".filltext",
      start:"-200px center",
      scrub:3,
      end:"bottom center"
    },
    color: "#3f3b37",
    stagger: 0.4
  });



