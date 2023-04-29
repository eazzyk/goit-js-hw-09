import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  let firstDelay = evt.currentTarget.delay.valueAsNumber;
  const stepOfDelay = evt.currentTarget.step.valueAsNumber;
  const amtOfPromises = evt.currentTarget.amount.valueAsNumber;

  for (let position = 1; position <= amtOfPromises; position += 1) {
    createPromise(position, firstDelay);
    firstDelay += stepOfDelay;
  }
  evt.currentTarget.reset();
}

function createPromise(position, delay) {
  const promise = new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
