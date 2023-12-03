jQuery('document').ready(function(){
    // type on the index.html
    var typed = new Typed('#welcome', {
        strings: ['Welcome to my website!', 'Enjoy your stay!', 'Check out my recent <a href="projects.html" style="text-decoration: none;"><u style="color: red;">p</u>rojects</a> --->'],
        typeSpeed: 50,
    });
    // match text size of the .typed-cursor css class added by typed.js
    $(".typed-cursor").css("font-size","xx-large");
})