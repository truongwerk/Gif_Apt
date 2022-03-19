const img = document.querySelector("img");
const form = document.querySelector("form");
const input = document.querySelector("input");
form.onsubmit = submit;
function submit(e) {
	if (input.value === "") {
		return;
	} else {
		img.src = "style/loading.gif";
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
			img.src = response.data.images.original.url;
			console.log(response.data.images.original.url);
		})
		.catch(function (error) {
			console.log(error);
			img.src = "style/error.jpg";
		});
}
