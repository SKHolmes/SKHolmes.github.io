(function(document) {
  'use strict';

  var app = document.querySelector('#app');
  window.addEventListener('WebComponentsReady', function() {

    app.DisplayEnums = {
      NONE: 'none',
      CONTACT: 'contact',
      REFERENCES: 'references',
      WORK_HISTORY: 'work-history',
      EDUCATION: 'education',
      ABOUT_ME: 'about-me',
      COVER_LETTER: 'cover-letter'
    }

    var mainCollapse = document.getElementById('collapse');
    var currentDisplay = app.DisplayEnums.NONE;
    var animationIndex = 0;
    var animationTxt = document.getElementById('animationText');
    var animationDelay = 600;
    var animationArray = ['Hello World!', 'Check out my GitHub! &rarr;', '&larr; Or find out more about me!', 'Get in touch I\'m always available!'];

    /*--------------Contact Details Collapseable--------------*/
    var contactDetailsDiv = document.getElementById('contactDetails');

    /*--------------Reference Details Collapseable--------------*/
    var referencesDetailsDiv = document.getElementById('referencesDetails');

    /*--------------Work History Collapseable--------------*/
    var workHistoryDetailsDiv = document.getElementById('workHistoryDetails');

    /*--------------Work History Collapseable--------------*/
    var educationDetailsDiv = document.getElementById('educationDetails');

    /*--------------Work History Collapseable--------------*/
    var aboutMeDetailsDiv = document.getElementById('aboutMeDetails');

    /*--------------Cover Letter Collapseable--------------*/
    var coverLetterDetailsDiv = document.getElementById('coverLetterDetails');

    app.displayContactDetails = function(){
      mainCollapse.innerHTML = contactDetailsDiv.innerHTML;
      currentDisplay = app.DisplayEnums.CONTACT;
    }

    app.displayWorkHistoryDetails = function(){
      mainCollapse.innerHTML = workHistoryDetailsDiv.innerHTML;
      currentDisplay = app.DisplayEnums.WORK_HISTORY;
    }

    app.displayReferenceDetails = function(){
      mainCollapse.innerHTML = referencesDetailsDiv.innerHTML;
      currentDisplay = app.DisplayEnums.REFERENCES;
    }

    app.displayEducationDetails = function(){
      mainCollapse.innerHTML = educationDetailsDiv.innerHTML;
      currentDisplay = app.DisplayEnums.EDUCATION;
    }

    app.displayAboutMeDetails = function(){
      mainCollapse.innerHTML = aboutMeDetailsDiv.innerHTML;
      currentDisplay = app.DisplayEnums.ABOUT_ME;
    }

    app.displayCoverLetterDetails = function(){
      mainCollapse.innerHTML = coverLetterDetailsDiv.innerHTML;
      currentDisplay = app.DisplayEnums.COVER_LETTER;
    }

    app.animateText = function(){
      animationTxt.innerHTML = animationArray[animationIndex];
      animationTxt.className = 'animated fadeInUp';
      animationIndex += 1;
      if(animationIndex == animationArray.length){
        animationIndex = 0;
      }
      setTimeout(function(){
        animationTxt.className = 'animated fadeOutUp';
        setTimeout(function(){
          app.animateText();
        }, 2000);
      }, 3000);
    }

    app.calculateAge = function() { // birthday is a date
      var bDay = new Date(93, 5, 17);
      var ageDifMs = Date.now() - bDay.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    document.getElementById("age").innerHTML = Math.abs(ageDate.getUTCFullYear() - 1970);
  }

    //Button Listeners
    document.getElementById('cover-letter-button').addEventListener('click', function(){
      //If the collapse is open but displaying the details clicked, just close it.
      if(mainCollapse.opened && currentDisplay == app.DisplayEnums.COVER_LETTER){
        mainCollapse.toggle();
      //Else if the collapse is opened but displaying other details than that that was
      //clicked. Close it, pause for the animation using a setTimeout function, change
      //the details and reopen it.
    }else if(mainCollapse.opened && currentDisplay != app.DisplayEnums.COVER_LETTER){
      mainCollapse.toggle();
      setTimeout(function(){ 
        app.displayCoverLetterDetails();
        mainCollapse.toggle();
      }, animationDelay); 
      //If the collapse is not opened we can just 
    }else if(!mainCollapse.opened){
      app.displayCoverLetterDetails();
      mainCollapse.toggle();
    }    
  });

    document.getElementById('contact-button').addEventListener('click', function(){
      //If the collapse is open but displaying the details clicked, just close it.
      if(mainCollapse.opened && currentDisplay == app.DisplayEnums.CONTACT){
        mainCollapse.toggle();
      //Else if the collapse is opened but displaying other details than that that was
      //clicked. Close it, pause for the animation using a setTimeout function, change
      //the details and reopen it.
    }else if(mainCollapse.opened && currentDisplay != app.DisplayEnums.CONTACT){
      mainCollapse.toggle();
      setTimeout(function(){ 
        app.displayContactDetails();
        mainCollapse.toggle();
      }, animationDelay); 
      //If the collapse is not opened we can just 
    }else if(!mainCollapse.opened){
      app.displayContactDetails();
      mainCollapse.toggle();
    }    
  });

    document.getElementById('work-history-button').addEventListener('click', function(){
      //If the collapse is open but displaying the details clicked, just close it.
      if(mainCollapse.opened && currentDisplay == app.DisplayEnums.WORK_HISTORY){
        mainCollapse.toggle();
      //Else if the collapse is opened but displaying other details than that that was
      //clicked. Close it, pause for the animation using a setTimeout function, change
      //the details and reopen it.
    }else if(mainCollapse.opened && currentDisplay != app.DisplayEnums.WORK_HISTORY){
      mainCollapse.toggle();
      setTimeout(function(){ 
        app.displayWorkHistoryDetails();
        mainCollapse.toggle();
      }, animationDelay); 
      //If the collapse is not opened we can just 
    }else if(!mainCollapse.opened){
      app.displayWorkHistoryDetails();
      mainCollapse.toggle();
    }
  });

    document.getElementById('reference-button').addEventListener('click', function(){
      //If the collapse is open but displaying the details clicked, just close it.
      if(mainCollapse.opened && currentDisplay == app.DisplayEnums.REFERENCES){
        mainCollapse.toggle();
      //Else if the collapse is opened but displaying other details than that that was
      //clicked. Close it, pause for the animation using a setTimeout function, change
      //the details and reopen it.
    }else if(mainCollapse.opened && currentDisplay != app.DisplayEnums.REFERENCES){
      mainCollapse.toggle();
      setTimeout(function(){ 
        app.displayReferenceDetails();
        mainCollapse.toggle();
      }, animationDelay); 
      //If the collapse is not opened we can just 
    }else if(!mainCollapse.opened){
      app.displayReferenceDetails();
      mainCollapse.toggle();
    }
  });

    document.getElementById('education-button').addEventListener('click', function(){
      //If the collapse is open but displaying the details clicked, just close it.
      if(mainCollapse.opened && currentDisplay == app.DisplayEnums.EDUCATION){
        mainCollapse.toggle();
      //Else if the collapse is opened but displaying other details than that that was
      //clicked. Close it, pause for the animation using a setTimeout function, change
      //the details and reopen it.
    }else if(mainCollapse.opened && currentDisplay != app.DisplayEnums.EDUCATION){
      mainCollapse.toggle();
      setTimeout(function(){ 
        app.displayEducationDetails();
        mainCollapse.toggle();
      }, animationDelay); 
      //If the collapse is not opened we can just 
    }else if(!mainCollapse.opened){
      app.displayEducationDetails();
      mainCollapse.toggle();
    }
  });

    document.getElementById('about-me-button').addEventListener('click', function(){
      //If the collapse is open but displaying the details clicked, just close it.
      if(mainCollapse.opened && currentDisplay == app.DisplayEnums.ABOUT_ME){
        mainCollapse.toggle();
      //Else if the collapse is opened but displaying other details than that that was
      //clicked. Close it, pause for the animation using a setTimeout function, change
      //the details and reopen it.
    }else if(mainCollapse.opened && currentDisplay != app.DisplayEnums.ABOUT_ME){
      mainCollapse.toggle();
      setTimeout(function(){ 
        app.displayAboutMeDetails();
        mainCollapse.toggle();
      }, animationDelay); 
      //If the collapse is not opened we can just 
    }else if(!mainCollapse.opened){
      app.displayAboutMeDetails();
      mainCollapse.toggle();
    }
  });

    app.calculateAge();
    app.animateText();
  });  
})(document);

