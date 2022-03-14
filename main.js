// let requestURl =
// 	"http://api.openweathermap.org/data/2.5/weather?q=Hanoi,vn&units=metric&callback=test&appid=071ccef383eb80fc1abfd8e75526cb0d";
// fetch(requestURl, { mode: "cors" })
// 	.then((result) => result.text())
// 	.then((text) => console.log(text));
const img = document.querySelector("img");
const form = document.querySelector("form");
const input = document.querySelector("input");
form.onsubmit = submit;
function submit(e) {
	if (input.value === "") {
		return;
	} else {
		getGif(input.value);
	}
	e.preventDefault();
}
function getGif(search) {
	let requestURl =
		"https://api.giphy.com/v1/gifs/translate?api_key=QGNeNzbZXa32OwIvxGo9EmPpZb3eT3Bk&s=";
	requestURl += search;
	fetch(requestURl, { mode: "cors" })
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			console.log(response.data.images.original.url);
			img.src = response.data.images.original.url;
		});
}
