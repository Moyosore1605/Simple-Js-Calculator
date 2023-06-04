let firstnum;
    let secondNum;
    let thirdNum = [];
    let operatorsrex = [];
    let operation;
    let signs;
    let answer;
    let clear = false;
    let first = true;
    let firstTypeNum = true;
    let count = 0;
    let screen = document.querySelector('#screen')
    let result1 = false
    function number(num) {
        if (clear) {
            document.getElementById("screen1").innerHTML = '';
            clear = false;
        }
        if (firstTypeNum){
            document.getElementById("screen1").innerHTML = '';
            firstTypeNum = false;
        }
        document.getElementById("screen1").innerHTML += num;
        // thirdNum.push(num);
        // document.getElementById("clear").innerHTML = '';
        if (count > 0) {
            num = ''
            result1 = false;
        }
    }
    let screen1 = document.getElementById('screen1');
    function operator(operation) {
        operatorsrex.push(operation)
        signs = operation;
        // thirdNum.push(signs);
        if (first) {
            firstnum = screen1.innerHTML;
            // thirdNum = screen1.innerHTML;
            screen.innerHTML += `${firstnum} ${operation}`;
            first = false;
        }
        clear = true;
        count++;
        if (count > 1 && result1 == false) {
            // secondNum = screen1.innerHTML;
            result(operatorsrex[operatorsrex.length-2], 'not clicked');
            screen.innerHTML += `${secondNum} ${operatorsrex[operatorsrex.length-1]}`;
            count = 1;
            // thirdNum = secondNum;
        }
        if (result1 == true) {
            // screen.innerHTML += `${secondNum} ${operatorsrex[operatorsrex.length-1]}`;
            // screen.innerHTML += `=`
        }
        // clear = false;
        // if (clear){
        //     result();  
        // }
        // result()
    }
    function result(params , click) {
        secondNum = screen1.innerHTML;

        if (result1 == false) {
            if (click == 'clicked') {
                screen.innerHTML += `${secondNum} =`
            }
            if (params == '+') {
                answer = Number(firstnum) + Number(secondNum);
                screen1.innerHTML = answer;
                firstnum = answer;
            }
            else if (params == '-') {
                answer = Number(firstnum) - Number(secondNum);
                screen1.innerHTML = answer;
                firstnum = answer;
            }
            else if (params == 'x') {
                answer = firstnum = Number(firstnum) * Number(secondNum);
                screen1.innerHTML = answer;
                firstnum = answer;
            }
            else if (params == '/') {
                answer = Number(firstnum) / Number(secondNum);
                screen1.innerHTML = answer;
                firstnum = answer;
                // if (rescount = 1) {
                //     firstnum = '';
                // }
            }
            else if (params != '+' || params != '-' || params != 'x' || params != '/'){
                screen1.innerHTML = `Not an possible operation`;
            }
        }
        result1 = true;
    }
    function clearscreen() {
        screen.innerHTML = "";
        screen1.innerHTML = "0";
        firstnum = ''
        secondNum = ''
        rescount = false;
        clear = false;
        first = true;
        count = 0
    }
    function numberToZero() {
        screen1.innerHTML = 0;
    }