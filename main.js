const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  // Call the save data
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      // Call the save data if it has checked
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      // Call the save data if it has removed
      saveData();
    }
  },
  false
);

function saveData() {
  // Store in the browser history
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  // Get the data from the localStorage and display it
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
