jQuery(document).ready(function () {
    // type on the index.html
    var typedPrompt = new Typed('#prompt', {
        strings: ['<h1 style="display: inline;">whoami</h1>'],
        typeSpeed: 25,
        showCursor: false,
        onComplete: function () {
            // This function will be called when the first Typed instance is complete
            var typedWelcome = new Typed('#welcome', {
                strings: ['I am a college student who made this website!'],
                typeSpeed: 25,
                onComplete: function () {
                    // Match text size of the .typed-cursor css class added by typed.js
                    $(".typed-cursor").css("font-size", "xx-large");
                },
            });
        },
    });
});
