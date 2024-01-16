const Formulario = () => {
    return (
        <div className="container">
            <form className="form mt-4">
                <div className="row justify-content-center">
                    <div className="col-2">
                <input type="number" className="form-control " placeholder="Insira sua altura" />
                    </div>
                    <div className="col-2">
                <input type="number" className="form-control " placeholder="Insira seu peso" />
                    </div>
                    <button type="button" className="btn btn-primary col-1">
                        Calcular
                    </button>
                </div>
            </form>
            <div className="text-center p-5">
                <p className="fs-5">Seu imc é de 25</p>
            </div>
        </div>
    )
}

export default Formulario;