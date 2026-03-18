import { 
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
    PieChart, Pie, Cell, Legend 
} from 'recharts';
import StatsCard from '../components/StatsCard';
import './Analytics.css';

const dataVentas = [
    {name: 'Ene', ventas: 1500}, {name: 'Feb', ventas: 2000}, {name: 'Mar', ventas: 1500},
    {name: 'Abr', ventas: 2500}, {name: 'May', ventas: 3000}, {name: 'Jun', ventas: 3500},
    {name: 'Jul', ventas: 4000}, {name: 'Ago', ventas: 4000}, {name: 'Sep', ventas: 4500},
    {name: 'Oct', ventas: 5000}, {name: 'Nov', ventas: 5500}, {name: 'Dic', ventas: 6000}
];

const dataGastos = [
    {name: 'Inventario', valor: 400},
    {name: 'Marketing', valor: 300},
    {name: 'Servicios', valor: 200},
    {name: 'Otros', valor: 100}
];

const COLORS = [
    '#7f5af0', 
    '#fffffe', 
    '#72757e', 
    '#33343d'
];

function Analytics() {
    return (
        <div className="analytics-page">
            <h1>Analytics</h1>
            
            <div className="analytics-grid">
                {/* Gráfica de Ventas */}
                <div className="chart-card">
                    <h2>Ventas Mensuales</h2>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={dataVentas}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                                <XAxis dataKey="name" stroke="#94a1b2" />
                                <YAxis stroke="#94a1b2" />
                                <Tooltip contentStyle={{backgroundColor: '#16161a', border: '1px solid #333'}} />
                                <Line type="monotone" dataKey="ventas" stroke="#7f5af0" strokeWidth={3} dot={{r: 4}} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="chart-card-2">
                    <h2>Distribución de Gastos</h2>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie 
                                    data={dataGastos} 
                                    dataKey="valor" 
                                    nameKey="name" 
                                    innerRadius={60} 
                                    outerRadius={80} 
                                    paddingAngle={5}
                                >
                                    {dataGastos.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <StatsCard />
        </div>
    )
}

export default Analytics;