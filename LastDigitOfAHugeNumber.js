//ok i had problems doing this one so i decided to try chatgpt for help,
//but for fuck sake even it couldnt solve this problem with javascript
//ok this problem is trivial on other programming languages but
//WHY JAVASCRIPT OUT OF ALL THE LANGUAGES!
//I HATE JAVASCRIPT

function modPow(base, exponent, modulus) {
    let result = BigInt(1);
    base = base % modulus;
    while (exponent > 0) {
        if (exponent % BigInt(2) === BigInt(1)) {
            result = (result * base) % modulus;
        }
        exponent = exponent >> BigInt(1);
        base = (base * base) % modulus;
    }
    return result;
}

function lastDigitOfExponentialSequence(numbers) {
    if (!numbers.length) {
        return 1;
    }

    let result = BigInt(numbers[numbers.length - 1]) % BigInt(10);
    for (let i = numbers.length - 2; i >= 0; i--) {
        const base = BigInt(numbers[i]) % BigInt(10);
        result = modPow(base, result, BigInt(10));
    }

    return Number(result);
}

// Example usage:
const inputList = [12, 30, 21];
const result = lastDigitOfExponentialSequence(inputList);
console.log(result);