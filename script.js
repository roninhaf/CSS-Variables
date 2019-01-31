"use strict";
const input = document.querySelectorAll('input');

function changeValues() {
    
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

input.forEach(a=>a.addEventListener('change', changeValues));
input.forEach(a=>a.addEventListener('mousemove', changeValues));