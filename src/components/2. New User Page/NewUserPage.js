import React, {useState} from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom';
import {Pagina, Logo, Input, BotaoCriar, BotaoHome, Copyright, NovoUsuario} from './styles'

const NewUserPage = () => {
    const history = useHistory()

    const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit"

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [usuario, setUsuario] = useState("")

    const goToLoginPage = () => {
        history.push("/")
    }

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
    <Pagina>
        <Logo><i>lab</i>eddit</Logo>
        <NovoUsuario>novo usuário</NovoUsuario>
        <Input placeholder="Nome de usuário" value={usuario} onChange={onChangeUsuario} />
        <Input placeholder="Email" value={email} onChange={onChangeEmail} />
        <Input placeholder="Senha" value={senha} onChange={onChangeSenha} type="password" />
        <Input placeholder="Confirme sua senha" type="password" />
        <BotaoCriar onClick={criarUsuario}>Cadastrar</BotaoCriar>
        <BotaoHome onClick={goToLoginPage}>Voltar para login?</BotaoHome>
        <Copyright>© 2020 Labenu - Desenvolvido por Guilherme Paiva (Turma Turing)</Copyright>
    </Pagina>
    )  
}

export default NewUserPage