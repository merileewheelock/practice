// Using the JavaScript language, have the function FirstFactorial(num) take the num parameter
// being passed and returnthe factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)).
// For the test cases, the range will be between 1 and 18 and the input will always be an integer. 

function FirstFactorial(num) { 
	var factorial = 1;
	for (let i = 1; i <= num; i++){
		factorial = factorial * i;
	}  
	return factorial;        
}
   
FirstFactorial(readline());      