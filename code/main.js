"use strict";

function main()
{
	var table = document.createElement("table");
	table.setAttribute("border", "1");
	table.setAttribute("class", "rightAligned");
	document.body.appendChild(table);
	
	var tbody = document.createElement("tbody");
	table.appendChild(tbody);
		
	for (var count1 = parseInt("2", 16); count1 < parseInt("fffffff", 16); count1++)
	{
		if (!(count1 % 16))
		{
			var tr = document.createElement("tr");
			tbody.appendChild(tr);
		
			var td = document.createElement("td");
			tr.appendChild(td);
			
			for (var count2 = parseInt("0", 16); count2 < parseInt("10", 16); count2++)
			{
				td = document.createElement("td");
				td.innerHTML = "?" + count2.toString(16);
				tr.appendChild(td);
			}
		}
		
		var tr = document.createElement("tr");
		tbody.appendChild(tr);
		
		var td = document.createElement("td");
		td.innerHTML = "#x" + count1.toString(16) + "?";
		tr.appendChild(td);
		
		for (var count2 = parseInt("0", 16); count2 < parseInt("10", 16); count2++)
		{
			td = document.createElement("td");
			td.innerHTML = "&#x" + count1.toString(16) + count2.toString(16) + ";";
			tr.appendChild(td);
		}
	}
}

window.addEventListener("load", main);
