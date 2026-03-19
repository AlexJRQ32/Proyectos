import './Botones.css';

function BotonEditar({onClick}){
    return(
        <button className="btn-cambios btn-edit" onClick={onClick}>
            <i className="fa-solid fa-pen-to-square"></i>
        </button>
    )
}

export default BotonEditar;