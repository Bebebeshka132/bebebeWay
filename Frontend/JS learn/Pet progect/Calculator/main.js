
function trad(elem) {
    let a = 0;
    let b = String;
    let c = 0;
    let res = 0;
    let strB = '';
    elem.addEventListener('click', (e) => {
        let target = e.target;
        if (target.nodeName != 'TD') return;
        if (target.id == 'input') return

        if (target.id == '') {
            b = target.innerHTML;
            strB += b;
            input.innerHTML = strB;
            b = +input.innerHTML
        };
        if (target.id != '') {
            strB = ''
            c = target.innerHTML;
            input.innerHTML = c;

            if (c == 'C') {
                a = 0;
                b = '';
                c = 0;
                strB = '';
                res = 0;
                input.innerHTML = ''
            };

            if (c == '=') {
                input.innerHTML = res
            };

            if (res != 0) {
                a = res
            } else {
                a = b
            }
        };
        if (c == '+') {
            res = +a + +b
        };

        if (c == '-') {
            res = +a - +b
        };

        if (c == '*') {
            res = +a * +b
        };

        if (c == '/') {
            res = +a / +b
        };

        if (c == '%') {
            res = +a * +b * 0.01
        };

        if (c == '**') {
            res = +(a ** b)
        };
    });
    resultTrad.addEventListener('click', () => {
        input.innerHTML = res
    });

};

function depos(elem) {
    let money = document.getElementById('money');
    let interest = document.getElementById('interest');
    let months = document.getElementById('months');

    elem.addEventListener('input', () => {
        let initial = +money.value;
        let interestF = +interest.value / 100;
        let years = +months.value / 12;
        let result = Math.round(initial * (1 + interestF) ** years);

        inputDepos.innerHTML = result

        let broker = result / initial
        profit.innerHTML = Math.floor(100 * broker) + '%'
    });

    resetDepos.addEventListener('click', () => {
        inputDepos.innerHTML = ''
    });
}



function nums(elem) {
    let beforeNum = 0;
    let from = 0;
    let to = 0;
    let numX = 0;
    let afterNum = '';
    let del = '';
    endOst = '';

    elem.addEventListener('click', (e) => {
        let target = e.target;
        if (target.nodeName != 'TD') return;
        if (target.id == 'inputNums') return;

        if (target.id == '') {
            beforeNum = target.innerHTML;
            inputNums.innerHTML += beforeNum;
            beforeNum = inputNums.innerHTML;
        };

        if (target.id != '') {
            if (target.id.includes('from')) {
                from = +target.dataset.value
            };

            if (target.id.includes('to')) {
                to = +target.dataset.value
            };

            if (afterNum != '') {
                beforeNum = afterNum
            };
        };

        if (target.id == 'resetNums') {
            beforeNum = 0;
            from = 0;
            to = 0;
            numX = 0;
            afterNum = 0;
            inputNums.innerHTML = '';
        };

        resultConvertor.innerHTML = from + ' --> ' + to;
    });


    resultNums.addEventListener('click', () => {
        beforeNum = beforeNum.split('');
        beforeNum = beforeNum.filter(item => item.trim() !== '');
        beforeNum = beforeNum.reverse();

        for (let i = 0; i < beforeNum.length; i++) {
            numX += +(beforeNum[i] * from ** i);
        };

        convertor(numX, to, afterNum, endOst)
    });

}


let calcTrad = document.getElementById('table__calc-trad');
let calcDepos = document.getElementById('table__calc-depos');
let calcNums = document.getElementById('table__calc-nums');

calcTrad.hidden = true;
calcDepos.hidden = true;
calcNums.hidden = true;

choise.addEventListener('input', () => {
    calcTrad.hidden = true;
    calcDepos.hidden = true;
    calcNums.hidden = true;

    if (choise.value == 'traditional') {
        calcTrad.hidden = false;
        trad(calcTrad);
    };

    if (choise.value == 'deposition') {
        calcDepos.hidden = false;
        depos(calcDepos)
    };


    if (choise.value == 'system__nums') {
        calcNums.hidden = false;
        nums(calcNums)
    };
});


function convertor(numX, to, afterNum, endOst) {
    let ost = '';

    ost = numX % to;
    endOst += ost
    del = (numX - ost) / to;

    let sum = '';
    sum += del.toString() + endOst.toString().split('').reverse().join('')
    afterNum = sum;

    if (del > to) {
        return convertor(del, to, sum, endOst)
    } else {
        inputNums.innerHTML = afterNum;
        return afterNum
    };
};


//Сыроват, но впринципе пойдёт. Системы счисления не доделаны.