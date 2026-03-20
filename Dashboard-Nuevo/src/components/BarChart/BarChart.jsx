import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './BarChart.css';

function BarChartComponent({ titleChart, data, dataKeyX, dataKeyY, dataKeyZ }) {
    return (
        <>
            <h2>{titleChart}</h2>
            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <defs>
                            <filter id="glow-income" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#d4af37" floodOpacity="0.8"/>
                            </filter>
                            <filter id="glow-expenses" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#d4af37" floodOpacity="0.8"/>
                            </filter>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#d4af37" opacity={0.2} />
                        <XAxis dataKey={dataKeyX} stroke="#5a3eba" />
                        <YAxis stroke="#9d81e1" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={dataKeyY} fill="#9d81e1" filter="url(#glow-income)" />
                        <Bar dataKey={dataKeyZ} fill="#5a3eba" filter="url(#glow-expenses)" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

export default BarChartComponent;