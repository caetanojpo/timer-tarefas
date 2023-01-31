import React from 'react';
import style from "./Botao.module.scss"

class Button extends React.Component {
    render() {
        // const estaAtivo = false;
        // const styles = {
        //     backgroundColor: estaAtivo ? "green" : "red",
        //     color:'yellow'
        // }
        return (
            //style={styles}
      <button className={style.botao}>  
                Botão
            </button>
        )
    }
}

export default Button;