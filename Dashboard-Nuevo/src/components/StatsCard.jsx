import './StatsCard.css';

function StatsCard() {
    return (
        <div className="stats-grid">
            <div className="stat-card">
                <div className="stat-icon" style={{background: '#7f5af022', color: '#7f5af0'}}>
                    <i className="fa-solid fa-chart-line"></i>
                </div>
                <div>
                    <p>Ventas Totales</p>
                    <h3>$15,240.00</h3>
                    <span className="trend positive">+12% vs mes anterior</span>
                </div>
            </div>
            <div className="stat-card">
                <div className="stat-icon" style={{background: '#2cb67d22', color: '#2cb67d'}}>
                    <i className="fa-solid fa-box"></i>
                </div>
                <div>
                    <p>Stock Bajo</p>
                    <h3>12 productos</h3>
                    <span className="trend negative">Revisar inventario</span>
                </div>
            </div>
            
        </div>
    )
}

export default StatsCard;