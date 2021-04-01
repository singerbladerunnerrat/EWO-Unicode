function main()
{
	var element = document.createElement("ul");
	document.body.appendChild(element);
	console.log(window.document.body);
}

window.addEventListener("load", main);
