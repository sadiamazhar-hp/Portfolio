// jqueryFunctions.js
import $ from 'jquery';

export function customJQueryFunction() {
  $('#resume').click(function() {
    alert('Button clicked!');
  });
}

export function scrollTopPercentage() {
    const scrollPercentage = () => {
        const scrollTopPos = document.documentElement.scrollTop;
        const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollValue = Math.round((scrollTopPos / calcHeight) * 100);
        const scrollElementWrap = $("#scroll-percentage");

        scrollElementWrap.css("background", `conic-gradient( var(--rr-color-theme-primary) ${scrollValue}%, var(--rr-color-common-white) ${scrollValue}%)`);

        // ScrollProgress
        if ( scrollTopPos > 100 ) {
            scrollElementWrap.addClass("active");
        } else {
            scrollElementWrap.removeClass("active");
        }

        if( scrollValue < 96 ) {
            $("#scroll-percentage-value").text(`${scrollValue}%`);
        } else {
            $("#scroll-percentage-value").html('<i class="fa-sharp fa-regular fa-arrow-up-long"></i>');
        }
    }
    window.onscroll = scrollPercentage;
    window.onload = scrollPercentage;

    // Back to Top
    function scrollToTop() {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    
    $("#scroll-percentage").on("click", scrollToTop);


scrollTopPercentage();

function scrollTopPercentage() {
    const scrollPercentage = () => {
        const scrollTopPos = document.documentElement.scrollTop;
        const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollValue = Math.round((scrollTopPos / calcHeight) * 100);
        const scrollElementWrap = $("#scroll-percentage");

        scrollElementWrap.css("background", `conic-gradient( var(--rr-color-theme-primary) ${scrollValue}%, var(--rr-color-common-white) ${scrollValue}%)`);
        
        // ScrollProgress
        if ( scrollTopPos > 100 ) {
            scrollElementWrap.addClass("active");
        } else {
            scrollElementWrap.removeClass("active");
        }

        if( scrollValue < 96 ) {
            $("#scroll-percentage-value").text(`${scrollValue}%`);
        } else {
            $("#scroll-percentage-value").html('<i class="fa-sharp fa-regular fa-arrow-up-long"></i>');
        }
    }
    window.onscroll = scrollPercentage;
    window.onload = scrollPercentage;

    // Back to Top
    function scrollToTop() {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    
    $("#scroll-percentage").on("click", scrollToTop);
}

scrollTopPercentage();

}