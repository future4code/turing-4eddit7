import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Pagina, Logo, Input, BotaoLogin, BotaoCadastro, Copyright} from './styles'

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
    <Pagina>
        <Logo><i>lab</i>eddit</Logo>
        <Input placeholder="Email" value={email} onChange={onChangeEmail} />
        <Input placeholder="Senha" value={senha} onChange={onChangeSenha} type="password" />
        <BotaoLogin onClick={goToFeedPage}>Logar</BotaoLogin>
        <br/>
        <BotaoCadastro onClick={goToNewUserPage}>Criar novo usuário?</BotaoCadastro>
        <Copyright>© 2020 Labenu - Desenvolvido por Guilherme Paiva (Turma Turing)</Copyright>
    </Pagina>
    )  
}

export default LoginPage