parseInt("2", 16)  // Convert a hexadecimal number to a decimal number.
count1.toString(16)  // Convert a decimal number to a hexadecimal number.

		if (!(count1 % 16))
		{
			var tr = document.createElement("tr");
			tbody.appendChild(tr);
		
			var td = document.createElement("td");
			tr.appendChild(td);
			
			for (var count3 = 0; count3 < 16; count3++)
			{
				td = document.createElement("td");
				td.innerHTML = "?" + count3.toString(16);
				tr.appendChild(td);
			}
		}
