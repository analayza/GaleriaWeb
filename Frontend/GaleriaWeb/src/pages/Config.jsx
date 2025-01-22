import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { GlobalStyles } from '../style/GlobalStyle.js';
import Menu from '../components/Menu.jsx';
import {LabelConfig, ContainerConfig, IconButton, InputWrapper } from '../style/Config.js';
import { ButtonEntry } from '../style/Entry.js';
import { FaEdit } from 'react-icons/fa';
import TextInputGlobal from '../components/TextInputGlobal.jsx';

export default function Config() {
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
                        .matches(/^[A-Za-z\s]+$/, "Não pode conter apenas números")
                })}

                onSubmit={async (values, { setSubmitting }) => {
                    await serviceRegister(values.email, values.password, values.name);
                    setSubmitting(false);
                    return navigate("/");
                }}
            >

                <Form>
                    <ContainerConfig>
                        <LabelConfig htmlFor="">Nome</LabelConfig>
                        <InputWrapper>
                            <TextInputGlobal name="name" type="text" placeholder="Digite seu nome"/> <IconButton><FaEdit size={25} color='black' />Editar</IconButton>
                        </InputWrapper>

                        <LabelConfig htmlFor="">Email</LabelConfig>
                        <InputWrapper>
                            <TextInputGlobal name="email" type="text" placeholder="Digite seu email"/> <IconButton><FaEdit size={25} color='black' />Editar</IconButton>
                        </InputWrapper>

                        <ButtonEntry onClick={() => window.location.href = '/config/updatepassword'}>Atualizar Senha</ButtonEntry>
                    </ContainerConfig>


                </Form>

            </Formik>
        </>
    )
}