class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${this.selector} [data-value = "days"]`),
      hours: document.querySelector(`${this.selector} [data-value = "hours"`),
      mins: document.querySelector(`${this.selector} [data-value = "mins"]`),
      secs: document.querySelector(`${this.selector} [data-value = "secs"]`),
    };
  }

  start() {
    this.intervalId = setInterval(() => {
      const deltaTime = this.targetDate - Date.now();
      const time = this.getTimeComponent(deltaTime);

      this.setTimerTextContent(time);
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

  setTimerTextContent({ days, hours, mins, secs }) {
    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
  }
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 12, 2021'),
});

countdownTimer.start();
