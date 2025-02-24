import 'jquery'
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import LazyLoad from 'lazyload';

// import '~components/input'
import '~components/slider/slider.js'
import '~components/select/select.js'
import '../scss/style.scss'
import { each } from 'jquery';

$(document).ready(function() {
    // adds SVG External Content support to all browsers
    svg4everybody();

    // Polyfill object-fit/object-position on <img>
    objectFitImages();

    // lazyload
    let images = document.querySelectorAll("img.lazyload");
    new LazyLoad(images);
});

const productTabs = document.querySelectorAll('.product-tab');
const productPanes = document.querySelectorAll('.product-tab-pane');
if (productTabs.length > 0 && productPanes.length > 0) {
    productTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            productTabs.forEach(t => t.classList.remove('active'));
            productPanes.forEach(pane => pane.classList.remove('active'));
            tab.classList.add('active');
            const targetPane = document.querySelector(`.product-tab-pane[data-tab="${targetTab}"]`);
            if (targetPane) targetPane.classList.add('active');
        });
    });
}

$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }

    $input.val(value);
});

$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
        value = value + 1;
    } else {
        value = 100;
    }

    $input.val(value);
});