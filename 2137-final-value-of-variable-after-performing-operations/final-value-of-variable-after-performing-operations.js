var finalValueAfterOperations = function(operations) {
    let ope=0
    for(let i=0;i<operations.length;i++){
        if(operations[i]== "X++" || operations[i]=="++X"){
            ope+=1
        }else if (operations[i]=="X--" || operations[i]=="--X"){
            ope-=1
        }
    }
    return ope
};