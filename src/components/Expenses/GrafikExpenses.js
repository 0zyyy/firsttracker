import Grafik from "../Chart/Grafik";

const GrafikExpenses = (props) => {
    const DataPoint = [
        {label : 'Jan', value: 0},
        {label : 'Feb', value: 0},
        {label : 'Mar', value: 0},
        {label : 'Apr', value: 0},
        {label : 'May', value: 0},
        {label : 'Jun', value: 0},
        {label : 'Jul', value: 0},
        {label : 'Aug', value: 0},
        {label : 'Sep', value: 0},
        {label : 'Oct', value: 0},
        {label : 'Nov', value: 0},
        {label : 'Dec', value: 0},
    ];
    for(const expense of props.expenses){
        const expenseBulan = expense.date.getMonth() // Mulai dari nol karena array
        DataPoint[expenseBulan].value += expense.amount;
    }
    return <Grafik items={DataPoint}/>
};

export default GrafikExpenses;