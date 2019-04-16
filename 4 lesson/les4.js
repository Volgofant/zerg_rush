let money, time;

function start() {
    money =  +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null ) {
       money =  +prompt("Ваш бюджет на месяц?");
        
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: undefined,
    income: [],
    savings: true,
    choiseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", "");
            let b = prompt("Во сколько обойдётся?", "");
         
            if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && 
            a != "" && b != "" && a.length < 50 ) {
            appData.expenses[a] = b;
                } else {
                    i = i - 1;
            }

        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Ежедневный бюджет " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Средний уровень достатка")
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        appData.optionalExpenses = {};
        for (let i = 1; i < 4; i++) {
            let x = prompt("Статья обязательных расходов?", "");
            appData.optionalExpenses[i] = x;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход?(перечислите через запятую)", '');
        if (items == "") {
            appData.chooseIncome();
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt("Вы ничего не забыли?"));
            appData.income.sort();
        }
        appData.income.forEach(function(item, i){
            i = i + 1;
            alert(i +':' + "Способы заработка: " + item);
        })
    }

    
    

};

for (let key in appData) {
    console.log("Наша программа включает в себя следующие данные: " + key);
};

