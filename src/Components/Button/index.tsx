import React from 'react';
import style from "./Botao.module.scss"

class Button extends React.Component <{type?: "button" | "submit" | "reset" | undefined, texto: string}> {
    render() {
        const { type = "button"} = this.props
        // const estaAtivo = false;
        // const styles = {
        //     backgroundColor: estaAtivo ? "green" : "red",
        //     color:'yellow'
        // }
        return (
            //style={styles}
      <button type={type} className={style.botao}>  
              {this.props.texto}  
            </button>
        )
    }
}

export default Button;