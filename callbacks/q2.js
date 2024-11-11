function getUserData(callback) {
  setTimeout(() => {
    console.log("User data fetched.");
    callback({ userId: 1 });
  }, 1000);
}

function getArticles(userId, callback) {
  setTimeout(() => {
    console.log("Articles fetched for user:", userId);
    callback(["Article 1", "Article 2"]);
  }, 1000);
}

function getAddress(userId, callback) {
  setTimeout(() => {
    console.log("Address fetched for user:", userId);
    callback("123 Main St");
  }, 1000);
}

// Callback Hell
getUserData((userData) => {
  getArticles(userData.userId, (articles) => {
    getAddress(userData.userId, (address) => {
      console.log("User Data:", userData);
      console.log("Articles:", articles);
      console.log("Address:", address);
    });
  });
});
