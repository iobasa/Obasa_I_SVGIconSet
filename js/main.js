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
    let mainHeadline = document.querySelector(".main-headline");//can be reused
        svgName = document.querySelector(".svgname");
        swapTextButton = document.querySelector(".switch-type");
        allImages = document.querySelectorAll("#image-container img"); //pointing at many things

        //#image-container img {
          //cursor: pointer;
        //}

    //functions are reusable pieces of code
    //funtions in the middle
    // that you can run any time
    function logMyId() {
      console.log(this.id);
    // toggle a class here with classlist

    //this.style.opacity = 0.5; //changes opacity
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
    //svgGraphic.addEventListener("click", logMyId);
    swapTextButton.addEventListener("click", swapText);

    // select and loop through a bunch of items at once -> one to many relationship
    allImages.forEach(item => {
      item.addEventListener("click", logMyId);
    });
})();
