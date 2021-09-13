// console.log("hello")

const URL = "http://localhost:3000/authors";
const ul = document.getElementById("list-authors");
const form = document.getElementById("new-author-form")
const firstName = document.getElementById("first_name")
const lastName = document.getElementById("last_name")

function myFn() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => addToUl(data["data"]));
}

function addToUl(data) {
  // console.log(data)
  for (d of data) {
      const li = document.createElement('li')
      li.innerHTML = `
      name: ${d["attributes"]["first_name"]} ${d["attributes"]["last_name"]}
      `
      ul.appendChild(li)
    // console.log(d["attributes"]);
  }
}
let handleSubmit = (event) => {
  event.preventDefault()

  const itemInfo = {
    author: {
      first_name: firstName.value,
      last_name: lastName.value
    }
  }
  // debugger
  const configObject = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    //this was where your error was, not using JSON.stringify
    body: JSON.stringify(itemInfo)
  }
  fetch(URL, configObject).then(response => response.json()).then(data => {
    debugger
  })
}
form.addEventListener("submit", handleSubmit)



myFn();
