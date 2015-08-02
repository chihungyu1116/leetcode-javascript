/**
 * @param {number[]} A
 * @return {number}
 */
var removeDuplicates = function(A) {
    if(A === null){
        return 0;
    }
    
    var index = 1;
    
    while(index < A.length){
        if(A[index] === A[index - 1]){
            A.splice(index, 1);
        } else{
            index++;    
        }
    }
    
    return A.length;
};