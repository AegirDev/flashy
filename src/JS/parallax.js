import $ from 'jquery';
import _ from 'lodash';

// ------------- VARIABLES ------------- //
var ticking = false;
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
var scrollSensitivitySetting = 40; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
var slideDurationSetting = 600; //Amount of time for which slide is "locked"
export var currentSlideNumber = 0;
console.log(currentSlideNumber);
/*
function scrollDown(currentSlide) {
  var currentSlide = currentSlide += 1;
  currentSlideNumber = currentSlide;
  nextItem();
}
*/

// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
function parallaxScroll(evt) {
  if (isFirefox) {
    //Set delta for Firefox
    var delta = evt.detail * (-120);
  } else if (isIe) {
    //Set delta for IE
    delta = -evt.deltaY;
  } else {
    //Set delta for all other browsers
    delta = evt.wheelDelta;
  }

  if (ticking != true) {
    if (delta <= -scrollSensitivitySetting) {
      //Down scroll
      ticking = true;
      if (currentSlideNumber != 3) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {
      //Up scroll
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
      slideDurationTimeout(slideDurationSetting);
    }
  }
}

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
 function slideDurationTimeout(slideDuration) {
  setTimeout(function() {
    ticking = false;
  }, slideDuration);
}

// ------------- ADD EVENT LISTENER ------------- //
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);
//window.document.getElementById("fag").addEventListener("click", console.log("niggers"));

if("ontouchstart" in window){
  window.addEventListener('touchstart',  _.throttle(parallaxScroll, 60), false);
}

//fag.addEventListener("click", _.throttle(parallaxScroll, 60), false);

// ------------- Custom Trigger ------------- //
/*
export function triggerScrollDown() {
  var el = document.getElementById('fag');
  if(el){
  el.addEventListener('click', _.throttle(parallaxScroll, 60), false);
}
}
*/

export function triggerScrollDown() {
  currentSlideNumber++;
  var $previousSlide = $(".background").eq(currentSlideNumber - 1);
  $previousSlide.removeClass("up-scroll").addClass("down-scroll");
  slideDurationTimeout(slideDurationSetting);
}

export function triggerScrollUp() {
  currentSlideNumber--;
  var $currentSlide = $(".background").eq(currentSlideNumber);
  $currentSlide.removeClass("down-scroll").addClass("up-scroll");
  slideDurationTimeout(slideDurationSetting);
}

// ------------- SLIDE MOTION ------------- //
 function nextItem() {
  var $previousSlide = $(".background").eq(currentSlideNumber - 1);
  $previousSlide.removeClass("up-scroll").addClass("down-scroll");
}

 function previousItem() {
  var $currentSlide = $(".background").eq(currentSlideNumber);
  $currentSlide.removeClass("down-scroll").addClass("up-scroll");
}
