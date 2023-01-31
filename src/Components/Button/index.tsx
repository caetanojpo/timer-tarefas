import React from 'react';
import "./style.scss"

class Button extends React.Component {
    render() {
        // const estaAtivo = false;
        // const styles = {
        //     backgroundColor: estaAtivo ? "green" : "red",
        //     color:'yellow'
        // }
        return (
            //style={styles}
      <button className='botao'>  
                Botão
            </button>
        )
    }
}

export default Button;