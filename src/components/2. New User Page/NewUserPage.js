import React, {useState} from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom';

const NewUserPage = () => {
    const history = useHistory()

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit"

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [usuario, setUsuario] = useState("")

    const criarUsuario = () => {
        const body = {
            email: email,
            password: senha,
            username: usuario
        }
        axios.post(`${baseUrl}/signup`, body)
        .then((response) => {
            alert("Usuário criado com sucesso, redirecionando você para o feed!")
            window.localStorage.setItem("token", response.data.token)
            history.push("/feed")
        }).catch((error) => {
            alert("Erro ao criar usuário, por favor tente novamente")
            console.log(error.message)
        })  
    }

    const onChangeUsuario = event => {
        setUsuario(event.target.value)
    }

    const onChangeEmail = event => {
        setEmail(event.target.value)
    }

    const onChangeSenha = event => {
        setSenha(event.target.value)
    }
    

return (
    <div>
        <h1>New User Page</h1>
        <input placeholder="Nome de usuário" value={usuario} onChange={onChangeUsuario} />
        <input placeholder="Email" value={email} onChange={onChangeEmail} />
        <input placeholder="Senha" value={senha} onChange={onChangeSenha} type="password" />
        <br />
        <button onClick={criarUsuario}>Cadastrar</button>
    </div>
    )  
}

export default NewUserPage