"use strict";

function main()
{
	//var table = document.createElement("table");
	var element = document.getElementById("fuckme");
	//table.setAttribute("border", "1");
	//table.setAttribute("class", "rightAligned");
	//document.body.appendChild(table);
	
	//var tbody = document.createElement("tbody");
	//table.appendChild(tbody);
	
	for (var count1 = parseInt("0", 16); count1 < parseInt("8", 16); count1++)
	{
		if (!(count1 % 16))
		{
			var tr = document.createElement("tr");
			element.appendChild(tr);
			
			var td = document.createElement("td");
			tr.appendChild(td);
			
			for (var count3 = parseInt("0", 16); count3 < parseInt("10", 16); count3++)
			{
				td = document.createElement("td");
				td.innerHTML = "?" + count3.toString(16);
				tr.appendChild(td);
			}
		}
		
		var tr = document.createElement("tr");
		element.appendChild(tr);
		
		var td = document.createElement("td");
		
		switch(count1)
		{
			case 0:
				td.innerHTML = "#x?";
				break;
			default:
				td.innerHTML = "#x" + count1.toString(16) + "?";
		}
		tr.appendChild(td);
		
		
		for (var count2 = parseInt("0", 16); count2 < parseInt("10", 16); count2++)
		{
			td = document.createElement("td");
			console.log(count1.toString(16) + count2.toString(16));
			switch(parseInt(count1.toString(16) + count2.toString(16), 16))
			{
				case 0:
				case 1:
					td.setAttribute("bgcolor", "red");
					//td.innerHTML = "&#x" + count1.toString(16) + count2.toString(16) + ";";
					break;
				default:
					td.innerHTML = "&#x" + count1.toString(16) + count2.toString(16) + ";";
					break;
			}
			tr.appendChild(td);
		}
	}
}

window.addEventListener("load", main);
