window.addEventListener("load", function(){
  var addForm = document.getElementById("addForm");   
			addForm.addEventListener("click", function(event) {
			event.preventDefault();
			deleteElement();
			addFormtarget();
	});

			button.addEventListener("click", function(event) {
				event.preventDefault();
				
			});

});

function deleteElement(){
	var father = document.getElementById("father-card");
	var elementToRemove = document.getElementById("addForm");
	father.removeChild(elementToRemove);
}

function addFormtarget(){
	var father = document.getElementById("father-card");
	var form = document.createElement("form");
	var newForm = father.appendChild(form);
			newForm.classList.add("style-form");
			newForm.classList.add("border-radius");

	var input = document.createElement("input");
	var newInput = newForm.appendChild(input);
			newInput.classList.add("entrance");
			newInput.classList.add("border-radius");

	var button = document.createElement("button");
	var newButton = newForm.appendChild(button);
			newButton.classList.add("button");
			newButton.classList.add("btn");
			newButton.classList.add("btn-primary");	
			button.setAttribute("type", "button");
	var textButton = document.createTextNode("Guardar");
	var newtextButton = newButton.appendChild(textButton);
}

function saveCard() {
	var textButton = document.createTextNode("Guardar");
	var newtextButton = newButton.appendChild(textButton);
	var newTarget = document.createElement("input")
			newtextButton.innerHTML = document.getElementById("newtextButton")
}