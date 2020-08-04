import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const LoginPage = () => {
    const history = useHistory()

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit"

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const goToNewUserPage = () => {
        history.push("/cadastro")
    }

    const goToFeedPage = () => {
        const body = {
            email: email,
            password: senha
        }
        axios.post(`${baseUrl}/login`, body)
        .then((response) => {
            window.localStorage.setItem("token", response.data.token)
            history.push("/feed")
        }).catch((error) => {
            alert("Dados incorretos, tente novamente")
            console.log(error.message)
            setEmail("")
            setSenha("")
        })
        
    }

    const onChangeEmail = event => {
        setEmail(event.target.value)
    }

    const onChangeSenha = event => {
        setSenha(event.target.value)
    }

return (
    <div>
        <h1>Login Page</h1>
        <input placeholder="Email" value={email} onChange={onChangeEmail} />
        <input placeholder="Senha" value={senha} onChange={onChangeSenha} type="password" />
        <button onClick={goToFeedPage}>Logar</button>
        <br/>
        <button onClick={goToNewUserPage}>Criar novo usuário</button>
        
    </div>
    )  
}

export default LoginPage