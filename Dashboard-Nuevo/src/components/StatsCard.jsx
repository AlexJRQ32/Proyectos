import './StatsCard.css';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const RadialProgress = ({ percentage, color }) => {
    const data = [
        { name: "Completed", value: percentage },
        { name: "Remaining", value: 100 - percentage },
    ];

    return (
        <div className="radial-wrapper">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={28}
                        outerRadius={35}
                        startAngle={90}
                        endAngle={450}
                        dataKey="value"
                        stroke="none"
                        cornerRadius={10}
                    >
                        <Cell fill={color} />
                        <Cell fill="#2a2a2e" />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="radial-text">
                <span>{percentage}%</span>
            </div>
        </div>
    );
};

const TREND_COLORS = {
    positive: '#2cb67d',
    negative: '#ef4565',
    neutral: '#fca311',
};

function StatsCard({ title, value, trend, icon, percentage }) {
    const trendClass = trend.startsWith('+') ? 'positive'
        : trend.startsWith('-') ? 'negative'
        : 'neutral';

    const color = TREND_COLORS[trendClass];

    return (
        <div className={`stat-card ${trendClass}`}>
            <div className="card-left">
                <div className="card-header">
                    {icon && (
                        <div className="stat-icon">
                            <i className={icon}></i>
                        </div>
                    )}
                    <span className="card-label">{title}</span>
                </div>
                <h3 className="card-value">{value}</h3>
                <span className={`trend ${trendClass}`}>{trend}</span>
            </div>
            {percentage != null && (
                <div className="card-right">
                    <RadialProgress percentage={percentage} color={color} />
                </div>
            )}
        </div>
    );
}

export default StatsCard;