    
    function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let result1 = multiply(num1, num2);
                    let result2 = addition(num1, num2);
                    let result3 = division(num1, num2);
                    // Display the result
                    displayResultMultiple(result1);
                    displayResultAddition(result2);
                    displayResultDivision(result3);
                } else {
                    displayResult('Please enter valid numbers');
                }
            }

            function multiply(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Multiply the numbers
                return a * b;
            }
            function addition(a, b){
                debugger;
                return a + b;
            }
            function division(a, b){
                debugger;
                return a / b;
            }
            function displayResultMultiple(result1) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result1');                
                resultElement.textContent = `The multiple result is: ${result1}`;
                
            }
            function displayResultAddition(result2){
                const resultElement2 = document.getElementById('result2');
                resultElement2.textContent = `The addition result is: ${result2}`;
            }
            function displayResultDivision (result3){
                const resultElement3 = document.getElementById('result3');
                resultElement3.textContent =`The division result is: ${result3}`;
            }
     
        