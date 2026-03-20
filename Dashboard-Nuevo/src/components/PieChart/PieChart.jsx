import './PieChart.css';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function PieChartContainer({ titleChart, data, dataKeyX = "name", dataKeyY = "value", colors }) {
    return (
        <>
            <h2>{titleChart}</h2>
            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey={dataKeyY}
                            nameKey={dataKeyX}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={80}
                            paddingAngle={2}
                            stroke="none"
                            label={{ fill: '#9d81e1', fontSize: 13 }}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}

export default PieChartContainer;