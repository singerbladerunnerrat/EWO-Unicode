"use strict";

function main()
{
	var element = document.getElementById("fuckme");
	
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
			switch(parseInt(count1.toString(16) + count2.toString(16), 16))
			{
				case  0:
				case  1:
				case  2:
				case  3:
				case  4:
				case  5:
				case  6:
				case  7:
				case  8:
				case 11:
				case 12:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:
				case 20:
				case 21:
				case 22:
				case 23:
				case 24:
				case 25:
				case 26:
				case 27:
				case 28:
				case 29:
				case 30:
					td.setAttribute("bgcolor", "red");
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
