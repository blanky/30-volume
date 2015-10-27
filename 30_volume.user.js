// ==UserScript==
// @name        30% volume
// @namespace   30-volume
// @description Makes HTML5 video and audio default to 30%
// @include     *
// @version     1
// @grant       none
// ==/UserScript==

function checkForVolumethings() {
  var videolist = document.getElementsByTagName('video');
  if(videolist.length != 0) {
    //iterate through all the video in the document
    for(var i = 0; i < videolist.length; i++) {
      //set attribute so that we don't reset volumes that have been user set
      if(!videolist[i].hasAttribute("data-defaultset")) {
        videolist[i].volume = 0.25;
        videolist[i].setAttribute("data-defaultset", "true");
      }
    }
  }
  var audiolist = document.getElementsByTagName('audio');
  if(audiolist.length != 0) {
    //iterate through all the audio in the document
    for(var i = 0; i < audiolist.length; i++) {
      //set attribute so that we don't reset volumes that have been user set
      if(!audiolist[i].hasAttribute("data-defaultset")) {
        audiolist[i].volume = 0.25;
        audiolist[i].setAttribute("data-defaultset", "true");
      }
    }
  }
  
  //for stuff that's added via jquery
  //window.setTimeout(checkForVolumethings, 500);
}

document.onload = setObserver();
window.onload = loadObserver();

function setObserver() {
  //initial check for things
  checkForVolumethings();
  var observer = new MutationObserver(function() {
    checkForVolumethings();
  });
  var config = {attributes: true,
                childList: true,
                characterData: true,
                subtree: true
               };
}

function loadObserver() {
  observer.observe(document.body, config);
}