function main()
{
	var element = document.createElement("table");
	document.body.appendChild(element);
	
	for (var count1 = 0; count1 < 256; count1 = count1 + 16)
	{
		for (var count2 = 0; count2 < 16; count2 = count2 + 1)
		{
			var number = count1 + count2;
			var string1 = count1.toString(16);
			var string2 = count2.toString(16);
			var string3 = number.toString(16);
			console.log(string1 + " + " + string2 + " = " + string3);
		}
	}
	
	console.log(window.document.body);
}

window.addEventListener("load", main);
