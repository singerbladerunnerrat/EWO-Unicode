function main()
{
	var table = document.createElement("table");
	document.body.appendChild(table);
	
	for (var count1 = parseInt("1f50", 16); count1 < parseInt("1f54", 16); count1++)
	{
		var tbody = document.createElement("tbody");
		table.appendChild(tbody);
		
		var tr = document.createElement("tr");
		tbody.appendChild(tr);
		
		var td = document.createElement("td");
		tr.appendChild(td);
		
		for (var count2 = 0; count2 < 16; count2 = count2 + 1)
		{
			var number1 = count1 + count2;
			var string1 = count1.toString(16);
			var string2 = count2.toString(16);
			var string3 = number1.toString(16);
			var number2 = parseInt(string3, 16);
		}
	}
	//console.log(window.document.body);
}

window.addEventListener("load", main);
