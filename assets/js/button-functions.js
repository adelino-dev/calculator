document.addEventListener("DOMContentLoaded", function(event) {

    function insert(number){
        var input = document.getElementById('entry');
        input.value = input.value + number;
    }

    function clear(){
        var input = document.getElementById('entry');
        var text = input.value;
        input.value = (text.slice(0, text.length-1));
    }

    function cancelEntry(){
        var input = document.getElementById('entry');
        input.value = ''
    }

    
    // Buttons:

    var button1 = document.getElementById('one');
    var button2 = document.getElementById('two');
    var button3 = document.getElementById('three');
    var button4 = document.getElementById('four');
    var button5 = document.getElementById('five');
    var button6 = document.getElementById('six');
    var button7 = document.getElementById('seven');
    var button8 = document.getElementById('eight');
    var button9 = document.getElementById('nine');
    var button0 = document.getElementById('zero');

    var buttonDoit = document.getElementById('doit');
    var buttonPlusOrMinus = document.getElementById('plusOrMinus');
    var buttonPercentage = document.getElementById('percentage');
    var buttonRadical = document.getElementById('radical');
    var buttonMultiplication = document.getElementById('multiplication');
    var buttonDivision = document.getElementById('division');
    var buttonAddition = document.getElementById('addition');
    var buttonSubtraction = document.getElementById('subtraction');
    var buttonEquals = document.getElementById('equals');

    var buttonClear = document.getElementById('clear');
    var buttonCancelEntry = document.getElementById('cancel-entry')

    // Events:

    button1.addEventListener('click', function(){insert('1')});
    button2.addEventListener('click', function(){insert('2')});
    button3.addEventListener('click', function(){insert('3')});
    button4.addEventListener('click', function(){insert('4')});
    button5.addEventListener('click', function(){insert('5')});
    button6.addEventListener('click', function(){insert('6')});
    button7.addEventListener('click', function(){insert('7')});
    button8.addEventListener('click', function(){insert('8')});
    button9.addEventListener('click', function(){insert('9')});
    button0.addEventListener('click', function(){insert('0')});

    buttonDoit.addEventListener('click', function(){insert('.')});
    buttonPlusOrMinus.addEventListener('click', function(){insert('±')});
    buttonPercentage.addEventListener('click', function(){insert('%')});
    buttonRadical.addEventListener('click', function(){insert('√')});
    buttonMultiplication.addEventListener('click', function(){insert('*')});
    buttonDivision.addEventListener('click', function(){insert('÷')});
    buttonAddition.addEventListener('click', function(){insert('+')});
    buttonSubtraction.addEventListener('click', function(){insert('-')});
    buttonEquals.addEventListener('click', function(){insert('=')});

    buttonClear.addEventListener('click', clear);
    buttonCancelEntry.addEventListener('click', cancelEntry);
});