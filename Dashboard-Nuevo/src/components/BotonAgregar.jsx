import './Botones.css';

function BotonAgregar({onClick}){
    return(
        <button className="btn-cambios btn-add" onClick={onClick}>
            <i className="fa-solid fa-plus"></i>
        </button>
    );
}

export default BotonAgregar;