document.addEventListener("DOMContentLoaded", () => {
    let show_about1 = document.getElementById("slide11")
    let show_about2 = document.getElementById("slide22")
    let show_about3 = document.getElementById("slide33")
    let show_about4 = document.getElementById("slide44")

    let content_about1 = document.getElementById("cat__slider-content1")
    let content_about2 = document.getElementById("cat__slider-content2")
    let content_about3 = document.getElementById("cat__slider-content3")
    let content_about4 = document.getElementById("cat__slider-content4")

    let show_about_speed1 = document.getElementById("slide1")
    let show_about_speed2 = document.getElementById("slide2")
    let show_about_speed3 = document.getElementById("slide3")
    let show_about_speed4 = document.getElementById("slide4")

    let content_about_speed1 = document.getElementById("speed__content1")
    let content_about_speed2 = document.getElementById("speed__content2")
    let content_about_speed3 = document.getElementById("speed__content3")
    let content_about_speed4 = document.getElementById("speed__content4")
    
    show_about1.addEventListener("click", () => {
        content_about1.style.display = "block"
        content_about2.style.display = "none"
        content_about3.style.display = "none"
        content_about4.style.display = "none"
    });
    show_about2.addEventListener("click", () => {
        content_about1.style.display = "none"
        content_about2.style.display = "inline-block"
        content_about3.style.display = "none"
        content_about4.style.display = "none"
    });
    show_about3.addEventListener("click", () => {
        content_about1.style.display = "none"
        content_about2.style.display = "none"
        content_about3.style.display = "inline-block"
        content_about4.style.display = "none"
    });
    show_about4.addEventListener("click", () => {
        content_about1.style.display = "none"
        content_about2.style.display = "none"
        content_about3.style.display = "none"
        content_about4.style.display = "inline-block"
    });


    show_about_speed1.addEventListener("click", () => {
        content_about_speed1.style.display = "inline-block"
        content_about_speed2.style.display = "none"
        content_about_speed3.style.display = "none"
        content_about_speed4.style.display = "none"
    });
    show_about_speed2.addEventListener("click", () => {
        content_about_speed1.style.display = "none"
        content_about_speed2.style.display = "inline-block"
        content_about_speed3.style.display = "none"
        content_about_speed4.style.display = "none"
    });
    show_about_speed3.addEventListener("click", () => {
        content_about_speed1.style.display = "none"
        content_about_speed2.style.display = "none"
        content_about_speed3.style.display = "inline-block"
        content_about_speed4.style.display = "none"
    });
    show_about_speed4.addEventListener("click", () => {
        content_about_speed1.style.display = "none"
        content_about_speed2.style.display = "none"
        content_about_speed3.style.display = "none"
        content_about_speed4.style.display = "inline-block"
    });

    let previous = document.getElementById("prev")
    let next = document.getElementById("next")

    let item1 = document.getElementsByClassName("slider__item")
    let item2 = document.getElementsByClassName("slider__item2")

    
    previous.addEventListener("click", () => {
        item1.style.display = "flex";
        item2.style.display = "none";
     });
     next.addEventListener("click", () => {
         item1.style.display = "none";
         item2.style.display = "flex";
      });
});

$(function(){
    /*$('.cat__slider-inner', '.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next" ></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev" ></button>',
        
        infinite: false
    });*/

    $('select').styler();
   
    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });

    top__en.onclick = function() {
        top__en.style.fontWeight = "700";
        top__ru.style.fontWeight = "400";
        top__it.style.fontWeight = "400";
        top__de.style.fontWeight = "400";
        top__fr.style.fontWeight = "400";
        top__es.style.fontWeight = "400";
        top__pt.style.fontWeight = "400";
    };
    top__ru.onclick = function() {
        top__ru.style.fontWeight = "700";
        top__en.style.fontWeight = "400";
        top__it.style.fontWeight = "400";
        top__de.style.fontWeight = "400";
        top__fr.style.fontWeight = "400";
        top__es.style.fontWeight = "400";
        top__pt.style.fontWeight = "400";
    };
    top__it.onclick = function() {
        top__ru.style.fontWeight = "400";
        top__en.style.fontWeight = "400";
        top__it.style.fontWeight = "700";
        top__de.style.fontWeight = "400";
        top__fr.style.fontWeight = "400";
        top__es.style.fontWeight = "400";
        top__pt.style.fontWeight = "400";
    };
    top__de.onclick = function() {
        top__en.style.fontWeight = "400";
        top__ru.style.fontWeight = "400";
        top__it.style.fontWeight = "400";
        top__de.style.fontWeight = "700";
        top__fr.style.fontWeight = "400";
        top__es.style.fontWeight = "400";
        top__pt.style.fontWeight = "400";
    };
    top__fr.onclick = function() {
        top__en.style.fontWeight = "400";
        top__ru.style.fontWeight = "400";
        top__it.style.fontWeight = "400";
        top__de.style.fontWeight = "400";
        top__fr.style.fontWeight = "700";
        top__es.style.fontWeight = "400";
        top__pt.style.fontWeight = "400";
    };
    top__es.onclick = function() {
        top__en.style.fontWeight = "400";
        top__ru.style.fontWeight = "400";
        top__it.style.fontWeight = "400";
        top__de.style.fontWeight = "400";
        top__fr.style.fontWeight = "400";
        top__es.style.fontWeight = "700";
        top__pt.style.fontWeight = "400";
    };
    top__pt.onclick = function() {
        top__en.style.fontWeight = "400";
        top__ru.style.fontWeight = "400";
        top__it.style.fontWeight = "400";
        top__de.style.fontWeight = "400";
        top__fr.style.fontWeight = "400";
        top__es.style.fontWeight = "400";
        top__pt.style.fontWeight = "700";
    };
});

