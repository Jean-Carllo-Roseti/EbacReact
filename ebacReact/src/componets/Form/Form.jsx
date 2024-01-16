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
                    <button type="button" className="btn btn-primary col-2">
                        Calcular
                    </button>
                </div>
            </form>
            <div className="text-center m-5">
                <p>Seu imc é de 25</p>
            </div>
        </div>
    )
}

export default Formulario;