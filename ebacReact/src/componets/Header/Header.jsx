const Cabecalho = () => {
    return (
        <div>
            <header className="bg-primary bg-opacity-75 text-white p-2">
                <div className="text-center">
                    <h1 >Calcula Rápido</h1>
                </div>
            </header>
                <p className="text-center p-2 fs-5">Tabela de classificação de IMC.</p>
            <div className="text-center">
            <img className="imgTabela" src="https://www.drrogermoura.com.br/images/artigos/tabela-imc.png" alt="Tabela com classificação de IMC" />
            </div>
        </div>
    )
}

export default Cabecalho 