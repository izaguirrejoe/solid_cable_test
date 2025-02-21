import consumer from "channels/consumer"

let expectedNumber = 1;

consumer.subscriptions.create("NumberChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    const numbersDiv = document.getElementById('numbers');
    let display;

    // Compare received number with expectedNumber.
    if (data.number !== expectedNumber) {
      display = `<span style="background-color: red;">${data.number}</span>`;
    } else {
      display = data.number;
    }

    // Calculate how many numbers have been output so far.
    const count = expectedNumber - 1;
    // After every 10 numbers output, insert a line break.
    if (count > 0 && count % 10 === 0) {
      numbersDiv.innerHTML += `<br/>`;
    }

    numbersDiv.innerHTML += ` ${display}`;

    // Always increment the expected number.
    expectedNumber++;
  }
});
