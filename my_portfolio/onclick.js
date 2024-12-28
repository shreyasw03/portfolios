const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300,
  });
  function contact() {
    scroll.animateScroll(document.querySelector('.section15'));
  }
  function toparrow() {
scroll.animateScroll(document.querySelector('.section1'));
      }

  function on() {
    document.getElementById('overlay').style.display = "block";
  }
  function on1() {
    document.getElementById('overlay1').style.display = "block";
  }
  function on2() {
    document.getElementById('overlay2').style.display = "block";
  }
  function on3() {
    document.getElementById('overlay3').style.display = "block";
  }
  function on4() {
    document.getElementById('overlay4').style.display = "block";
  }
  function on5() {
    document.getElementById('overlay5').style.display = "block";
  }
  function off() {
    document.getElementById('overlay').style.display = "none";
    document.getElementById('overlay1').style.display = "none";
    document.getElementById('overlay2').style.display = "none";
    document.getElementById('overlay3').style.display = "none";
    document.getElementById('overlay4').style.display = "none";
    document.getElementById('overlay5').style.display = "none";
  }