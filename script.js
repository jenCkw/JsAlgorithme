let p = document.createElement("p");
const addp = document.getElementById("main");
addp.appendChild(p);
p.innerHTML = "Mon <strong>grand</strong> contenu";
p.classList.add("important");
p.style.color = "green";
