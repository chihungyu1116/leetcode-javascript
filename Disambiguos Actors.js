


process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    actorsInOrder = input.split("\n");
    disambiguated = disambiguateActors(actorsInOrder);
    for(var i = 0; i < disambiguated.length; i++) {
        console.log(disambiguated[i]);
    }
});

function disambiguateActors(actorsInOrder) {
    // WRITE YOUR CODE HERE
    var hash = {};
    
    for(var i = 0; i < actorsInOrder.length; i++){
        var actor = actorsInOrder[i];
        if(hash[actor] !== undefined){
            hash[actor] += 1;
        } else {
            hash[actor] = 1;
        }
    }
    
    for(var i = actorsInOrder.length; i--;){
        actor = actorsInOrder[i];
        if(hash[actor] !== 1) {
            var count = hash[actor] === -1 ? 1 : hash[actor];
            actorsInOrder[i] = postfixActorName(actor, count);
            hash[actor] -= 1;
            
            if(hash[actor] === 1) {
                hash[actor] = -1;
            }
        }
    }
    
    for(var i = 0; i < actorsInOrder.length; i++){
        console.log(actorsInOrder[i])   
    }
    
}

function postfixActorName(actorName, num) {
    return actorName + " (" + convertNumberToRomanLetter(num) + ")";
}
    
function convertNumberToRomanLetter(num) {
    var dict = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var result = "";
    
    for(var i = 0; i < val.length; i++) {
        var v = val[i];
        
        if(num >= v) {
            var count = parseInt(num/v);
            num %= v;
            
            for(var j = 0; j < count; j++) {
                result = result + dict[i];
            }
        }
    }
    
    return result;
}