import images from './images.json';

const imgUrlArray = images.urls;

const grid = document.getElementById("grid");

imgUrlArray.forEach((url, idx) => {
	let imgElement = document.createElement("img");

	// Set attributes for image element
	imgElement.setAttribute("draggable", true);
	imgElement.setAttribute("src", url);
	imgElement.setAttribute("alt", url);
	imgElement.setAttribute("id", `${idx}`);

	// Add event listeners to image element to enable drag, drop, swap
	imgElement.addEventListener("dragstart", e => {
		e.dataTransfer.setData("text", e.target.id);
	});
	
	imgElement.addEventListener("dragover", e => {
		e.preventDefault();
	});
	
	imgElement.addEventListener("drop", e => {
		e.preventDefault();

		let srcId = e.dataTransfer.getData("text");
		let srcIMG = document.getElementById(srcId);
		let tgtIMG = document.getElementById(e.target.id);
		let tmp = tgtIMG.cloneNode();

		srcIMG.parentNode.insertBefore(tmp, srcIMG);
		tgtIMG.parentNode.insertBefore(srcIMG, tgtIMG);
		tgtIMG.parentNode.replaceChild(tgtIMG, tmp);
	});
	
	// Add new img element to div#grid
	grid.appendChild(imgElement);
});