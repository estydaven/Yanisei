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