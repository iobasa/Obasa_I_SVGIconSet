(() => {
    //this is a self-invoking function

    /* python print -> console.log is the same thing */
    console.log('my JS is workin!');

    // select elements with Javascript

    // setting up a variable using the let keyword
    // and using a CSS selector to find the element wewant to use.

    //let stores the reference to element as a variable (in memory)
    let svgGraphic = document.querySelector("#badgeSVG"), //can be reused
        mainHeadline = document.querySelector(".main-headline");
        svgName = document.querySelector(".svgname");

    //functions are reusable pieces of code
    // that you can run any time
    function logMyId() {
      console.log(this.id);

    this.style.opacity = 0.5; //changes opacity
  }

    svgGraphic.addEventListener("click", logMyId);

    mainHeadline.textContent = "Now you're something else!";
    svgName.textContent = "Example";
})();
