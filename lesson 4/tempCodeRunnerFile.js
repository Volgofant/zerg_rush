var money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: undefined,
    income: [],
    savings: true
};

function start() {
     money =  +prompt("Ваш бюджет на месяц?");
     time = prompt("Введите дату в формате YYYY-MM-DD");

     while(isNaN(money) || money == "" || money == null ) {
        money =  +prompt("Ваш бюджет на месяц?");
         
     }
}
start();

function choiseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", "");
        let b = prompt("Во сколько обойдётся?", "");
     
        if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null && 
        a != "" && b != "" && a.length < 50 ) {
        appData.expenses[a] = b;
    } else {
        i = i - 1;
    }  
    };

}
choiseExpenses();

//function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
alert ("Ежедневный бюджет " + appData.moneyPerDay);
//}
//detectDayBudget(appData.moneyData);