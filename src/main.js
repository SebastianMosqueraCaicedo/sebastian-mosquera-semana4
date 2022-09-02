let allList = document.getElementById("all-list");
let taskList = document.getElementById("task-list");
let doneList = document.getElementById("done-list");

let allArray = [];
let taskArray = [];
let doneArray = [];

function handleChange(inputElement) {
	// creates element on first list
	let newItem = document.createElement("li");
	newItem.addEventListener("click", (event) => handleClickListener(event));
	const inputText = document.createTextNode(inputElement.value);
	newItem.appendChild(inputText);
	allList.appendChild(newItem);
	
	newItem.id = allArray.length;
	newItem.className = 'noClick'
	allArray.push(newItem.id);

	// adds the same element to the second list
	taskClone = newItem.cloneNode(true);
	taskClone.id = "T" + (allArray.length - 1);
	taskList.appendChild(taskClone);
	taskArray.push(taskClone.id);

	// resets the input bar
	document.getElementById("bar").value = null;
	console.log(taskList);
}

function handleClickListener(event){
	if (event.srcElement.className === 'noClick') {
		// adds the main element to the final list
		let newDone = event.srcElement.cloneNode(true);
		doneList.appendChild(newDone);
		newDone.id = "D" + doneArray.length;
		doneArray.push(newDone.id);
		// removes element from second list
		toRemove = document.getElementById("T" + event.srcElement.id)
		toRemove.remove();
		const found = taskArray.findIndex(element => element = "T" + event.srcElement.id);
		taskArray.splice(found, 1);

		event.srcElement.removeEventListener("click", (event) => handleClickListener(event));
		event.srcElement.className = 'click'

	}
	// if already clicked, do nothing
}
