function isPalindrome(palavra) {
    var pala = palavra.split('').reverse().join('').replace(',', '').replace(' ', '');
    return (pala === palavra);
}

module.exports = isPalindrome;


