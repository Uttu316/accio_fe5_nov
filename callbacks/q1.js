function fetchUserData(callback) {
  setTimeout(() => {
    console.log("Hello");
    callback(); // Call the next task
  }, 2000); // Simulating a delay of 2 seconds
}

function processUserData(callback) {
  setTimeout(() => {
    console.log("Bye");
    callback(); // Call the next task
  }, 1000); // Simulating a delay of 1 second
}

function saveProcessedData(callback) {
  setTimeout(() => {
    console.log("Catch");
    callback(); // Call the final completion message
  }, 1000); // Simulating a delay of 1 second
}

// Chaining the tasks using callbacks
fetchUserData(() => {
  processUserData(() => {
    saveProcessedData(() => {
      console.log("Dog");
    });
  });
});
