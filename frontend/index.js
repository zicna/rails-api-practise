// console.log("hello")

const URL = "http://localhost:3000/authors";
const ul = document.getElementById("list-authors");
const form = document.getElementById("new-author-form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");

function myFn() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => addToUl(data["data"]));
}

function addToUl(data) {
  console.log(data);
  for (d of data) {
    renderItem(d);
  }
}

function renderItem(data) {
  const li = document.createElement("li");
  if (data["attributes"]) {
    // debugger
    li.innerHTML = `
    <div>
      name: ${data["attributes"]["first_name"]} ${data["attributes"]["last_name"]}
    </div>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;
  // li.addEventListener();
  ul.appendChild(li);
  } else if (data["error"]){
    // debugger
    alert(data["error"])
    form.reset()
  }
  
}

let handleSubmit = (event) => {
  event.preventDefault();

  const itemInfo = {
    author: {
      first_name: firstName.value,
      last_name: lastName.value,
    },
  };
  // debugger
  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    //this was where your error was, not using JSON.stringify
    body: JSON.stringify(itemInfo),
  };
  fetch(URL, configObject)
    .then((response) => response.json())
    .then((data) => {
      renderItem(data)
      // debugger;
    });
};
form.addEventListener("submit", handleSubmit);

myFn();
