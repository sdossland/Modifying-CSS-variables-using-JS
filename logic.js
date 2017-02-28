/**
 * Created by sophia on 2/27/17.
 */
document.addEventListener("DOMContentLoaded", function() {

  const controls = document.querySelectorAll('input'); //selects all inputs

  function onChange() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.title}`, this.value + suffix);
    // ^must add suffix to the end to interpret the value
  }

  //loops through the inputs, updating the CSS property on each change
  controls.forEach(function(input) {
    input.addEventListener("change", onChange); //only updates once release click of range, therefore also use 'mousemove'
    input.addEventListener("mousemove", onChange);
  });

});