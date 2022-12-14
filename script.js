alert("Hello");

//The below code will get the array of li items and display in the console.

let arr = document.getElementsByTagName("li");
console.log(arr);

//This lets you select a line item by its index number in the array.

let purple = document.getElementsByTagName("li")[2].style.color = "purple";

//The below code will give you an array of all items with the class name btn.
let classDemo = document.getElementsByClassName("btn");
console.log(classDemo);

//The below code will turn the first button on the page silver.

document.getElementsByClassName("btn")[0].style.color = "silver";

//The below code will return the first element that is a link in an li.
//When combining two elements then there is a space.

let queryDemo = document.querySelector("li a");
console.log(queryDemo);

//The below code will return the first element that is a line item and has the class name item.
//Because the elements are in the same element, there is no space between them.

let queryDemoTwo = document.querySelector("li.item");
console.log(queryDemoTwo);

/*The below code will return the first element that uses the id list and
has an anchor tag.*/

let queryDemoThree = document.querySelector("#list a");
console.log("This is queryDemoThree " + queryDemoThree);

/*The below code will return a list of child items under a parent that
has the ID of list and a class of item*/

let queryDemoFour = document.querySelectorAll("#list .item");
console.log("This is queryDemoFour" + queryDemoFour);

/*Challenge: Make second bullet point red.*/

let redChallenge = document.querySelector("li a").style.color = "red";
console.log(redChallenge);