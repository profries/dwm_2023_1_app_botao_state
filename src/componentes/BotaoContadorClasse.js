import React from "react";

export default class BotaoContadorClasse extends React.Component {
    constructor() {
        super();
        this.state = { contador: 0 };
    }

    incContador() {
        console.log('c1:',this.state.contador);
        this.setState({ contador: this.state.contador + 1})
        console.log('c2:',this.state.contador);
    }

    render() {
        return ( 
            <button onClick={() => this.incContador()}>Contador: {this.state.contador}</button>
        )
    }
}