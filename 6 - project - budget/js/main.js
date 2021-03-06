let start = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    resultTable = document.querySelector(".result-table"),
    value = document.querySelectorAll("[class *= 'value']"),
    data = document.querySelector(".data"),
    expensesItem = document.getElementsByClassName("expenses-item"),
    btn = document.getElementsByTagName('button')[0],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector(".choose-income"),
    checkBox = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    expensesItemBtn = (btn[0]),
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countButton = document.getElementsByTagName("button")[2],
    countBudgetBtn = (btn[2]),
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],
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
        dayValue.value = new Date(Date.parse(time)).getDate();

        btn.addEventListener("click", function() {
        let sum = 0;

        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value;
            let b = expensesItem[++i].value;
         
            if ((typeof(a)) != null && (typeof(b)) != null && 
            a != "" && b != "") {
                    appData.expenses[a] = b;
                    sum += +b;
                } else {
                    i = i - 1;
            }
            
        }
        expensesValue.textContent = +sum;
        
        console.log(sum);
    });

    optionalExpensesBtn.addEventListener("click", function() {
        
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            let x = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = x;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + " "; 
        }
    });

    countButton.addEventListener("click", function(){

        if (appData.budget != undefined){
        appData.moneyPerDay = ((appData.budget-expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
    });
    chooseIncome.addEventListener("input", function(){
        let items = chooseIncome.value;
            appData.income = items.split(', ');
            incomeValue.textContent = appData.income;
    });

    checkBox.addEventListener('click', function() {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    chooseSum.addEventListener("input", function(){
        if (appData.savings == true) {
            let sum = +chooseSum.value;
                percent = +choosePercent.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;
            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

        }
    });
    choosePercent.addEventListener("input", function(){
        if (appData.savings == true) {
            let sum = +chooseSum.value;
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });
    });

    

    
    
    let appData = {
        timeData: time,
        budget: money,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
    };

    




