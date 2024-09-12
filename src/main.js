import { createElement } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";

// const categories = [
//     "electronics",
//     "jewelery",
//     "men's clothing",
//     "women's clothing"
// ];

const root = document.querySelector("#root");

// const app = createElement("p", null ,"Product Category");
// console.log(app);
//**** react*****

// const root = document.querySelector("#root");

// const app = createElement("div",
//     { id: "category-section", className: "p-5" },
//     createElement("p", {className: "text-2xl text-gray-500 mb-3"}, "Product Category"),
//     createElement(
//         "div",
//         null,
//         ...categories.map((category) => createElement("button", {className: "border border-black-500 px-4 py-2 me-2" }, category))
//     ));

// createRoot(root).render(app);

//**** react ******
createRoot(root).render(App());
// const title = document.createElement("p");
// title.innerText = "Product Category";
// title.classList.add("text-3xl", "text-gray-700","mb-5");
// root.append(title);

// const categoryButton = (categoryName) => {
//     const btn = document.createElement("button");
//     btn.innerText = categoryName;
//     btn.classList.add("border","border-black-500","px-4","py-3","me-2");
//     return btn;
// }

// catregories.forEach((category) => root.append(categoryButton(category)));