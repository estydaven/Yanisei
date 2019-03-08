var modelOne = document.getElementById('one'), t;
var modelTwo = document.getElementById('two'), a;
var modelThree = document.getElementById('three'), b;
var modelFour = document.getElementById('four'), c;
var element = document.getElementById('wrapper');
var button = document.getElementById('buttonOne');
var buttonTwo = document.getElementById('buttonTwo');
var buttonThree = document.getElementById('buttonThree');
var buttonFour = document.getElementById('buttonFour');
var arrow = document.getElementById('arrow');
var arrowTwo = document.getElementById('arrowTwo');
var arrowThree = document.getElementById('arrowThree');
var arrowFour = document.getElementById('arrowFour');
var video = document.getElementById('video');
var video2 = document.getElementById('video2');
var video3 = document.getElementById('video3');
var video4 = document.getElementById('video4');
var video5 = document.getElementById('video5');
var video6 = document.getElementById('video6');
var video7 = document.getElementById('video7');
var video8 = document.getElementById('video8');

//block one
modelOne.addEventListener('mousemove', function(e) {
  element.classList.add('show');
  button.classList.remove('none');
  arrow.classList.add('none');  
  if (window.matchMedia('(min-width: 769px)').matches) {
    element.style.backgroundImage = 'url(./assets/img/main-bg2.webp)';
  } else {
    element.style.backgroundImage = 'url(./assets/img/bg-768-2.webp)';
  }
  clearTimeout(t);
  t = setTimeout(function() {
    if (window.matchMedia('(min-width: 769px)').matches) {
      video.classList.remove('none');
    } else {
      video2.classList.remove('none');
    }   
  }, 2000);
});

modelOne.addEventListener('mouseout', function(e) {
  element.classList.remove('show');  
  if (window.matchMedia('(min-width: 769px)').matches) {
    element.style.backgroundImage = 'url(./assets/img/main-bg.webp)';
  } else {
    element.style.backgroundImage = 'url(./assets/img/bg-768.webp)';
  }
  video.classList.add('none'); 
  video2.classList.add('none');
  button.classList.add('none');
  arrow.classList.remove('none'); 
  clearTimeout(t);
});

//block two
modelTwo.addEventListener('mousemove', function(e) {
  element.classList.add('show');
  buttonTwo.classList.remove('none');
  arrowTwo.classList.add('none');
  if (window.matchMedia('(min-width: 769px)').matches) {
    element.style.backgroundImage = 'url(./assets/img/main-bg3.webp)';
  } else {
    element.style.backgroundImage = 'url(./assets/img/bg-768-3.webp)';
  }
  clearTimeout(a);
  a = setTimeout(function() {
    if (window.matchMedia('(min-width: 769px)').matches) {
      video3.classList.remove('none');
    } else {
      video4.classList.remove('none');
    }   
  }, 2000);
});

modelTwo.addEventListener('mouseout', function(e) {
  element.classList.remove('show');
  if (window.matchMedia('(min-width: 769px)').matches) {
    element.style.backgroundImage = 'url(./assets/img/main-bg.webp)';
  } else {
    element.style.backgroundImage = 'url(./assets/img/bg-768.webp)';
  }
  video3.classList.add('none'); 
  video4.classList.add('none'); 
  buttonTwo.classList.add('none');
  arrowTwo.classList.remove('none');
  clearTimeout(a);
});

//block three
modelThree.addEventListener('mousemove', function(e) {
  element.classList.add('show');
  buttonThree.classList.remove('none');
  arrowThree.classList.add('none');
  if (window.matchMedia('(min-width: 769px)').matches) {
    element.style.backgroundImage = 'url(./assets/img/main-bg4.webp)';
  } else {
    element.style.backgroundImage = 'url(./assets/img/bg-768-4.webp)';
  }
  clearTimeout(b);
  b = setTimeout(function() {
    if (window.matchMedia('(min-width: 769px)').matches) {
      video5.classList.remove('none');
    } else {
      video6.classList.remove('none');
    }   
  }, 2000);
});

