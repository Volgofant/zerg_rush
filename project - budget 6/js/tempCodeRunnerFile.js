let start = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    resultTable = document.querySelector(".result-table"),
    value = document.querySelectorAll("[class *= 'value']"),
    data = document.querySelector(".data"),
    input = document.querySelectorAll(".expenses-item"),
    btn = document.getElementsByTagName('button'),
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector(".choose-income"),
    checkBox = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    expensesItemBtn = (btn[0]),
    optionalexpensesBtn =(btn[1]),
    countBudgetBtn = (btn[2]),
    money,
    time;

    resultTable.querySelectorAll("[class *= 'value']");
    data.querySelectorAll(".expenses-item");

    start.addEventListener('click', function() { 
        time = prompt("Введите дату в формате YYYY-MM-DD", '');
        money =  +prompt("Ваш бюджет на месяц?", '');
        
    
        while(isNaN(money) || money == "" || money == null ) {
            money =  +prompt("Ваш бюджет на месяц?", '');            
        }
        
        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Data(Date.parse(time)).getDate();
        console.log(dayValue);
    });