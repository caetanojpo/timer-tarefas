import React from 'react';
import style from "./Botao.module.scss"

interface Props {
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void, 
    children?: React.ReactNode
}

function Botao({ onClick, type, children}: Props) {
    return(
        <button onClick={onClick} type={type} className={style.botao}>  
              {children}  
            </button>
    )
}

class Button extends React.Component <{type?: "button" | "submit" | "reset" | undefined, onClick?: () => void, texto: string}> {
    render() {
        const { type = "button", onClick } = this.props
        // const estaAtivo = false;
        // const styles = {
        //     backgroundColor: estaAtivo ? "green" : "red",
        //     color:'yellow'
        // }
        return (
            //style={styles}
      <button onClick={onClick} type={type} className={style.botao}>  
              {this.props.texto}  
            </button>
        )
    }
}

export default Button;