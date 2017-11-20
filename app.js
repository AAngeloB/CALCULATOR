	var output;
function calculator(x,y,z){

	if(x=="+"){
		//*used a string to assign the x what operation it'll use*//
		output = y+z;
	}
	else if(x=="-"){
		output= y-z
	}
	else if(x=="*"){
		output= y*z
	}
	else if(x=="/"){
		output= y/z
	}
	else {
		output = "BRUUUHH yous wrong.";
	}
}

calculator("+", 5, 20);
//* when used node, whatever operation is used, it uses the other two #*//


console.log(output);