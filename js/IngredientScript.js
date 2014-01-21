
var SS=4;
var Food1=1.5;
var Food2= 1.5;
var Food3= 1;
var Food4= .25;
var Food5= 4;
var Food6= 1.5;
var Food7= 1.5;

	function StartIngredients() {
		document.getElementById("ServingSizeOutput").value=SS;
		document.getElementById("Food1Output").value=Food1;
		document.getElementById("Food2Output").value=Food2;
		document.getElementById("Food3Output").value=Food3;
		document.getElementById("Food4Output").value=Food4;
		document.getElementById("Food5Output").value=Food5;
		document.getElementById("Food6Output").value=Food6;
		document.getElementById("Food7Output").value=Food7;

	}

	function ServingSize(Plus) {
		
		if (Plus) {
			SS++;
			document.getElementById("ServingSizeOutput").value= SS;
			NewFood1= Food1+.375;
			document.getElementById("Food1Output").value= NewFood1;
			Food1=NewFood1;
			
			NewFood2= Food2+.375;
			document.getElementById("Food2Output").value= NewFood2;
			Food2=NewFood2;
			
			NewFood3= Food3+.25;
			document.getElementById("Food3Output").value= NewFood3;
			Food3=NewFood3;
			
			NewFood4= Food4+.0625;
			document.getElementById("Food4Output").value= NewFood4;
			Food4=NewFood4;
			
			NewFood5= Food5+1;
			document.getElementById("Food5Output").value= NewFood5;
			Food5=NewFood5;
			
			NewFood6= Food6+.375;
			document.getElementById("Food6Output").value= NewFood6;
			Food6=NewFood6;
			
			NewFood7= Food7+.375;
			document.getElementById("Food7Output").value= NewFood7;
			Food7=NewFood7;
		}
		else {
			SS--;
			document.getElementById("ServingSizeOutput").value=SS;
			NewFood1= Food1-.375;
			document.getElementById("Food1Output").value=NewFood1;
			Food1=NewFood1;
			
			NewFood2= Food2-.375;
			document.getElementById("Food2Output").value=NewFood2;
			Food2=NewFood2;
			
			NewFood3= Food3-.25;
			document.getElementById("Food3Output").value=NewFood3;
			Food3=NewFood3;
			
			NewFood4= Food4-.0625;
			document.getElementById("Food4Output").value=NewFood4;
			Food4=NewFood4;
			
			NewFood5= Food5-1;
			document.getElementById("Food5Output").value=NewFood5;
			Food5=NewFood5;
			
			NewFood6= Food6-.375;
			document.getElementById("Food6Output").value=NewFood6;
			Food6=NewFood6;
			
			NewFood7= Food7-.375;
			document.getElementById("Food7Output").value=NewFood7;
			Food7=NewFood7;
		}
	}
	
//SOURCE: http://www.developergeekresources.com/examples/javascript/javascript-check_all_checkboxes.php
var checkflag = "false";
function check(field) {
  if (checkflag == "false") {
    for (i = 0; i < field.length; i++) {
      field[i].checked = true;
    }
    checkflag = "true";
    return "Uncheck All";
  } else {
    for (i = 0; i < field.length; i++) {
      field[i].checked = false;
    }
    checkflag = "false";
    return "Check All";
  }
}

