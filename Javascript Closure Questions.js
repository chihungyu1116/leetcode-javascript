// implement function add in such a way that:
// add() => 0
// add(1)(2)() => 3
// add(n0)(n1)...(nk)() => n0+n1+...+nk

function add(val){
    var total = 0;
    var result;
    var step = function(val){
        if(val === undefined){
            result = total;
            total = 0;
            return result;
        } else {
            total += val;
        }
    
        return step;
    }
    
    result = step(val);
    
    return result;
}