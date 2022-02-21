import _ from "lodash";
import printMe from "./print";
import "./style.css";

function component() {
	const element = document.createElement("div");
	const btn = document.createElement("button");

	element.innerHTML = _.join(["Hello", "webpack"], " ");
	element.classList.add("hello");

	btn.innerHTML = "Click me and check the console!";
	btn.onclick = printMe;

	element.appendChild(btn);

	return element;
}

// document.body.appendChild(component());

let element = component();
document.body.appendChild(element);

if (module.hot) {
	module.hot.accept("./print.js", function () {
		console.log("Accepting the updated printMe module!");
		document.body.removeChild(element);
		element = component(); // re-renders the component to update the click handler
		document.body.appendChild(element);
	});
}