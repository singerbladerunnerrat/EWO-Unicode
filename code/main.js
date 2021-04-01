"use strict";

function main()
{
	var table = document.createElement("table");
	document.body.appendChild(table);
	
	var tbody = document.createElement("tbody");
	table.appendChild(tbody);
		
	for (var count1 = parseInt("1f50", 16); count1 < parseInt("1f54", 16); count1++)
	{
		var tr = document.createElement("tr");
		tbody.appendChild(tr);
		
		var td = document.createElement("td");
		td.innerHTML = "#x" + count1.toString(16) + "?";
		tr.appendChild(td);
		
		for (var count2 = 0; count2 < 16; count2 = count2 + 1)
		{
			td = document.createElement("td");
			td.innerHTML = "&#x" + count1.toString(16) + count2.toString(16) + ";";
			tr.appendChild(td);
		}
	}
	//console.log(window.document.body);
}

window.addEventListener("load", main);
