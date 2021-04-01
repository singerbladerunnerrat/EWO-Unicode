function main()
{
	var element = document.createElement("table");
	document.body.appendChild(element);
	
	for (var count = 0; count < 255; count++)
	{
		var string = count.toString(16);
		console.log(string);
	}
	
	console.log(window.document.body);
}

window.addEventListener("load", main);
