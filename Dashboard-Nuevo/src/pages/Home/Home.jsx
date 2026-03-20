import "./Home.css";
import StatsCard from "../../components/StatsCard/StatsCard";
import PieChartContainer from "../../components/PieChart/PieChart";
import BarChartContainer from "../../components/BarChart/BarChart";
import LineChartContainer from "../../components/LineChart/LineChart";

function Home() {

    const statsData = [
        {title: 'Total Revenue', value: '$45,231.89', trend: '+20.1%', trendType: 'positive', icon: 'fa-solid fa-dollar-sign', percentage: 89},
        {title: 'Total Expenses', value: '$22,615.94', trend: '+12.5%', trendType: 'positive', icon: 'fa-solid fa-dollar-sign', percentage: 50},
        {title: 'Net Profit', value: '$22,615.94', trend: '+12.5%', trendType: 'positive', icon: 'fa-solid fa-dollar-sign', percentage: 78},
        {title: 'Active Projects', value: '12', trend: '+12.5%', trendType: 'neutral', icon: 'fa-solid fa-folder', percentage: 60}
    ];

    const pieChartData = [
        {name: 'Inventory', value: 400},
        {name: 'Marketing', value: 300},
        {name: 'Services', value: 200},
        {name: 'Other', value: 100}
    ];

    const barChartData = [
        { name: 'Jan', Income: 4000, Expenses: 2400 },
        { name: 'Feb', Income: 3000, Expenses: 1398 },
        { name: 'Mar', Income: 2000, Expenses: 9800 },
        { name: 'Apr', Income: 2780, Expenses: 3908 },
        { name: 'May', Income: 1890, Expenses: 4800 },
        { name: 'Jun', Income: 2390, Expenses: 3800 },
        { name: 'Jul', Income: 3490, Expenses: 4300 },
    ];

    const lineChartData = [
        {name: 'Jan', value: 1500}, {name: 'Feb', value: 2000}, {name: 'Mar', value: 1500},
        {name: 'Apr', value: 2500}, {name: 'May', value: 3000}, {name: 'Jun', value: 3500},
        {name: 'Jul', value: 4000}, {name: 'Aug', value: 4000}, {name: 'Sep', value: 4500},
        {name: 'Oct', value: 5000}, {name: 'Nov', value: 5500}, {name: 'Dec', value: 6000}
    ];  

    const colors = [
        '#744cec', 
        '#8463cfff', 
        '#b599f6', 
        '#d8c3ff',
    ];

    return (
        <div className='home-page'>
            <div className="home-header">
                <h1>Dashboard</h1>
            </div>
            <div className="stats-container">
                {statsData.map((stat, index) => (
                    <StatsCard key={index} title={stat.title} value={stat.value} trend={stat.trend} trendType={stat.trendType} icon={stat.icon} percentage={stat.percentage}/>
                ))}
            </div>
            <div className="home-charts">
                <div className="chart-card-home">
                    <PieChartContainer titleChart="Expenses Distribution" data={pieChartData} dataKeyY="value" dataKeyX="name" colors={colors}/>
                </div>
                <div className="chart-card-home">
                    <BarChartContainer titleChart="Cash Flow (Income vs Expenses)" data={barChartData} dataKeyX="name" dataKeyY="Income" dataKeyZ="Expenses"/>
                </div>
                <div className="chart-card-home">
                    <LineChartContainer titleChart="Revenue Growth" data={lineChartData} dataKeyX="name" dataKeyY="value"/>
                </div>
            </div>
        </div>
    );
}

export default Home;