 $(document).ready(function () {
  $('.video-slider, .partners-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
	]
	});

document.getElementById("time").innerHTML = getTime();
  function getTime(){
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('time').innerHTML =
      h + ":" + m + ":" + s;
      setTimeout(getTime, 500);
  }
  function checkTime(i) {
      if (i < 10) {i = "0" + i;}  // add zero in front of numbers < 10
      return i;
  }
document.getElementById("date").innerHTML = getdate();
    function getdate()
    {
    var d = new Date();
    months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[d.getDay()]+', '+d.getDate()+' '+months[d.getMonth()]+'.';
    }


});