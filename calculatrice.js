function calc (a, b, op) {

    if (typeof a !== 'number' || typeof b !== 'number') {
        return null;

    }

    switch(op){

        case '+' : 
            return a + b;
        
        case '-' : 
            return a - b;

        case '*' :
            return a * b;

        case '/' :{
            if(b !== 0)
                return a / b;
            else
                return null;
        }

        default:
            return null; 
    }

}

module.exports = calc