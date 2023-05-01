// get references to the elements
const status = document.getElementById("status");
const enterBtn = document.getElementById("enterBtn");

// add a click event listener to the button
enterBtn.addEventListener("click", function() {
  // create a new h1 element
  const h1 = document.createElement("h1");
  // create a text node with the updated text
  const text = document.createTextNode("Entered Metaverse");
  // add the text node to the h1 element
  h1.appendChild(text);
  // replace the p tag with the h1 element
  status.parentNode.replaceChild(h1, status);
});