var show = (x) => {
    document.getElementById("inputTxtbx").value += x
}

var operator;
store1 = 0
var operate = (x) => {
    if(document.getElementById("inputTxtbx").value != "" || document.getElementById("inputTxtbx").value != null){
        store1 = document.getElementById("inputTxtbx").value || store1
    }
    document.getElementById("inputTxtbx").value = ""
    operator = x
    document.getElementById("showOperator").innerHTML = operator
}

store2 = 0
var solve = () => {
    store2 = document.getElementById("inputTxtbx").value
    if (operator == "+") {
        result = parseFloat(store1) + parseFloat(store2)
    } else if (operator == "-") {
        result = parseFloat(store1) - parseFloat(store2)
    } else if (operator == "/") {
        result = parseFloat(store1) / parseFloat(store2)
    } else if (operator == "*") {
        result = parseFloat(store1) * parseFloat(store2)
    }

    document.getElementById("inputTxtbx").value = result
    document.getElementById("showOperator").innerHTML = ""
    operator = ""
}

var Clear = () =>{
            document.getElementById("inputTxtbx").value = ""
            store1 = 0
            store2 = 0
        }
