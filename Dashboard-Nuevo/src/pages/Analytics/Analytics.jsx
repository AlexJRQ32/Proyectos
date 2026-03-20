import StatsCard from '../../components/StatsCard/StatsCard';
import LineChartContainer from '../../components/LineChart/LineChart';
import PieChartContainer from '../../components/PieChart/PieChart';
import './Analytics.css';

const salesData = [
    {name: 'Jan', sales: 1500}, {name: 'Feb', sales: 2000}, {name: 'Mar', sales: 1500},
    {name: 'Apr', sales: 2500}, {name: 'May', sales: 3000}, {name: 'Jun', sales: 3500},
    {name: 'Jul', sales: 4000}, {name: 'Aug', sales: 4000}, {name: 'Sep', sales: 4500},
    {name: 'Oct', sales: 5000}, {name: 'Nov', sales: 5500}, {name: 'Dec', sales: 6000}
];

const expensesData = [
    {name: 'Inventory', value: 400},
    {name: 'Marketing', value: 300},
    {name: 'Services', value: 200},
    {name: 'Other', value: 100}
];

const COLORS = [
    '#744cec', 
    '#8463cfff', 
    '#b599f6', 
    '#d8c3ff'
];

const stats = [
    {title: 'Total Sales', value: '$15,240.00', trend: '+12% vs last month', icon: 'fa-solid fa-chart-line', percentage: 85},
    {title: 'Low Stock', value: '12 products', trend: 'Review inventory', icon: 'fa-solid fa-box', percentage: 15},
];

function Analytics() {
    return (
        <div className="analytics-page">
            <h1>Analytics</h1>
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <StatsCard key={index} {...stat} />
                ))}
            </div>
            <div className="analytics-grid">
                <div className="chart-card">
                    <LineChartContainer titleChart="Monthly Sales" data={salesData} dataKeyY="sales" />
                </div>
                <div className="chart-card">
                    <PieChartContainer titleChart="Expenses Distribution" data={expensesData} dataKeyY="value" colors={COLORS} />
                </div>
            </div>
        </div>
    )
}

export default Analytics;