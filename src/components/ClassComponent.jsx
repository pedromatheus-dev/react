import React from "react";

class ClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message: "Olá mundo"
        }
    }

    componentDidMount(){
        console.log("É executado quando o usuário acessa pela primeira vez")
    }

    render(){
        return (
            <h1>É assim que se faz componente com classe
                {this.state.message}
            </h1>
        )
    }

}

export default ClassComponent