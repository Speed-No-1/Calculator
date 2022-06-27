var myresult = $("#result")

function insetNumber(number){
    var existingNumber =  myresult.val();


    myresult.val(existingNumber+number)
}

function clearResult(){
    myresult.val("")
}
function calculate(){
    var result = eval( myresult.val())
    myresult.val(result)
}
function deleteNumber(){
    var presentValue = myresult.val();
    if(presentValue!=''){
    myresult.val(presentValue.val().slice(0,-1));    
    }
}