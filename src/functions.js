/* eslint-disable default-case */
/* eslint-disable no-console */
import ico1 from './ico/01d@2x.png';
import ico2 from './ico/02d@2x.png';
import ico3 from './ico/03d@2x.png';
import ico4 from './ico/04d@2x.png';
import ico9 from './ico/09d@2x.png';
import ico10 from './ico/10d@2x.png';
import ico11 from './ico/11d@2x.png';
import ico13 from './ico/13d@2x.png';
import ico50 from './ico/50d@2x.png';
import ico1n from './ico/01n@2x.png';
import ico2n from './ico/02n@2x.png';
import ico4n from './ico/04n@2x.png';
import ico10n from './ico/10n@2x.png';

function worldClock(x) {
    const clock = new Date((new Date().getTime()) + (x) * 1000).toISOString();
    return clock.slice(clock.search('T') + 1, clock.search('T') + 6);
}

export { worldClock };

function unixTime(unix) {
    const fecha = new Date(unix * 1000);
    const hora = fecha.getHours();
    const minutes = fecha.getMinutes();
    return (`${hora}:${minutes}`);
}

export { unixTime };

function mayus(text) {
    return (
        text[0].toUpperCase() + text.slice(1)
    );
}

export { mayus };

function drawlIco(info) {
    const imgIco = document.querySelector('img');
    switch (info.weather[0].icon) {
    case '01d':
        imgIco.src = ico1;
        break;
    case '02d':
        imgIco.src = ico2;
        break;
    case '03d':
        imgIco.src = ico3;
        break;
    case '04d':
        imgIco.src = ico4;
        break;
    case '09d':
        imgIco.src = ico9;
        break;
    case '10d':
        imgIco.src = ico10;
        break;
    case '11d':
        imgIco.src = ico11;
        break;
    case '13d':
        imgIco.src = ico13;
        break;
    case '50d':
        imgIco.src = ico50;
        break;
    case '01n':
        imgIco.src = ico1n;
        break;
    case '02n':
        imgIco.src = ico2n;
        break;
    case '03n':
        imgIco.src = ico3;
        break;
    case '04n':
        imgIco.src = ico4n;
        break;
    case '09n':
        imgIco.src = ico9;
        break;
    case '10n':
        imgIco.src = ico10n;
        break;
    case '11n':
        imgIco.src = ico11;
        break;
    case '13n':
        imgIco.src = ico13;
        break;
    case '50n':
        imgIco.src = ico50;
        break;
    }
}

export { drawlIco };

function setClima(info) {
    const date = new Date();
    const l1 = document.getElementById('l1');
    const l2 = document.getElementById('l2');
    const l3 = document.getElementById('l3');
    const r1 = document.getElementById('r1');
    const r2 = document.getElementById('r2');
    const r3 = document.getElementById('r3');
    const r4 = document.getElementById('r4');
    const r5 = document.getElementById('r5');

    l1.innerHTML = mayus(info.weather[0].description);
    l2.innerHTML = `${mayus(date.toLocaleString('en', { weekday: 'long' }))}, ${date.toLocaleString('es', { day: 'numeric' })}nd ${date.toLocaleString('en', { month: 'short' })} '${date.toLocaleString('en', { year: '2-digit' })}`;
    l3.innerHTML = worldClock(info.timezone);

    r1.innerHTML = info.name;
    r2.innerHTML = `${info.main.temp} °C`;
    r3.innerHTML = `Temperatura min: ${info.main.temp_min} °C`;
    r4.innerHTML = `Humedad: ${info.main.humidity}%`;
    r5.innerHTML = `Viento: ${info.wind.speed}km/h`;

    drawlIco(info);
}

export { setClima };

async function jsonClima(region, unit = 'metric') {
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${region}&units=${unit}&appid=bf3845e91d594d20dd852be6dd9e6a9b&lang=es`, { mode: 'cors' });
    const urlText = await url.json();
    setClima(urlText);
}

export { jsonClima };
