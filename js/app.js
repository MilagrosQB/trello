window.addEventListener("load", function(){
   var addForm = document.getElementById("addForm");   
	addForm.addEventListener("click", function(e) {
		e.preventDefault();
		deleteElement();
		addFormtarget();
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

	var input = document.createElement("input");
	var newInput = newForm.appendChild(input);
		newInput.classList.add("entrance");

	var button = document.createElement("button");
	var newButton = newForm.appendChild(button);
		newButton.classList.add("button");
		newButton.classList.add("btn");
		newButton.classList.add("btn-primary");
	
	var textButton = document.createTextNode("Guardar");
	var newtextButton = newButton.appendChild(textButton);
}


