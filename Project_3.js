function add() {
    fst = parseFloat(my_form.fst.value);
    snd = parseFloat(my_form.snd.value);
    if (isNaN(fst) || isNaN(snd)) {
        alert("Alert! Enter a Valid Number");
    }
    else if (fst == null || snd == null) {
        alert("Alert! Enter a Valid Number");
    }
    else {
        result = (fst + snd);
        my_form.result.value = result;
    }
}
function subtract() {
    fst = parseFloat(my_form.fst.value);
    snd = parseFloat(my_form.snd.value);
    if (isNaN(fst) || isNaN(snd)) {
        alert("Alert! Enter a Valid Number");
    }
    else if (fst == null || snd == null) {
        alert("Alert! Enter a Valid Number");
    }
    else {
        result = (fst - snd);
        my_form.result.value = result;
    }
}
function multiply() {
    fst = parseFloat(my_form.fst.value);
    snd = parseFloat(my_form.snd.value);
    if (isNaN(fst) || isNaN(snd)) {
        alert("Alert! Enter a Valid Number");
    }
    else if (fst == null || snd == null) {
        alert("Alert! Enter a Valid Number");
    }
    else {
        result = (fst * snd);
        my_form.result.value = result;
    }
}
function divide() {
    fst = parseFloat(my_form.fst.value);
    snd = parseFloat(my_form.snd.value);
    if (isNaN(fst) || isNaN(snd)) {
        alert("Alert! Enter a Valid Number");
    }
    else if (fst == null || snd == null) {
        alert("Alert! Enter a Valid Number");
    }
    else {
        result = (fst / snd);
        my_form.result.value = result;
    }
}
function modulo() {
    fst = parseFloat(my_form.fst.value);
    snd = parseFloat(my_form.snd.value);
    if (isNaN(fst) || isNaN(snd)) {
        alert("Alert! Enter a Valid Number");
    }
    else if (fst == null || snd == null) {
        alert("Alert! Enter a Valid Number");
    }
    else {
        result = ((fst % snd) + snd) % snd;
        my_form.result.value = result;
    }
}