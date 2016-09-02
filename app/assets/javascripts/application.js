// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

//# TODO Set URL to New page

$(function(event) {
    $('body').on('click', '[data-type="page-transition"]', function (event) {

        event.preventDefault();

        var newPage = $(this).attr('href');

        changePage(newPage)

    });

    var changePage = function (url) {
        $('body').addClass('page-is-changing');

        loadNewContent(url)
    };

    var loadNewContent = function (url) {
        var newSectionName = url.replace(/[^a-zA-Z ]/g, "") + '-page'
        section = $('<div class="container default-page ' + newSectionName + '"></div>');

        section.load(url  + ' .container > *', function () {

            setTimeout(function(){
                $('.content-holder').html(section);
                $('body').removeClass('page-is-changing');
            }, 2000);

            if(url != window.location){
                //add the new page to the window.history
                window.history.pushState({path: url},'',url);
            }
        })

    };

    buttonHoverPosition = function(event,element,item){

        var posX = event.pageX - $(element).offset().left;
        var posY = event.pageY - $(element).offset().top;

        $('.' + item, element).css('top', posY + 'px').css('left', posX + 'px');

    };

});

$(window).on('popstate', function() {

    var newPageArray = location.pathname.split('/'),
    //this is the url of the page to be loaded
    newPage = newPageArray[newPageArray.length - 1];
    changePage(newPage);
});

$(window).on('scroll', function() {

    if($(window).scrollTop() > 60){
        $('.mainmenu').addClass('mainmenu--fixed');
    }else{
        $('.mainmenu').removeClass('mainmenu--fixed');
    }

});



(function ($) {
    'use strict';



    var content  = $('.project__header').smoothState({
        // onStart runs as soon as link has been activated
        onStart : {

            // Set the duration of our animation
            duration: 250,

            // Alterations to the page
            render: function () {

                // Quickly toggles a class and restarts css animations
                content.toggleAnimationClass('is-exiting');
            }
        }
    }).data('smoothState'); // makes public methods available
})(jQuery);