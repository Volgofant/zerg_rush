var money =  prompt("Ваш бюджет на месяц?", '');
var time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");


var appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: undefined,
    income: [],
    savings: false
};
check:
for (let i = 0; i < 2; i++) {
    let a = +prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = +prompt("Во сколько обойдётся?", "");
 
    if ((typeof(a) === "string") && (typeof(a) != null) && (typeof(b) != null) && a != "" && b != "" && a.length < 50) {
    appData.expenses[a] = b;
} else {
    continue check;
}  
};

appData.moneyPerDay = appData.moneyData / 30 ;
alert ("Ежедневный бюджет " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Средний уровень достатка")
} else if (appData.moneyPerDay > 2000) {
    console.log ("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}