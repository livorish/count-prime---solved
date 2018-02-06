// Check if a number is prime or not

//1. Prompt the user to input a whole number

//2. if the user does not provide a whole number, keep prompting the user to input a valid number until they provide one

//3. if the provided number is prime: Print the number is prime

//4. Otherwise print the number is not prime and print its smallest positive divisor other than 1.

(function isPrimeFunction() {

    this.init = function () {
        this.checkNumber();
    }; 

    this.checkNumber = function (num) {
        do{
            num = prompt('input whole humber');
            num = parseInt(num);
            numbersArray(num);
        }while (!Number.isInteger(num));
        //
    };

    this.numbersArray = function (number) {
        var arr = [];
        var newArr = [];

        for (var i = 0; i <= number; i++) {
            arr.push(i);
        };
        
        for (var j = 2; j < arr.length; j++) {
            var isPrime = true;

            for (var k = 2; k < j; k++) {

                if (j % k == 0 ) {
                    isPrime = false;
                    break;
                };
            };
            if (isPrime) {
                newArr.push(j);
            };
        };

        console.log('There are ' + newArr.length + ' prime numbers smaller than '+ number + '.');
        console.log(newArr.join(' '));
    }
    
    this.init();

})();
