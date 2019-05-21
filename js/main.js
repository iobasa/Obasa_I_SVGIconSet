(() => {
    //this is a self-invoking function

    /* python print -> console.log is the same thing */
    console.log('my JS is workin!');
    //let statements top
    //funtions in the middle
    //interactions in the bottom

    // select elements with Javascript

    // setting up a variable using the let keyword
    // and using a CSS selector to find the element wewant to use.

    //let stores the reference to element as a variable (in memory)
    let svgGraphic = document.querySelector("#badgeSVG"), //can be reused
        mainHeadline = document.querySelector(".main-headline");
        svgName = document.querySelector(".svgname");
        swapTextButton = document.querySelector(".switch-type");

    //functions are reusable pieces of code
    //funtions in the middle
    // that you can run any time
    function logMyId() {
      console.log(this.id);

    this.style.opacity = 0.5; //changes opacity
  }

    function swapText() {
    mainHeadline.textContent = "Now you're something else!";
    mainHeadline.classList.toggle("selected"); //methods, eg. .add

    svgName.textContent = "Example";
    svgName.classList.toggle("selected"); //goes back and forth
    }

    //def swapText:
    //statement
    //statement
    //statement

    //events, go at the bottom of files
    svgGraphic.addEventListener("click", logMyId);
    swapTextButton.addEventListener("click", swapText);
})();
