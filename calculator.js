storeIN1 = true
storeIN2 = false
store = 0
var show = (x) => {
    if(storeIN1 == true){
        document.getElementById("inputTxtbx").value = ""  
        storeIN1 = false
    }
    if(storeIN2 == true){
        document.getElementById("inputTxtbx").value = ""  
        storeIN2 = false    
    }
    document.getElementById("inputTxtbx").value += x

}
//operator to be used

tobeUsedOperator = ""
ini_storage = 0
storage = 0
operator = ""
var operate = (x)=>{  
    operator = x 
    storeIN2 = true
    storage = document.getElementById("inputTxtbx").value 
    if(tobeUsedOperator != ""){
        if(tobeUsedOperator == "+"){
            store =  parseFloat(ini_storage)+parseFloat(storage) 
            ini_storage = store
        }else if(tobeUsedOperator == "-"){
            store = parseFloat(ini_storage) - parseFloat(storage)
            ini_storage = store
        }else if(tobeUsedOperator == "/"){
            store = parseFloat(ini_storage) /parseFloat(storage)
            ini_storage = store
        }else if(tobeUsedOperator == "*"){
            store = parseFloat(ini_storage) *parseFloat(storage)
            ini_storage = store
        }
        document.getElementById("inputTxtbx").value = store
    }else{
        ini_storage = storage
        document.getElementById("inputTxtbx").value = storage
    }
    tobeUsedOperator = x
    document.getElementById("showOperator").innerHTML = x
    
}


var solve =()=>{
    store2 = document.getElementById("inputTxtbx").value
    if (operator == "+") {
        result = parseFloat(ini_storage) + parseFloat(store2)
    } else if (operator == "-") {
        result = parseFloat(ini_storage) - parseFloat(store2)
    } else if (operator == "/") {
        result = parseFloat(ini_storage) / parseFloat(store2)
    } else if (operator == "*") {
        result = parseFloat(ini_storage) * parseFloat(store2)
    }
    document.getElementById("inputTxtbx").value = result
    tobeUsedOperator = ""
    document.getElementById("showOperator").innerHTML = ""
    operator = ""
}





var Clear = () =>{
    document.getElementById("inputTxtbx").value = ""
    storage = 0
    ini_storage = 0
    tobeUsedOperator = 0
    store2 = 0
    document.getElementById("showOperator").innerHTML = ""
    operator = ""
}

