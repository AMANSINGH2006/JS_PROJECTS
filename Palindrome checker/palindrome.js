document.getElementById('checkButton').addEventListener("click",palindromeChecker);

function palindromeChecker(){
    const inputText = document.getElementById('inputText');
    const result = document.getElementById('result');
    if(isPalindrome(inputText.value)){
        result.textContent = `"${inputText.value}" is a palindrome`;
    }
    else{
        result.textContent = `"${inputText.value}" is not a palindrome`;
    }
    result.classList.add('fadeIn');
    inputText.value = '';
}

function isPalindrome(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}