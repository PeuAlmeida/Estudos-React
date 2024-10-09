import React from "react";
import Botao from "../Botao";

class Formulario extends React.Component {
    render() {
        return (
            <form action="">
                <div>
                    <label htmlFor="tarefa">
                        Adicione um novo Estudo
                    </label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="Por que você quer estudar ?" required/>
                </div>
                <div>
                    <label htmlFor="">
                        Tempo
                    </label>
                    <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:50:00"/>
                </div>
                <Botao />
            </form>
       )
    }
}

export default Formulario;