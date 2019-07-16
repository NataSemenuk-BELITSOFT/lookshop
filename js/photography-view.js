/* Polyfill service v3.25.1
 * For detailed credits and licence information see https://github.com/financial-times/polyfill-service.
 * 
 * UA detected: chrome/75.0.0
 * Features requested: default
 *  */

(function(undefined) {

    /* No polyfills found for current settings */
    
    })
    .call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

window.addEventListener("DOMContentLoaded", function() {
    var content = document.querySelector(".phtography-view__img");
    content.addEventListener("click", function(event) {
        var target = event.target;
        if (target = target.closest(".link__item")) {
            event.preventDefault();
            var a = content.querySelectorAll(".link__item");
            var img = content.querySelectorAll("img");
            var selected = [].indexOf.call(a, target);
            [].forEach.call(a, function(el, i) {
                 (i == selected) ? (el.classList.add("active"), img[i].classList.add("active")):
                  (el.classList.remove("active"), img[i].classList.remove("active"))
            })
        }
    })
});