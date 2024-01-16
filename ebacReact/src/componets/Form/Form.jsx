import { useState } from "react";

const Formulario = () => {
let [peso, setPeso] = useState(0);
let [altura, setAltura] = useState(0);

const exibeIMC = () => {
    if (peso === 0 && altura === 0) {
        return <p className="fs-5 resultado">Insira os dados</p>;
    }

    const resultante = peso / (altura * altura);
    const resultado = resultante.toFixed(1);
    
    if(resultado > 39.9){
        return (
            <p className="fs-5 resultado" > Seu IMC é de ({resultado}), Você detem o nivel de obesidade grau 3 (mórbida) </p>
            )
    } else if (resultado >= 35.0){
        return (
            <p className="fs-5 resultado" > Seu IMC é de ({resultado}), Você detem o nivel de obesidade grau 2 (severa)</p>
            )
    } else if (resultado >= 30.0){
        return (
            <p className="fs-5 resultado" > Seu IMC é de ({resultado}), Você detem o nivel de obesidade grau 1</p>
            )
    } else if (resultado >= 25.0){
        return (
            <p className="fs-5 resultado" > Seu IMC é de ({resultado}), Você esta levemente acima do peso</p>
            )
    } else if (resultado >= 186){
        return (
            <p className="fs-5 resultado" > Seu IMC é de ({resultado}), Você esta no peso ideal </p>
            )
    } else {
        return (
            <p className="fs-5 resultado" >Seu IMC é de ({resultado}), Você esta a baixo do peso </p>
            )
    } 
}


    return (
        <div className="container">
            <form className="form mt-4">
                <div className="row justify-content-center">
                    <div className="col-2">
                <input type="number" className="form-control peso " placeholder="Insira sua peso"   onChange={evento => setPeso(evento.target.value)}/>
                    </div>
                    <div className="col-2">
                <input type="number" className="form-control altura" placeholder="Insira seu altura" onChange={evento => setAltura(evento.target.value)}  />
                    </div>
                </div>
            </form>
            <div className="text-center p-5">
                {exibeIMC()}
            </div>
        </div>
    )
}


export default Formulario;