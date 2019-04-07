var money =  prompt("Ваш бюджет на месяц?", '');
var time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");


var appData = {
    moneyData: money,
    timeData: time,
    expenses: {
        quest1: quest2,
        quest3: quest4,
    },
    optionalExpenses: undefined,
    income: [],
    savings: false
};

var quest1 = prompt("Введите обязательную статью расходов в этом месяце", "");
var quest2 = prompt("Во сколько обойдётся?", "");
var quest3 = prompt("Введите обязательную статью расходов в этом месяце", "");
var quest4 = prompt("Во сколько обойдётся?", "");
alert ("Ваш бюджет на один день - " + (money/30));


