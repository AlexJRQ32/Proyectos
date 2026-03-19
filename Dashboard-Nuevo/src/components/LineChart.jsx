import './LineChart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function LineChartContainer({ titleChart, data, dataKeyX = "name", dataKeyY = "sales", strokeColor = "#7f5af0" }) {
    return (
        <>
            <h2>{titleChart}</h2>
            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey={dataKeyX} stroke="#94a1b2" />
                        <YAxis stroke="#94a1b2" />
                        <Tooltip contentStyle={{ backgroundColor: '#16161a', border: '1px solid #333' }} />
                        <Line type="monotone" dataKey={dataKeyY} stroke={strokeColor} strokeWidth={3} dot={{ r: 4 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

export default LineChartContainer;
