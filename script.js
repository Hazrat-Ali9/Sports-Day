// Define the sports object to store scores
let sports = {
  red: 0,
  yellow: 0,
  green: 0,
  blue: 0,
};

// Function to simulate the opening ceremony
function OpeningCeremony(callbackFnc) {
  console.log("Let the games begin");
  setTimeout(() => {
    console.log("Previous Score:", sports);
    Race100M(sports, callbackFnc);
  }, 1000);
}

// Function to simulate the 100m race
function Race100M(score, callbackFnc) {
  // Generate random race times for each color
  let redTime = Math.floor(Math.random() * 6) + 10;
  let yellowTime = Math.floor(Math.random() * 6) + 10;
  let greenTime = Math.floor(Math.random() * 6) + 10;
  let blueTime = Math.floor(Math.random() * 6) + 10;

  console.log("Race Times:", {
    red: redTime,
    yellow: yellowTime,
    green: greenTime,
    blue: blueTime,
  });

  // Find the color with the least time
  let colors = ["red", "yellow", "green", "blue"];
  let sortedTimes = colors.sort((a, b) => score[a] - score[b]);
  let firstColor = sortedTimes[0];
  let secondColor = sortedTimes[1];

  // Update scores
  score[firstColor] += 50;
  score[secondColor] += 25;

  console.log("Updated Score:", score);

  // Call the next event
  setTimeout(() => {
    console.log("Previous Score:", score);
    callbackFnc(score, LongJump);
  }, 3000);
}

// Function to simulate the long jump event
function LongJump(score, callbackFnc) {
  let color = ["red", "yellow", "green", "blue"][Math.floor(Math.random() * 4)];
  score[color] += 150;
  console.log(`${color} won the long jump event.`);
  console.log("Updated Score:", score);

  setTimeout(() => {
    console.log("Previous Score:", score);
    callbackFnc(score, HighJump);
  }, 2000);
}

// Function to simulate the high jump event
function HighJump(score, callbackFnc) {
  let userInput = prompt("What colour secured the highest jump?");
  if (userInput && score.hasOwnProperty(userInput)) {
    score[userInput] += 100;
    console.log(`${userInput} won the high jump event.`);
    console.log("Updated Score:", score);
  } else {
    console.log("Event was cancelled");
  }

  // Call the award ceremony
  AwardCeremony(score);
}

// Function to simulate the award ceremony
function AwardCeremony(score) {
  let sortedColors = Object.keys(score).sort((a, b) => score[b] - score[a]);

  console.log(
    `${sortedColors[0]} came first with ${score[sortedColors[0]]} points.`
  );
  console.log(
    `${sortedColors[1]} came second with ${score[sortedColors[1]]} points.`
  );
  console.log(
    `${sortedColors[2]} came third with ${score[sortedColors[2]]} points.`
  );
}

// Start the opening ceremony
OpeningCeremony((score, nextEvent) => {
  console.log("Previous Score:", score);
  nextEvent(score, HighJump);
});

// Script js