let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartCounter = document.getElementById("heart-count");
const coinCounter = document.getElementById("coin-count");
const copyCounter = document.getElementById("copy-count");
const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history");

document.querySelectorAll(".heart").forEach(heart => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("active");
    heartCount++;
    heartCounter.textContent = heartCount;
  });
});

document.querySelectorAll(".copy").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const number = e.target.closest(".card").querySelector("h2").textContent;
    navigator.clipboard.writeText(number);
    alert("Copied: " + number);
    copyCount++;
    copyCounter.textContent = copyCount + " Copy";
  });
});

document.querySelectorAll(".call").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const name = card.querySelector("h3").textContent;
    const number = card.querySelector("h2").textContent;

    if (coinCount < 20) {
      alert("Not enough coins!");
      return;
    }

    coinCount -= 20;
    coinCounter.textContent = coinCount;

    const now = new Date().toLocaleTimeString();
    alert(`Calling ${name} at ${number}`);
    const li = document.createElement("li");
    li.textContent = `${name} - ${number} (${now})`;
    historyList.appendChild(li);
  });
});

clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});