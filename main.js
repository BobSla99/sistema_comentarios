const coments = [];

const inputContainer = document.createElement("div");
const input = document.createElement("input");
const comentsContainer = document.querySelector(".coments-container");

input.classList.add("input");

input.addEventListener("keydown", (e) => {
  handleEnter(e, null);
});

comentsContainer.appendChild(inputContainer);
inputContainer.appendChild(input);

function handleEnter(e, current) {
  if (e.key == "Enter" && e.target.value !== "") {
    const newComment = {
      text: e.target.value,
      likes: 0,
      responses: [],
    };
    if (current === null) {
      coments.unshift(newComment);
    } else {
      current.responses.unshift(newComment);
    }

    e.target.value = "";
    comentsContainer.innerHTML = "";
    comentsContainer.appendChild(inputContainer);
    renderComent(coments, comentsContainer);
  }
  console.log(coments);
}

function renderComent(arr, parent) {}
