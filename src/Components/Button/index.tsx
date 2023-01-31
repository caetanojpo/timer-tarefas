import React from 'react';

class Button extends React.Component {
    render() {
        const estaAtivo = false;
        const styles = {
            backgroundColor: estaAtivo ? "green" : "red",
            color:'yellow'
        }
        return (
            <button style={styles}>
                Botão
            </button>
        )
    }
}

export default Button;