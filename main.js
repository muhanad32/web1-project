document.getElementById("status-btn").onclick = function () {
  var today = new Date();
  var currentHour = today.getHours();
  var resultText = document.getElementById("status-result");

  if (currentHour >= 8 && currentHour < 23) {
    resultText.innerHTML = "المحل مفتوح حالياً أهلاً وسهلاً بكم!";
    resultText.style.color = "green";
  } else {
    resultText.innerHTML = "المحل مغلق حالياً، ننتظركم غداً الساعة 8 صباحاً ";
    resultText.style.color = "red";
  }
};

document.getElementById("add-btn").onclick = function () {
  var nameInput = document.getElementById("username").value;
  var textInput = document.getElementById("usertext").value;

  if (nameInput === "" || textInput === "") {
    alert("الرجاء كتابة الاسم والتعليق أولاً!");
    return;
  }

  var reviewsList = document.getElementById("reviews-list");

  var newReview = document.createElement("div");
  newReview.className = "review-card";

  newReview.innerHTML = "<h4>" + nameInput + ":</h4><p>" + textInput + "</p>";

  reviewsList.appendChild(newReview);

  document.getElementById("username").value = "";
  document.getElementById("usertext").value = "";
};
