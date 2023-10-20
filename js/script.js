
var rtl_status = document.querySelector('html').getAttribute('dir');
var freeMode = false;
if (rtl_status == 'rtl') {
  freeMode = true;
}

var init = {
  canUseWebP: function() {
    var elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }

    // very old browser like IE 8, canvas not supported
    return false;
  },
  dataBg: function() {
    $('section[data-bg], div[data-bg], span[data-bg]').each(function(i){
      var imgWrp = $(this)[0];
      var bg = imgWrp.dataset.bg;
      var webpBg = imgWrp.dataset.webp;
      var mobileBg = imgWrp.dataset.mobilebg;
      var webpMobileBg = imgWrp.dataset.mobilewebp;
      var webpSupport = init.canUseWebP();
      var viewportWidth = $(window).width();
      if(webpSupport){
        if(viewportWidth > 580){
          $(imgWrp).css("background-image", 'url(' +webpBg+ ')');
        } else {
          $(imgWrp).css("background-image", 'url(' +webpMobileBg+ ')');
        }
      } else {
        if(viewportWidth > 580){
          $(imgWrp).css("background-image", 'url(' +bg+ ')');
        } else {
          $(imgWrp).css("background-image", 'url(' +mobileBg+ ')');
        }
      }
    });
  },
}

init.dataBg();
setTimeout(function(){ 
  $('#glassCase').glassCase({
    // 'widthDisplay': 476,
    // 'heightDisplay': 476,
    'isZoomDiffWH': 'true',
    'zoomWidth': 300,
    'zoomHeight': 300,
    'thumbsPosition': 'left',
    'isOneThumbShown': 'true',
    'isDownloadEnabled': 'false',
    'nrThumbsPerRow': '4',
    'thumbsMargin': '20',
    'data-gc-type': 'iframe',
    'zoomPosition': 'right',
  });
}, 1100);

var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");
    }, false);
  });
}
var heroSwiper = new Swiper('.hero-slider', {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  paginationClickable: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
$(".select-control").select2({
  
});
flatpickr(".date-picker", {
  enableTime: true,
  dateFormat: "Y-m-d",
});
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



if ($(".counter").length > 0) {
	const counterUp = window.counterUp.default

	const callback = entries => {
		entries.forEach( entry => {
			const el = entry.target
			if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
				counterUp( el, {
					duration: 2000,
					delay: 16,
				} )
				el.classList.add( 'is-visible' )
			}
		} )
	}
	const IO = new IntersectionObserver( callback, { threshold: 1 } )

	const el = document.querySelector( '.counter' )
	IO.observe( el )
}
var appDownload = $('.download-app');
if($(window).width() < 767){
  $('footer .col-md-3:last-child .footer-item').append(appDownload)
}
var cardSwiper = new Swiper(".swiper-container.card-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var swiper = new Swiper(".country-slider", {
  freeMode: true,
  slidesPerView: 4,
  watchSlidesProgress: true,
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});
var swiper2 = new Swiper(".map-slider", {
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


if ($("#uae").length > 0) {
  function uae(){
    var locations = [

     

    
    ]
    var mapStyle = [
      
      
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ];
    var iconBase = './frontend/assets/img/icons/map-icon.png';
    var map = new google.maps.Map(document.getElementById('uae'), {
      zoom: 9,
      styles: mapStyle,
      center: new google.maps.LatLng(24.674761394184014, 55.680192381045295),
    });
    var infowindow =  new google.maps.InfoWindow({});
    var marker, count;
    for (count = 0; count < locations.length; count++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[count][1], locations[count][2]),
        map: map,
        title: locations[count][0],
        icon: iconBase,
      });
    google.maps.event.addListener(marker, 'click', (function (marker, count) {
        return function () {
          infowindow.setContent(locations[count][0]);
          infowindow.open(map, marker);
        }
      })(marker, count));
    }
  }
  uae();
}




$('.shipping-progress-control .btn').click(function(){
  $(this).parents('.shipping-tracker').toggleClass('show')
});
$('.tab-switch').click(function(){
  $(this).parents('.tab-pane').toggleClass('active').siblings().removeClass('active')
})


$('.hamburger').click(function(){
  $('header').toggleClass('menu-open')
});
$('.overlay').click(function(){
  $('header').removeClass('menu-open');
  $('.middle-item .hamburger').removeClass('is-active');
});

$('.overlay .hamburger').click(function(){
  $(this).addClass('is-active');
  $('.middle-item .hamburger').removeClass('is-active');
})

$('.lower-item .dropdown i').click(function(){
  $(this).parent().toggleClass('dropdown-open')
})
const windowHeight = 350;

$(window).scroll(function() {
  if ($(window).scrollTop() > windowHeight) {
    $('.scroll-button').addClass('show');
  } else {
    $('.scroll-button').removeClass('show');
  }
});

$('.scroll-top-top').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300', 'linear');
});
if ($("#headOffice").length > 0) {
  function headOffice(){
    var locations = [
      ['<h6>SEABREEZE CARGO - AL QUOZ (Head Office)</h6>\
      <ul>\
      \
      </ul>', 25.1117338839581, 55.22807599710082],
    ]
   
    var iconBase = './frontend/assets/img/icons/map-icon.png';
    var map = new google.maps.Map(document.getElementById('headOffice'), {
      zoom: 9,
      styles: mapStyle,
      center: new google.maps.LatLng(25.1117338839581, 55.22807599710082),
    });
    var infowindow =  new google.maps.InfoWindow({});
    var marker, count;
    for (count = 0; count < locations.length; count++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[count][1], locations[count][2]),
        map: map,
        title: locations[count][0],
        icon: iconBase,
      });
    google.maps.event.addListener(marker, 'click', (function (marker, count) {
        return function () {
          infowindow.setContent(locations[count][0]);
          infowindow.open(map, marker);
        }
      })(marker, count));
    }
  }
  headOffice();
}



$(window).scroll(function(){
  if($(this).scrollTop() > 100){
      $('.our-features').addClass('flight-arrived')
  }
});
const dynamicYear = new Date().getFullYear();
document.querySelector('.dynamic-year').innerHTML = dynamicYear;
var path = window.location.href; 
$('header .main-nav .nav-wrap .menu-col .lower-item ul li a').each(function() {
  if (this.href === path) {
    $(this).parent().addClass('active');
  }else{
    $(this).parent().removeClass('active');
  }
});
var modalEl = document.querySelectorAll("#defaultModal");

if(modalEl.length === 1){
  var myModal = new bootstrap.Modal(document.getElementById("defaultModal"), {});
  document.onreadystatechange = function () {
    myModal.show();
  };
}




  $(document).ready(function() {
    var lastScroll = 0;
  
  
  });
var grid = document.querySelector('.grid');
var gridLength = document.querySelectorAll(".grid").length;


