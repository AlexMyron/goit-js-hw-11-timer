const refs = {
  bodyEl: document.querySelector('body'),
};

setInterval(() => {
  refs.bodyEl.style.backgroundColor = randomColors();
  refs.bodyEl.style.transition = 'all 2s';
}, 4000);

function randomColors() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
