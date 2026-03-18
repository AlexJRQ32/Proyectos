import './Botones.css';

function BotonEliminar({onClick}){
    return(
        <button className="btn-cambios btn-trash" onClick={onClick}>
            <i className="fa-solid fa-trash"></i>
        </button>
    );
}

export default BotonEliminar;