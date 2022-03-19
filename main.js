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

async function getGif(search) {
	let requestURl =
		"https://api.giphy.com/v1/gifs/translate?api_key=QGNeNzbZXa32OwIvxGo9EmPpZb3eT3Bk&s=";
	requestURl += search;
	try {
		const response = await fetch(requestURl, { mode: "cors" });
		const gifData = await response.json();
		img.src = gifData.data.images.original.url;
		console.log(gifData.data.images.original.url);
	} catch (error) {
		console.error(error);
		img.src = "style/error.jpg";
	}
}
