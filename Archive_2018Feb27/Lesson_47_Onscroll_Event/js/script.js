window.onload = function () {
    var toTopButton = document.getElementById("toTopButton");

    window.onscroll = function () {
        var test = document.getElementById("test");
        test.innerHTML = window.pageYOffset;
        if (window.pageYOffset != 0) {
            toTopButton.style.display = "block";

        }
        else {// Top of the page, no YOffset
            toTopButton.style.display = "none";
        }
    };

    toTopButton.onclick = function () {
        //window.scrollTo(0, 0);
        // Line above is equivalent to:
        window.scrollBy(0, -1 * window.pageYOffset);
    };
    
};

