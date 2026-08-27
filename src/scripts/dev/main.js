(function() {
    "use strict";

    const root = document.documentElement;
    const navToggle = document.querySelector("#js-navToggle");

    navToggle.addEventListener("click", function() {
    root.classList.toggle("show-nav");
    });

    const eventPP = document.querySelector("#js-eventPP");

    if (eventPP) {


        const eventOpenBtn = document.querySelector("#js-eventOpenBtn");

        const closeEventPP = function (event) {
            function close() {
                document.removeEventListener("keyup", closeEventPP);
                eventPP.removeEventListener("click", closeEventPP);

                root.classList.remove("show-event-popup");
            };

            switch (event.type) {
                case "keyup":
                 if (event.key === "Escape") close();
                 break;
                case "click":
                  if (event.target === this || event.target.classList.contains("js-ppCloseBtn")) {
                    close();
                    break;
                  }
            }
        };

        eventOpenBtn.addEventListener("click", function () {
             root.classList.add("show-event-popup");

             document.addEventListener("keyup", closeEventPP);
             eventPP.addEventListener("click", closeEventPP);

        });


    }
    let swipers = document.querySelectorAll(".js-swiper");

    swipers.forEach(function(swpr) {
        new Swiper(swpr, {
            updateOnWindowResize: true,
            slidesPerView: "auto",
            freeMode: true,
            spaceBetween: 0,
            speed: 500,
            grabCursor: true,
            pagination: {
                el: swpr.querySelector(".swiper-pagination"),
                clickable: true
            },
            navigation: {
                nextEl: swpr.querySelector(".swiper-arrow-next"),
                prevEl: swpr.querySelector(".swiper-arrow-prev"),
                disabledClass: "arrow--disabled"
            }
        });
    });


    const contactsMap = document.querySelector("#js-contactsMap");

    if (contactsMap) {

      const mapStyles =  [
        {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#181818"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1b1b1b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8a8a8a"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#373737"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3c3c3c"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#4e4e4e"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#3d3d3d"
            }
        ]
    }
      ];

      const mapCenter = new google.maps.LatLng(56.45446, 84.97889);

      const mapOptions = {
         center: mapCenter,
         disableDefaultUI: true,
         draggable: true,
         gestureHandling: "cooperative",
         scrollwheel: false,
         styles: mapStyles,
         zoom: 15,
         zoomControl: true,
         zoomControlOptions: {
             position: google.maps.ControlPosition.RIGHT_BOTTOM
            }
        };

        const map = new google.maps.Map(contactsMap, mapOptions);

const mapPin = new google.maps.MarkerImage(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAAYCAYAAACc1P5y",
    new google.maps.Size(91, 71),
    new google.maps.Point(0, 0),
    new google.maps.Point(0, 71)
);

new google.maps.Marker({
    position: new google.maps.LatLng(56.45446, 84.97889),
    map: map,
    icon: mapPin,
    title: "ИТ-Академия ТУСУР"
    });
  }


  const jsSelectric = $(".js-selectric");

  if (jsSelectric.length) {
  jsSelectric.selectric({
    nativeOnMobile: false
  });
}

const mobileMask = $('.js-mobileMask');

if (mobileMask.length) {
  mobileMask.mask('+7 (000) 000 00 00', { placeholder: "+7 (___) ___ __ __" });
}

    const dateField = $(".js-dateField");

    if (dateField.length) {
        const pickerInit = function(pick) {
          let dateInput = pick.find(".js-dateInput");
          let dateDay = pick.find(".js-dateDay");
          let dateMonth = pick.find(".js-dateMonth");
          let dateYear = pick.find(".js-dateYear");

            const dateConfig = {
               autoClose: true,
               minDate: new Date(),
               navTitles: {
                    days: "MMMM <i>yyyy</i>",
                },
                onSelect: function({date}) {
                  dateDay.val(date ? ("0" + date.getDate()).slice(-2) : "");
                  dateMonth.val(date ? ("0" + (date.getMonth() + 1)).slice(-2) : "");
                  dateYear.val(date ? date.getFullYear() : "");
                },
            };

            new AirDatepicker(dateInput[0], dateConfig);
        };

        $.each(dateField, function(i) {
            pickerInit($(this));
        });
    }
   


})();