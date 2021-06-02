const refs = {
  daysEl: document.querySelector('#timer-1 [data-value = "days"]'),
  hoursEl: document.querySelector('#timer-1 [data-value = "hours"]'),
  minsEl: document.querySelector('#timer-1 [data-value = "mins"]'),
  secsEl: document.querySelector('#timer-1 [data-value = "secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    this.intervalId = setInterval(() => {
      const deltaTime = this.targetDate - Date.now();
      const time = this.getTimeComponent(deltaTime);

      setTimerTextContent(time);
    }, 1000);
  }

  getTimeComponent(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

function setTimerTextContent({ days, hours, mins, secs }) {
  refs.daysEl.textContent = days;
  refs.hoursEl.textContent = hours;
  refs.minsEl.textContent = mins;
  refs.secsEl.textContent = secs;
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 12, 2021'),
});

countdownTimer.start();
