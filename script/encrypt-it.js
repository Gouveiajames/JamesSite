/*
/* University of California Sacramento
/* CSC196W Web Programming
/* Professor Anna Baynes
/* Assignment 5 Manipulating the DOM using javascript
/* 10/28/2022
 * Starter file 
 */
(function() {
  "use strict";
  
  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    document.getElementById("encrypt-it").addEventListener('click', handleEncrypt );
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function handleEncrypt() {
    var message = document.getElementById('input-text').value;
    //console.log('The message is: ' + message)
    var temp = ''
    for (let i = 0; i < message.length; i++) {
      if(message[i] === 'z' || message[i] === 'Z') {
        temp += 'a'
      }
      else {
        let character = message.charCodeAt(i);
        temp += String.fromCharCode(character + 1);
      }
    }
    document.getElementById('result').textContent = temp
  }

})();
