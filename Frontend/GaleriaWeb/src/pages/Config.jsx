import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { GlobalStyles } from '../style/GlobalStyle.js';
import Menu from '../components/Menu.jsx';
import { LabelConfig, ContainerConfig, IconButton, InputWrapper } from '../style/Config.js';
import { ButtonEntry } from '../style/Entry.js';
import { FaEdit } from 'react-icons/fa';
import TextInputGlobal from '../components/TextInputGlobal.jsx';
import { UpdateName, UpdateEmail, UpdatePassword } from '../service/UpdateUser.js';
import { useState, useEffect } from 'react';

export default function Config() {

    const [successMessage, setsuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function updateName(name) {
        try {
            const resulName = await UpdateName(name);
            if (resulName) {
                setsuccessMessage("Nome Atualizado com sucesso");
            }
        } catch (error) {
            setErrorMessage('Nome inválido');
        }
    };

    async function updateEmail(email) {
        try {
            const resulEmail = await UpdateEmail(email);
            if (resulEmail) {
                setsuccessMessage("Email Atualizado com sucesso");
            }
        }catch(error){
            setErrorMessage('Email inválido');
        }
    };

    useEffect(() => {
        if (successMessage || errorMessage) {
            const timer = setTimeout(() => {
                setsuccessMessage("");
                setErrorMessage("");
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [successMessage, errorMessage]);

    return (
        <>
            <GlobalStyles />
            <Menu />
            <Formik
                initialValues={{
                    email: "",
                    name: ""
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Email inválido!"),
                    name: Yup.string()
                        .min(3, 'O nome deve conter no mínimo 3 caracteres')
                        .max(50, 'O nome deve conter no máximo 50 caracteres')
                        .matches(/^[A-Za-z\s]+$/, "Não pode conter números")
                })}


            >
                {({ values }) => (
                    <Form>
                        <ContainerConfig>
                            <LabelConfig htmlFor="">Nome</LabelConfig>
                            <InputWrapper>
                                <TextInputGlobal name="name" type="text" placeholder="Digite seu nome" /> <IconButton type="button" onClick={() => updateName(values.name)}><FaEdit size={25} color='black' />Editar</IconButton>
                            </InputWrapper>

                            <LabelConfig htmlFor="">Email</LabelConfig>
                            <InputWrapper>
                                <TextInputGlobal name="email" type="email" placeholder="Digite seu email" /> <IconButton type="button" onClick={() => updateEmail(values.email)}><FaEdit size={25} color='black' />Editar</IconButton>
                            </InputWrapper>

                            <ButtonEntry onClick={() => window.location.href = '/config/updatepassword'}>Atualizar Senha</ButtonEntry>
                            <div>
                                {successMessage && <p style={{ color: "black", marginRight: '100px',  marginTop: '10px' }}>{successMessage}</p>}
                                {errorMessage && <p style={{ color: "black", marginRight: '100px',  marginTop: '10px' }}>{errorMessage}</p>}
                            </div>
                        </ContainerConfig>
                    </Form>
                )}
            </Formik>
        </>
    )
}