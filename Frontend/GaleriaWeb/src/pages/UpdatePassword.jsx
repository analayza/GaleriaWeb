import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInputGlobal from '../components/TextInputGlobal.jsx';
import { GlobalStyles } from '../style/GlobalStyle.js';
import Menu from '../components/Menu.jsx';
import { LabelConfigUpdate, ContainerConfig } from '../style/Config.js';
import { ButtonEntry } from '../style/Entry.js';
import { UpdatePassword } from '../service/UpdateUser.js';
import { useState, useEffect } from 'react';


export default function Updatepassword() {

    const [successMessage, setsuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


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
                    oldPassword: "",
                    newPassword: ""
                }}
                validationSchema={Yup.object({
                    oldPassword: Yup.string()
                        .min(6, 'A senha deve conter no mínimo 6 caracteres')
                        .max(20, 'A senha deve conter no máximo 20 caracteres')
                        .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
                        .matches(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
                        .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
                        .matches(/[@$!%*?&]/, 'A senha deve conter pelo menos um caractere especial (@, $, !, %, *, ?, &)')
                        .required("Obrigatório"),
                    newPassword: Yup.string()
                        .min(6, 'A senha deve conter no mínimo 6 caracteres')
                        .max(20, 'A senha deve conter no máximo 20 caracteres')
                        .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
                        .matches(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
                        .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
                        .matches(/[@$!%*?&]/, 'A senha deve conter pelo menos um caractere especial (@, $, !, %, *, ?, &)')
                        .required("Obrigatório"),
                })}

                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        const resul = await UpdatePassword(values.oldPassword, values.newPassword);
                        if (resul) {
                            setsuccessMessage("Senha Atualizada com sucesso");
                        }
                    } catch (error) {
                        setErrorMessage('Senha Antiga inválida');
                    }finally{
                        setSubmitting(false);
                    }
                }}
            >

                <Form>
                    <ContainerConfig>
                        <LabelConfigUpdate htmlFor="">Senha Antiga</LabelConfigUpdate>
                        <TextInputGlobal name="oldPassword" type="password" placeholder="Digite sua senha antiga" />
                        <LabelConfigUpdate htmlFor="">Senha Nova</LabelConfigUpdate>
                        <TextInputGlobal name="newPassword" type="password" placeholder="Digite sua senha nova" />

                        <ButtonEntry type='submit'>Atualizar Senha</ButtonEntry>
                        <div>
                            {successMessage && <p style={{ color: "black", marginRight: '100px', marginTop: '10px' }}>{successMessage}</p>}
                            {errorMessage && <p style={{ color: "black", marginRight: '100px', marginTop: '10px' }}>{errorMessage}</p>}
                        </div>
                    </ContainerConfig>
                </Form>

            </Formik>
        </>
    )
}