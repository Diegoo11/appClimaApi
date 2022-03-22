/* eslint-disable no-alert */
/* eslint-disable no-console */
import { jsonClima } from './functions';

const form = document.querySelector('form');

function eListener(event) {
    event.preventDefault();
    const barInput = document.getElementById('text').value;
    jsonClima(barInput);
    form.reset();
}

form.addEventListener('submit', eListener);

jsonClima('tokyo');
