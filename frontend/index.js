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
  // console.log(data);
  for (d of data) {
    renderItem(d);
  }
}

function renderItem(data) {
  const li = document.createElement("li");
  if (!!data["error"]) {
    alert(data["error"]);
    form.reset();
  } else {
    li.innerHTML = `
    <div>
      name: ${data["attributes"]["first_name"]} ${data["attributes"]["last_name"]}
    </div>
    <div class="buttons" data-set=${data["id"]}>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    <div class="buttons">
    `;
    const divBtns = li.lastChild;
    divBtns.addEventListener("click", handleClick);
    ul.appendChild(li);
    form.reset();
  }
}

function handleClick(e) {
  if (e.target.innerText === "Delete") {
    deleteBtn(e.target);
  } else if (e.target.innerText === "Edit") {
    e.target.innerText = "Save";
  } else if (e.target.innerText === "Save") {
    e.target.innerText = "Edit";
  }
}

function deleteBtn(event) {
  const id = event.parentElement.dataset["set"];
  const li = event.parentElement.parentElement;
  const configObject = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  // debugger
  li.remove()

  fetch(`${URL}/${id}`, configObject)
    .then((response) => response.json())
    .then((data) => {
      alert(data["notice"]);
    });
}

let handleSubmit = (event) => {
  event.preventDefault();

  const itemInfo = {
    author: {
      first_name: firstName.value,
      last_name: lastName.value,
    },
  };

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
      // debugger
      renderItem(data["data"]);
    });
};
form.addEventListener("submit", handleSubmit);

myFn();
