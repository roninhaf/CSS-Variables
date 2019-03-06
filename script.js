"use strict";
const input = document.querySelectorAll('input');

function changeValues() {
    
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

input.forEach(inputEntered => inputEntered.addEventListener('change', changeValues));
input.forEach(inputEntered => inputEntered.addEventListener('mousemove', changeValues));