// Adding Page-content, button, DropDownList
// SOMETHING needed to here !!!!!!!!!!!!!!!

import { roseP, roseR, roseY } from "./DemoData.js";
/* ------------ Function to change instore true/false ------------ */
let selectedColor = roseP
function toggleInStore () {
		if (selectedColor.inStore === true) {selectedColor.inStore = false,
			alert(selectedColor.color + " In store: No");}
		else {selectedColor.inStore = true, 
			alert(selectedColor.color + " In store: Yes");}
updateStatusText ()
}; 
// end of const toggleInStore = function
/* ------------ Function to change instore true/false text to Yes/No ------------ */
function updateStatusText () {
	const stockStatusElement = document.getElementById("stockStatus");
	if (selectedColor.inStore) {
	stockStatusElement.textContent = "Yes";
	} else {
	stockStatusElement.textContent = "No";
	}
}
	

// start of pageContent
const pageContent = () => {
	let flwArticle;
	flwArticle = document.createElement("div");
	flwArticle.classList.add("flower");
	flwArticle.innerHTML = `
	
	<! -- picture, maybe its good use Html figure-tag -->

		<figure>
			<img class="pic_image" src="" alt="Rose">
			<figcaption class="in__store">
				                
			</figcaption>
		</figure>

		<!-- create div for dropdownList -->

		<div class="drpDwnList">
			<h4>Choose color</h4>

			<!-- ..... Creating dropDownList  ....... -->

			<select class="chooseColor" name="navigation">
				<option>Pink</option>
				<option>Red</option>
				<option>Yellow</option>
			</select>			
		</div>

		<!-- button to change inStore -->
		
		<div class="btn"> 
			<button class="btnChngInStore">Store</button> <!-- use class btnChngInStore -->
		</div
	
	`; // end of flwArticle.innerHTML
	/*  ---------------------- event to drpdownList ---------------------------------- */
	const choosingColor = flwArticle.querySelector(".chooseColor");
	choosingColor.addEventListener("change", (drpdwnListevent) => {
		//console.log("vari = ", drpdwnListevent.target.value)
		switch(drpdwnListevent.target.value){
			case "Pink":
				const pinkRose = roseP;
				document.querySelector(".in__store").innerHTML = `<span id="pinkRC" style="margin-right: 5px;">${pinkRose.color}</span> Rose in stock: <div id="stockStatus">${pinkRose.inStore}</div>`;
				document.querySelector(".pic_image").setAttribute("src", pinkRose.picture);
				document.querySelector("#pinkRC").style.color = pinkRose.color;
				selectedColor = pinkRose;
				break;
			case "Red":
				const redRose = roseR;
				document.querySelector(".in__store").innerHTML = `<span id="redkRC" style="margin-right: 5px;">${redRose.color}</span> Rose in stock: <div id="stockStatus">${redRose.inStore}</div>`;
				document.querySelector(".pic_image").setAttribute("src", redRose.picture);
				document.querySelector("#redkRC").style.color = redRose.color;
				selectedColor = redRose;
				break;
		
			case "Yellow":
				const yellowRose = roseY;
				document.querySelector(".in__store").innerHTML = `<span id="yellowRC" style="margin-right: 5px;">${yellowRose.color}</span> Rose in stock: <div id="stockStatus">${yellowRose.inStore}</div>`;
				document.querySelector(".pic_image").setAttribute("src", yellowRose.picture);
				document.querySelector("#yellowRC").style.color = yellowRose.color;
				selectedColor = yellowRose;
				break;
		}
		updateStatusText ()
		/* ------------ code to change fig.caption to change color ----------------------- */
	}) 	/* ------------------------- end of choosingColor.addEventListener ------------ */

	/* ------------------- Start Change inStore true/false ---------------------------- */
	const buttonElement = flwArticle.querySelector(".btnChngInStore");
	buttonElement.addEventListener("click", toggleInStore);
		// code to call function toggleInStore
	/* ------------------- END Change inStore true/false  ------------ */
	
	return flwArticle ;
}; //end of pageContent
const rootContent =document.querySelector(".maincontent");
rootContent.append(pageContent());

document.querySelector(".chooseColor").dispatchEvent(new Event("change")); //launch page with pink color selected