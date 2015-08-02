/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var result = [];
    
    if(digits === null || digits.length === 0){
        return result;
    }
    
    var str = [];
    
    generate(digits, 0, str, result);
    return result;
};

var generate = function(digits, depth, str, result){
    if(digits.length === depth){
        result.push(str.join(''));
        return;
    }

    var letters = convertDigitToLetters(digits[depth]);
    
    for(var i = 0; i < letters.length; i++){
        var letter = letters[i];
        str.push(letter);
        generate(digits, depth + 1, str, result);
        str.pop();            
    }
}

var convertDigitToLetters = function(c){
    if(c === '1'){
        return '';
    }
    if(c === '2'){
        return 'abc';
    }
    if(c === '3'){
        return 'def';
    }
    if(c === '4'){
        return 'ghi';
    }
    if(c === '5'){
        return 'jkl';
    }
    if(c === '6'){
        return 'mno';
    }
    if(c === '7'){
        return 'pqrs';
    }
    if(c === '8'){
        return 'tuv';
    }
    if(c === '9'){
        return 'wxyz';
    }
    if(c === '0'){
        return ' ';
    }
}