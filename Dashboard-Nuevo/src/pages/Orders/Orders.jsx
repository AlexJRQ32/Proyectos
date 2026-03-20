import './Orders.css';
import List from '../../components/List/List';
import StatsCard from '../../components/StatsCard/StatsCard';

function Orders() {
    const ordersData = [
        {id: 1, client: "Juan Perez", date: "2022-01-01", amount: "$100", status: "Completed"},
        {id: 2, client: "Maria Lopez", date: "2022-01-02", amount: "$200", status: "Pending"},
        {id: 3, client: "Pedro Ramirez", date: "2022-01-03", amount: "$300", status: "Cancelled"},
        {id: 4, client: "Ana Maria", date: "2022-01-04", amount: "$400", status: "Completed"},
        {id: 5, client: "Carlos Gomez", date: "2022-01-05", amount: "$500", status: "Pending"},
        {id: 6, client: "Laura Martinez", date: "2022-01-06", amount: "$600", status: "Cancelled"},
        {id: 7, client: "Jorge Rodriguez", date: "2022-01-07", amount: "$700", status: "Completed"},
        {id: 8, client: "Sofia Hernandez", date: "2022-01-08", amount: "$800", status: "Pending"},
        {id: 9, client: "Miguel Perez", date: "2022-01-09", amount: "$900", status: "Cancelled"},
        {id: 10, client: "Fernanda Lopez", date: "2022-01-10", amount: "$1000", status: "Completed"}
    ];

    const statsData = [
        {title: 'Total Orders', value: '1,450', trend: '+15%', trendType: 'positive', icon: 'fas fa-shopping-cart', percentage: 91},
        {title: 'Completed', value: '1,220', trend: '-5%', trendType: 'negative', icon: 'fas fa-check-circle', percentage: 84},
        {title: 'Processing', value: '130', trend: '+10%', trendType: 'positive', icon: 'fas fa-cogs', percentage: 9},
        {title: 'Average Ticket', value: '$90.00', trend: '+10%', trendType: 'positive', icon: 'fas fa-dollar-sign', percentage: 72}
    ];

    return (
        <div className="orders-page">
            <header className="orders-header">
                <h1>Orders Overview</h1>
            </header>

            <div className="stats-container">
                {statsData.map((stat, index) => (
                    <StatsCard key={index} title={stat.title} value={stat.value} trend={stat.trend} trendType={stat.trendType} icon={stat.icon} percentage={stat.percentage}/>
                ))}
            </div>
            <section className="orders-container">
                <List title="Recent Orders" data={ordersData} dataKeyX="Order ID" dataKeyY="Client" dataKeyZ="Products" dataKeyW="Total" dataKeyV="Status"/>
            </section>
        </div>
    )
}

export default Orders;
