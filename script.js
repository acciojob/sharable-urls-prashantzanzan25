// your code here
const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");
const button = document.getElementById("button");
const urlElement = document.getElementById("url");

Add EventListner('check', ()=>{
	const name = nameInput.value;
	const year = yearInput.value;

	const queryString = `?name=${encodeURIComponent(name)}&year=${year}`;
	
	urlElement.textContent = `https://localhost:8080/${queryString}`;
});