modelThree.addEventListener('mouseout', function(e) {
  element.classList.remove('show');
  if (window.matchMedia('(min-width: 769px)').matches) {
    element.style.backgroundImage = 'url(./assets/img/main-bg.webp)';
  } else {
    element.style.backgroundImage = 'url(./assets/img/bg-768.webp)';
  }
  video5.classList.add('none'); 
  video6.classList.add('none'); 
  buttonThree.classList.add('none');
  arrowThree.classList.remove('none');
  clearTimeout(b);
});

//block four
modelFour.addEventListener('mousemove', function(e) {
  element.classList.add('show');
  buttonFour.classList.remove('none');
  arrowFour.classList.add('none');
  if (window.matchMedia('(min-width: 769px)').matches) {
    element.style.backgroundImage = 'url(./assets/img/main-bg5.webp)';
  } else {
    element.style.backgroundImage = 'url(./assets/img/bg-768-5.webp)';
  }
  clearTimeout(c);
  c = setTimeout(function() {
    if (window.matchMedia('(min-width: 769px)').matches) {
      video7.classList.remove('none');
    } else {
      video8.classList.remove('none');
    }   
  }, 2000);
});

modelFour.addEventListener('mouseout', function(e) {
  element.classList.remove('show');
  if (window.matchMedia('(min-width: 769px)').matches) {
    element.style.backgroundImage = 'url(./assets/img/main-bg.webp)';
  } else {
    element.style.backgroundImage = 'url(./assets/img/bg-768.webp)';
  }
  video7.classList.add('none'); 
  video8.classList.add('none'); 
  buttonFour.classList.add('none');
  arrowFour.classList.remove('none');
  clearTimeout(c);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbW9kZWxPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb25lJyksIHQ7XG52YXIgbW9kZWxUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHdvJyksIGE7XG52YXIgbW9kZWxUaHJlZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aHJlZScpLCBiO1xudmFyIG1vZGVsRm91ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3VyJyksIGM7XG52YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJyk7XG52YXIgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbk9uZScpO1xudmFyIGJ1dHRvblR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b25Ud28nKTtcbnZhciBidXR0b25UaHJlZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b25UaHJlZScpO1xudmFyIGJ1dHRvbkZvdXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uRm91cicpO1xudmFyIGFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fycm93Jyk7XG52YXIgYXJyb3dUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyb3dUd28nKTtcbnZhciBhcnJvd1RocmVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fycm93VGhyZWUnKTtcbnZhciBhcnJvd0ZvdXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyb3dGb3VyJyk7XG52YXIgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8nKTtcbnZhciB2aWRlbzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8yJyk7XG52YXIgdmlkZW8zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvMycpO1xudmFyIHZpZGVvNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlbzQnKTtcbnZhciB2aWRlbzUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW81Jyk7XG52YXIgdmlkZW82ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvNicpO1xudmFyIHZpZGVvNyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlbzcnKTtcbnZhciB2aWRlbzggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW84Jyk7XG5cbi8vYmxvY2sgb25lXG5tb2RlbE9uZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xuICBhcnJvdy5jbGFzc0xpc3QuYWRkKCdub25lJyk7ICBcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA3NjlweCknKS5tYXRjaGVzKSB7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4vYXNzZXRzL2ltZy9tYWluLWJnMi53ZWJwKSc7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4vYXNzZXRzL2ltZy9iZy03NjgtMi53ZWJwKSc7XG4gIH1cbiAgY2xlYXJUaW1lb3V0KHQpO1xuICB0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDc2OXB4KScpLm1hdGNoZXMpIHtcbiAgICAgIHZpZGVvLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlkZW8yLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcbiAgICB9ICAgXG4gIH0sIDIwMDApO1xufSk7XG5cbm1vZGVsT25lLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24oZSkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTsgIFxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDc2OXB4KScpLm1hdGNoZXMpIHtcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi9hc3NldHMvaW1nL21haW4tYmcud2VicCknO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguL2Fzc2V0cy9pbWcvYmctNzY4LndlYnApJztcbiAgfVxuICB2aWRlby5jbGFzc0xpc3QuYWRkKCdub25lJyk7IFxuICB2aWRlbzIuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xuICBhcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7IFxuICBjbGVhclRpbWVvdXQodCk7XG59KTtcblxuLy9ibG9jayB0d29cbm1vZGVsVHdvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIGJ1dHRvblR3by5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XG4gIGFycm93VHdvLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA3NjlweCknKS5tYXRjaGVzKSB7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4vYXNzZXRzL2ltZy9tYWluLWJnMy53ZWJwKSc7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4vYXNzZXRzL2ltZy9iZy03NjgtMy53ZWJwKSc7XG4gIH1cbiAgY2xlYXJUaW1lb3V0KGEpO1xuICBhID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDc2OXB4KScpLm1hdGNoZXMpIHtcbiAgICAgIHZpZGVvMy5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZGVvNC5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XG4gICAgfSAgIFxuICB9LCAyMDAwKTtcbn0pO1xuXG5tb2RlbFR3by5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKGUpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNzY5cHgpJykubWF0Y2hlcykge1xuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguL2Fzc2V0cy9pbWcvbWFpbi1iZy53ZWJwKSc7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4vYXNzZXRzL2ltZy9iZy03Njgud2VicCknO1xuICB9XG4gIHZpZGVvMy5jbGFzc0xpc3QuYWRkKCdub25lJyk7IFxuICB2aWRlbzQuY2xhc3NMaXN0LmFkZCgnbm9uZScpOyBcbiAgYnV0dG9uVHdvLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcbiAgYXJyb3dUd28uY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xuICBjbGVhclRpbWVvdXQoYSk7XG59KTtcblxuLy9ibG9jayB0aHJlZVxubW9kZWxUaHJlZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICBidXR0b25UaHJlZS5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XG4gIGFycm93VGhyZWUuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDc2OXB4KScpLm1hdGNoZXMpIHtcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi9hc3NldHMvaW1nL21haW4tYmc0LndlYnApJztcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi9hc3NldHMvaW1nL2JnLTc2OC00LndlYnApJztcbiAgfVxuICBjbGVhclRpbWVvdXQoYik7XG4gIGIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNzY5cHgpJykubWF0Y2hlcykge1xuICAgICAgdmlkZW81LmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlkZW82LmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcbiAgICB9ICAgXG4gIH0sIDIwMDApO1xufSk7XG5cbm1vZGVsVGhyZWUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbihlKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDc2OXB4KScpLm1hdGNoZXMpIHtcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi9hc3NldHMvaW1nL21haW4tYmcud2VicCknO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguL2Fzc2V0cy9pbWcvYmctNzY4LndlYnApJztcbiAgfVxuICB2aWRlbzUuY2xhc3NMaXN0LmFkZCgnbm9uZScpOyBcbiAgdmlkZW82LmNsYXNzTGlzdC5hZGQoJ25vbmUnKTsgXG4gIGJ1dHRvblRocmVlLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcbiAgYXJyb3dUaHJlZS5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XG4gIGNsZWFyVGltZW91dChiKTtcbn0pO1xuXG4vL2Jsb2NrIGZvdXJcbm1vZGVsRm91ci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICBidXR0b25Gb3VyLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcbiAgYXJyb3dGb3VyLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA3NjlweCknKS5tYXRjaGVzKSB7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4vYXNzZXRzL2ltZy9tYWluLWJnNS53ZWJwKSc7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4vYXNzZXRzL2ltZy9iZy03NjgtNS53ZWJwKSc7XG4gIH1cbiAgY2xlYXJUaW1lb3V0KGMpO1xuICBjID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDc2OXB4KScpLm1hdGNoZXMpIHtcbiAgICAgIHZpZGVvNy5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZGVvOC5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XG4gICAgfSAgIFxuICB9LCAyMDAwKTtcbn0pO1xuXG5tb2RlbEZvdXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbihlKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDc2OXB4KScpLm1hdGNoZXMpIHtcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi9hc3NldHMvaW1nL21haW4tYmcud2VicCknO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguL2Fzc2V0cy9pbWcvYmctNzY4LndlYnApJztcbiAgfVxuICB2aWRlbzcuY2xhc3NMaXN0LmFkZCgnbm9uZScpOyBcbiAgdmlkZW84LmNsYXNzTGlzdC5hZGQoJ25vbmUnKTsgXG4gIGJ1dHRvbkZvdXIuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xuICBhcnJvd0ZvdXIuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xuICBjbGVhclRpbWVvdXQoYyk7XG59KTsiXX0=
