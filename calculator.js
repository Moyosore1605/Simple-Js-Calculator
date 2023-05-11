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
            first = false;
        }
        document.getElementById('screen').innerHTML += `${firstnum} ${operation}`;
        clear = true;
        count++;
        if (count > 1 && result1 == false) {
            // secondNum = screen1.innerHTML;
            result(operatorsrex[operatorsrex.length-2]);
            document.getElementById('screen').innerHTML += `${thirdNum} ${operatorsrex[operatorsrex.length-1]}`;
            count = 1;
            // thirdNum = secondNum;
        }
        // clear = false;
        // if (clear){
        //     result();  
        // }
        // result()
    }
    function result(params) {
        secondNum = screen1.innerHTML;
        if (result1 == false) {
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
            else {
                screen1.innerHTML = `Undefined`;
            }
        }
        result1 = true;
        document.getElementById('screen').innerHTML = `${answer}`
    }
    function clearscreen() {
        document.getElementById('screen').innerHTML = "";
        document.getElementById('screen1').innerHTML = "0";
        firstnum = ''
        secondNum = ''
        rescount = false;
        clear = false;
        first = true;
        count = 0
    }
    function numberToZero() {
        document.getElementById('screen1').innerHTML = 0;
    }