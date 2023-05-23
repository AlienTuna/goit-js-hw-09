import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from "notiflix";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const timerEls = {
 days : document.querySelector('span.value[data-days]'),
 hours : document.querySelector('span.value[data-hours]'),
 minutes : document.querySelector('span.value[data-minutes]'),
 seconds : document.querySelector('span.value[data-seconds]'),
}
const inputEl = document.querySelector('input[type="text"]#datetime-picker');
const startButtonEl = document.querySelector('button[data-start]');
startButtonEl.addEventListener('click', onStartClick)

const flatpickrConfig = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        fetchDateTime(selectedDates[0]);
    },
}
const picker = flatpickr(inputEl, flatpickrConfig);

// таймер для периодического запуска функции
let intervalId;

// счетчик таймера
let timeCounter;

// выбранное время (по умолчанию текущее)
let selectedDateTime = Date.now();

// вначале кнопка заблокирована
startButtonEl.setAttribute('disabled', 'true')

// сбор параметров таймера из введенного пользователем значения
function fetchDateTime(selectedDate) {

    // считаем разницу с текущими датой-временем
    const msDifference = selectedDate.getTime() - Date.now();
    // если msDifference меньше 0 - зачит выбрана дата в прошлом
    if (msDifference < 0) {
        Notify.failure('Please choose a date in the future');
        startButtonEl.setAttribute('disabled', 'true');
        return
    }
    
    startButtonEl.removeAttribute('disabled');
        // запоминаем выбранные дату-время - для проверки при нажатии START
        selectedDateTime = selectedDate;
}

function onStartClick(e) {
    const msDifference = selectedDateTime - Date.now();

    // если msDifference меньше 0 - зачит время уже вышло к моменту запуска
    if (msDifference < 0) {
        Notify.warning(`Time already has passed by ${-msDifference}ms`);
        startButtonEl.setAttribute('disabled', 'true');
        return
    }

    // запоминаем текущее значение счетчика
    timeCounter = msDifference;

    // START TIMER
    timerInit(timeCounter);
    
                     console.info('!!!START',timeCounter);

    // блокируем кнопку и инпут
    startButtonEl.setAttribute('disabled', 'true');
    inputEl.setAttribute('disabled', 'true');
}

function timerInit(initMs) {
    // STOP TIMER
    setTimeout(() => { 
                    console.info('STOP!!!',timeCounter);
        clearInterval(intervalId); 
        Notify.success('Stop'); 
        inputEl.removeAttribute('disabled');
    }, timeCounter);
    intervalId = setInterval(timerTic, 1000);
}

// декрементирует счетчик таймера и выводит в интерфейс
function timerTic() {
    // если timeCounter меньше 1 сек - значит время уже вышло
    if (timeCounter <= 1000) {
        Notify.info('Time is up!');
        inputEl.removeAttribute('disabled');
        return
    }

    // отнимаем секунду, записываем в счетчик
    timeCounter -= 1000;
    
    console.info('tic',timeCounter);

    // транслируем значения счетчика в интерфейс
    // const timerValues = convertMs(timeCounter);
    setTimerValues();

}

// вывод значений на страницу
function setTimerValues() {
    const timerValues = convertMs(timeCounter);

    const {dd, hh, mm, ss} = addLeadingZero(timerValues);

    timerEls.days.textContent = dd;
    timerEls.hours.textContent = hh;
    timerEls.minutes.textContent = mm;
    timerEls.seconds.textContent = ss;
}


function addLeadingZero({ days, hours, minutes, seconds }) {
    const dd = String(days).padStart(2, '0');
    const hh = String(hours).padStart(2, '0');
    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');

    return { dd, hh, mm, ss };
}
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }