import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import TextInput from '../components/TextInput';
import styled from 'styled-components';

export default function Register() {
    return (
        <>
            <h1>Cadastro</h1>
            <Formik initialValues={{
                email: "",
                password: "",
                name: ""
            }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Email inválido!")
                        .required("Obrigatório"),
                    password: Yup.string()
                        .min(6, 'A senha deve conter no mínimo 6 caracteres')
                        .max(20, 'A senha deve conter no máximo 20 caracteres')
                        .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
                        .matches(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
                        .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
                        .matches(/[@$!%*?&]/, 'A senha deve conter pelo menos um caractere especial (@, $, !, %, *, ?, &)')
                        .required("Obrigatório"),
                    name: Yup.string()
                        .min(3, 'O nome deve conter no mínimo 3 caracteres')
                        .max(50, 'O nome deve conter no máximo 50 caracteres')
                        .matches(/^[A-Za-z\s]+$/, "Não pode conter apenas números")
                        .required("Obrigatório")
                })}

                onSubmit={async () => {

                }}
            >

                <Form>
                    <TextInput
                        label="Nome"
                        name="name"
                        type="text"
                        placeholder="Digite seu nome"
                    />
                    <TextInput
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Digite seu email"
                    />
                    <TextInput
                        label="Senha"
                        name="password"
                        type="password"
                        placeholder="Digite sua senha"
                    />
                    <button type="submit">Cadastrar</button>
                </Form>
            </Formik>
        </>
    )
}