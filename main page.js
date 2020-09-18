function setFirstImgSet() {
    document.getElementById("all-img-box").innerHTML = '<div class="row"><div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.1s"  id="img-skiing-box"><img src="./pics/L лыжи.svg" alt="" class="footer-img" id="img-skiing"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.2s"  id="img-dino-box"><img src="./pics/S динозавр.svg" alt="" class="footer-img" id="img-dino"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.3s"  id="img-BSTU-box"><img src="./pics/L БГТУ.svg" alt="" class="footer-img" id="img-BSTU"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.4s" id="img-icons-box"><img src="./pics/I иконки.svg" alt="" class="footer-img" id="img-icons"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.5s" id="img-Earth-box"><img src="./pics/S стеклянная Земля.svg" alt="" class="footer-img" id="img-Earth"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.6s" id="img-milk-box"><img src="./pics/P молоко.svg" alt="" class="footer-img" id="img-milk"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.1s" id="img-figure-fish-box"><img src="./pics/S рыбка из фигур.svg" alt="" class="footer-img" id="img-figure-fish"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.2s" id="img-letter-c-box"><img src="./pics/L колючая буква.svg" alt="" class="footer-img" id="img-letter-c"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.3s" id="img-pie-box"><img src="./pics/L пироги и торты.svg" alt="" class="footer-img" id="img-pie"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.1s" id="img-fish-box"><img src="./pics/S рыбка.svg" alt="" class="footer-img" id="img-fish"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.2s" id="img-bunny-box"><img src="./pics/L шоколадный кролик.svg" alt="" class="footer-img" id="img-bunny"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.3s" id="img-saturn-box"><img src="./pics/S сатурн.svg" alt="" class="footer-img" id="img-saturn"></div>';
    document.getElementById("footer").classList.remove("low-footer");
    document.getElementById("footer").classList.remove("very-low-footer");
    
}

function setSecondImgSet() {
    document.getElementById("all-img-box").innerHTML = '<div class="row"><div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.1s" id="img-skiing-box"><img src="./pics/L лыжи.svg" alt="" class="footer-img" id="img-skiing"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.2s" id="img-BSTU-box"><img src="./pics/L БГТУ.svg" alt="" class="footer-img" id="img-BSTU"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.3s" id="img-letter-c-box"><img src="./pics/L колючая буква.svg" alt="" class="footer-img" id="img-letter-c"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.4s" id="img-pie-box"><img src="./pics/L пироги и торты.svg" alt="" class="footer-img" id="img-pie"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.5s" id="img-bunny-box"><img src="./pics/L шоколадный кролик.svg" alt="" class="footer-img" id="img-bunny"></div></div>';
    document.getElementById("footer").classList.remove("low-footer");
    document.getElementById("footer").classList.remove("very-low-footer");
    document.getElementById("footer").classList.add("low-footer");

}

function setThirdImgSet() {
    document.getElementById("all-img-box").innerHTML = '<div class="row "><div class="footer-img-box col-12 wow zoomIn" data-wow-delay="0.1s" id="img-icons-box"><img src="./pics/I иконки.svg" alt="" class="footer-img" id="img-icons"></div></div>';
    document.getElementById("footer").classList.remove("very-low-footer");
    document.getElementById("footer").classList.add("very-low-footer");
}

function setFourthImgSet() {
    document.getElementById("all-img-box").innerHTML = '<div class="row"><div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.1s" id="img-dino-box"><img src="./pics/S динозавр.svg" alt="" class="footer-img" id="img-dino"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.2s" id="img-Earth-box"><img src="./pics/S стеклянная Земля.svg" alt="" class="footer-img" id="img-Earth"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.3s" id="img-milk-box"><img src="./pics/P молоко.svg" alt="" class="footer-img" id="img-milk"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.4s" id="img-figure-fish-box"><img src="./pics/S рыбка из фигур.svg" alt="" class="footer-img" id="img-figure-fish"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.5s" id="img-fish-box"><img src="./pics/S рыбка.svg" alt="" class="footer-img" id="img-fish"></div> <div class="footer-img-box col-4 wow zoomIn" data-wow-delay="0.6s" id="img-saturn-box"><img src="./pics/S сатурн.svg" alt="" class="footer-img" id="img-saturn"></div></div>';
    document.getElementById("footer").classList.remove("low-footer");
    document.getElementById("footer").classList.remove("very-low-footer");
    document.getElementById("footer").classList.add("low-footer");
}

var FirstImgSetButton = document.getElementById("First-img-set");
var SecondImgSetButton = document.getElementById("Second-img-set");
var ThirdImgSetButton = document.getElementById("Third-img-set");
var FourthImgSetButton = document.getElementById("Fourth-img-set");
FirstImgSetButton.addEventListener("click", setFirstImgSet);
SecondImgSetButton.addEventListener("click", setSecondImgSet);
ThirdImgSetButton.addEventListener("click", setThirdImgSet);
FourthImgSetButton.addEventListener("click", setFourthImgSet);

$(document).ready(function () {

    $("#id-menu").on("click", "a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
});

(function ($) {
    $(function () {
        $('.menu__icon').on('click', function () {
            $(this).closest('.menu').toggleClass('menu_state_open');
        });
    });
})(jQuery);

var all_buttons = document.getElementById("footer");
var menu = document.getElementById("id-menu");

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
var top = getCoords(all_buttons).top;

function checkPosition() {
    function getCoords(elem) {
        let box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
    var top = getCoords(all_buttons).top;
    console.log((Math.round(top)), window.pageYOffset);

    if ((Math.round(top)) <= window.pageYOffset) {
        menu.classList.add("menu-item-specific");
    } else {
        menu.classList.remove("menu-item-specific");
    }
}
document.addEventListener("scroll", checkPosition);