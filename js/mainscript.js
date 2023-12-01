jQuery('document').ready(function(){
    // alert('hello!');
    // $('#sidebar').hide()
    // can select id and class

    // jquery has built in methods like:
    // hide(), show(), fadeIn(), fadeOut(), slideUp(), slideDown()

    // events!
    // mostly actions that browser/user can interact with
    // jquery has:
    // click(), dblclick(), mouseover(), mouseenter(), hover(), 

    // $('body').click(function(){
        // $('body').fadeOut();
       //dont know why youd use this but sure you can 
    // })

    var typed = new Typed('#welcome', {
        strings: ['<h1>Welcome to my website!</h1>', '<h1>Enjoy your stay!</h1>', '<h1>Check out my recent projects! ---></h1>'],
        typeSpeed: 25,
        loop: true,
    });
    $("#toggleSidebar").click(function () {
        $("#sidebar").slideToggle(500);
    });
})