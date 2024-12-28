jQuery(document).ready(function() {
    var mouseX = -25, mouseY = -25;
    var xp = 0, yp = 0;
    
    $(document).mousemove(function(e){
      mouseX = e.pageX - 25;
      mouseY = e.pageY - 25; 
    });
    
    setInterval(function(){
      xp += ((mouseX - xp)/3);
      yp += ((mouseY - yp)/3);
      $("#circle").css({left: xp +'px', top: yp +'px'});
    }, 1);});
    