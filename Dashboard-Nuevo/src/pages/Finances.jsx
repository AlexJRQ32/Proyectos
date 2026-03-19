import './Finances.css';
import PieChartContainer from '../components/PieChart';
import StatsCard from '../components/StatsCard';
import BarChartComponent from '../components/BarChart';
import Lista from '../components/Lista';

function Finances() {

    const statsData = [
        {title: 'Total Income', value: '$24,500.00', trend: '+15%', trendType: 'positive', icon: 'fas fa-dollar-sign', percentage: 88},
        {title: 'Total Expenses', value: '$12,300.00', trend: '-5%', trendType: 'negative', icon: 'fas fa-credit-card', percentage: 42},
        {title: 'Net Balance', value: '$12,200.00', trend: '+10%', trendType: 'positive', icon: 'fas fa-chart-line', percentage: 65}
    ];

    const transactionsData = [
        {id: 1, date: '2022-01-01', concept: 'Income', category: 'Sales', amount: 1000, status: 'Completed'},
        {id: 2, date: '2022-01-02', concept: 'Expense', category: 'Rent', amount: 500, status: 'Pending'},
        {id: 3, date: '2022-01-03', concept: 'Income', category: 'Sales', amount: 1000, status: 'Completed'},
        {id: 4, date: '2022-01-04', concept: 'Expense', category: 'Rent', amount: 500, status: 'Completed'},
        {id: 5, date: '2022-01-05', concept: 'Income', category: 'Sales', amount: 1000, status: 'Completed'},
        {id: 6, date: '2022-01-06', concept: 'Expense', category: 'Rent', amount: 500, status: 'Pending'},
        {id: 7, date: '2022-01-07', concept: 'Income', category: 'Sales', amount: 1000, status: 'Completed'},
        {id: 8, date: '2022-01-08', concept: 'Expense', category: 'Rent', amount: 500, status: 'Completed'},
        {id: 9, date: '2022-01-09', concept: 'Income', category: 'Sales', amount: 1000, status: 'Pending'},
        {id: 10, date: '2022-01-10', concept: 'Expense', category: 'Rent', amount: 500, status: 'Completed'}
    ];

    const chartData = [
        { name: 'Jan', Income: 4000, Expenses: 2400 },
        { name: 'Feb', Income: 3000, Expenses: 1398 },
        { name: 'Mar', Income: 2000, Expenses: 9800 },
        { name: 'Apr', Income: 2780, Expenses: 3908 },
        { name: 'May', Income: 1890, Expenses: 4800 },
        { name: 'Jun', Income: 2390, Expenses: 3800 },
        { name: 'Jul', Income: 3490, Expenses: 4300 },
    ];

    const expensesData = [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 200 },
        { name: 'Apr', value: 278 },
        { name: 'May', value: 189 },
        { name: 'Jun', value: 239 },
        { name: 'Jul', value: 349 },
    ];

    const COLORS = ['#3d2b7a', '#5a3eba', '#7f5af0', '#9d81e1', '#b49af0ff', '#d6c8f5', '#d1c2f7ff'];

    return (
        <div className="finances-page">
            <header className="finances-header">
                <h1>Finances Overview</h1>
            </header>
            
            <div className="stats-container">
                {statsData.map((stat, index) => (
                    <StatsCard key={index} title={stat.title} value={stat.value} trend={stat.trend} trendType={stat.trendType} icon={stat.icon} percentage={stat.percentage}/>
                ))}
            </div>

            <div className="finances-charts">
                <div className="chart-card">
                    <BarChartComponent data={chartData} dataKeyX="name" dataKeyY="Income" dataKeyZ="Expenses" titleChart="Cash Flow (Income vs Expenses)"/>
                </div>
                <div className="chart-card">
                    <PieChartContainer titleChart="Expenses Distribution" data={expensesData} dataKeyY="value" colors={COLORS}/>
                </div>
            </div>
            <section className="transactions-container">
                <Lista data={transactionsData} dataKeyX="Date" dataKeyY="Concept" dataKeyZ="Category" dataKeyW="Amount" dataKeyV="Status"/>
            </section>
        </div>
    )
}

export default Finances;
