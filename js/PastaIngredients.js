var SS=6;
var Food1=2;
var Food2= 2;
var Food3= 2;
var Food4= 4;
var Food5= 1;
var Food6= .25;
var Food7= 1;
var Food8= 1;
var Food9= 1;
var Food10= 3;
var Food11= .5;
var Food12= 2;

	function StartIngredients() {
		document.getElementById("ServingSizeOutput").value=SS;
		document.getElementById("Food1Output").value=Food1;
		document.getElementById("Food2Output").value=Food2;
		document.getElementById("Food3Output").value=Food3;
		document.getElementById("Food4Output").value=Food4;
		document.getElementById("Food5Output").value=Food5;
		document.getElementById("Food6Output").value=Food6;
		document.getElementById("Food7Output").value=Food7;
		document.getElementById("Food8Output").value=Food8;
		document.getElementById("Food9Output").value=Food9;
		document.getElementById("Food10Output").value=Food10;
		document.getElementById("Food11Output").value=Food11;
		document.getElementById("Food12Output").value=Food12;

	}

	function ServingSize(Plus) {
		
		if (Plus) {
			SS++;
			document.getElementById("ServingSizeOutput").value= SS;
			NewFood1= Food1+.333;
			document.getElementById("Food1Output").value= NewFood1;
			Food1=NewFood1;
			
			NewFood2= Food2+.333;
			document.getElementById("Food2Output").value= NewFood2;
			Food2=NewFood2;
			
			NewFood3= Food3+.333;
			document.getElementById("Food3Output").value= NewFood3;
			Food3=NewFood3;
			
			NewFood4= Food4+.666;
			document.getElementById("Food4Output").value= NewFood4;
			Food4=NewFood4;
			
			NewFood5= Food5+.166;
			document.getElementById("Food5Output").value= NewFood5;
			Food5=NewFood5;
			
			NewFood6= Food6+.042;
			document.getElementById("Food6Output").value= NewFood6;
			Food6=NewFood6;
			
			NewFood7= Food7+.167;
			document.getElementById("Food7Output").value= NewFood7;
			Food7=NewFood7;
			
			NewFood8= Food8+.167;
			document.getElementById("Food8Output").value= NewFood8;
			Food7=NewFood8;
			
			NewFood9= Food9+.167;
			document.getElementById("Food9Output").value= NewFood9;
			Food9=NewFood9;
			
			NewFood10= Food10+.5;
			document.getElementById("Food10Output").value= NewFood10;
			Food10=NewFood10;
			
			NewFood11= Food11+.083;
			document.getElementById("Food11Output").value= NewFood11;
			Food11=NewFood11;
			
			NewFood12= Food12+.333;
			document.getElementById("Food12Output").value= NewFood12;
			Food12=NewFood12;
		}
		else {
			SS--;
			document.getElementById("ServingSizeOutput").value=SS;
			NewFood1= Food1-.333;
			document.getElementById("Food1Output").value=NewFood1;
			Food1=NewFood1;
			
			NewFood2= Food2-.333;
			document.getElementById("Food2Output").value=NewFood2;
			Food2=NewFood2;
			
			NewFood3= Food3-.333;
			document.getElementById("Food3Output").value=NewFood3;
			Food3=NewFood3;
			
			NewFood4= Food4-.666;
			document.getElementById("Food4Output").value=NewFood4;
			Food4=NewFood4;
			
			NewFood5= Food5-.166;
			document.getElementById("Food5Output").value=NewFood5;
			Food5=NewFood5;
			
			NewFood6= Food6-.042;
			document.getElementById("Food6Output").value=NewFood6;
			Food6=NewFood6;
			
			NewFood7= Food7-.167;
			document.getElementById("Food7Output").value=NewFood7;
			Food7=NewFood7;
			
			NewFood8= Food8-.167;
			document.getElementById("Food8Output").value=NewFood8;
			Food8=NewFood8;
			
			NewFood9= Food9-.167;
			document.getElementById("Food9Output").value=NewFood9;
			Food9=NewFood9;
			
			NewFood10= Food10-.5;
			document.getElementById("Food10Output").value=NewFood10;
			Food10=NewFood10;
			
			NewFood11= Food11-.083;
			document.getElementById("Food11Output").value=NewFood11;
			Food11=NewFood11;
			
			NewFood12= Food12-.333;
			document.getElementById("Food12Output").value=NewFood12;
			Food12=NewFood12;
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

// JavaScript Document