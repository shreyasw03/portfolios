
const pathtv = document.querySelector('.pathtv');
const lengthtv = pathtv.getTotalLength(); 
    pathtv.style.transition = pathtv.style.WebkitTransition = 'none';
pathtv.style.strokeDasharray = lengthtv + ' ' + lengthtv;
pathtv.style.strokeDashoffset = lengthtv;
pathtv.getBoundingClientRect();

const path2tv = document.querySelector('.pathtv2');
const length2tv = path2tv.getTotalLength(); 
    path2tv.style.transition = path2tv.style.WebkitTransition = 'none';
path2tv.style.strokeDasharray = length2tv + ' ' + length2tv;
path2tv.style.strokeDashoffset = length2tv;
path2tv.getBoundingClientRect();

gsap.to(".pathtv",{
    scrollTrigger: {
      trigger: ".pathtv",
      start:"1100px center",
      end:"3000px center",
      scrub:1,
      toggleActions: "restart pause reverse pause"
    },
  strokeDashoffset: '0'
  });

  gsap.to(".pathtv2",{
    scrollTrigger: {
      trigger: ".pathtv2",
      start:"-100px center",
      end:"500% center",
      scrub:1,
      toggleActions: "restart pause reverse pause"
    },
  strokeDashoffset: '0'
  });
  