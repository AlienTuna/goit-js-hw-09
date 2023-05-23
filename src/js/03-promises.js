import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  delayEl: document.querySelector('input[name="delay"]'),
  stepEl: document.querySelector('input[name="step"]'),
  amountEl: document.querySelector('input[name="amount"]'),
  buttonEl: document.querySelector('.form button'),
}

refs.buttonEl.addEventListener('click', onButtonClick);
function onButtonClick(e) {
  e.preventDefault();
  const firstDelayVal = Number(refs.delayEl.value);
  const stepVal = Number(refs.stepEl.value);
  const amountVal = Number(refs.amountEl.value);

setTimeout(() => {

  for (let i = 1; i <= amountVal; i += 1) {
    createPromise(i, stepVal*i)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });;
  }
}, firstDelayVal)

}

/* Supplement the code of the createPromise function so that it returns one promise 
 * that will be fulfilled or rejected after delay time. 
 * The value of the promise must be an object containing the position and delay properties 
 * with the values of these parameters. 
 * Use the initial function code to choose whether to fulfill or reject the promise.
*/ 
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({position, delay});
      }, delay)
    });
  } else {
    return new Promise((res, rej) => {
      setTimeout(() => {
        rej({position, delay});
      }, delay)
    });
  }
}

  