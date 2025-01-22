import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInputGlobal from '../components/TextInputGlobal.jsx';
import { GlobalStyles } from '../style/GlobalStyle.js';
import Menu from '../components/Menu.jsx';
import {LabelConfigUpdate, ContainerConfig } from '../style/Config.js';
import { ButtonEntry } from '../style/Entry.js';


export default function UpdatePassword() {
    return (
        <>
            <GlobalStyles />
            <Menu />
            <Formik
                initialValues={{
                    Oldpassword: "",
                    Newpassword: ""
                }}
                validationSchema={Yup.object({
                    Oldpassword: Yup.string()
                        .min(6, 'A senha deve conter no mínimo 6 caracteres')
                        .max(20, 'A senha deve conter no máximo 20 caracteres')
                        .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
                        .matches(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
                        .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
                        .matches(/[@$!%*?&]/, 'A senha deve conter pelo menos um caractere especial (@, $, !, %, *, ?, &)')
                        .required("Obrigatório"),
                    Newpassword: Yup.string()
                        .min(6, 'A senha deve conter no mínimo 6 caracteres')
                        .max(20, 'A senha deve conter no máximo 20 caracteres')
                        .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
                        .matches(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
                        .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
                        .matches(/[@$!%*?&]/, 'A senha deve conter pelo menos um caractere especial (@, $, !, %, *, ?, &)')
                        .required("Obrigatório"),
                })}

                onSubmit={async (values, { setSubmitting }) => {
                    await serviceRegister(values.email, values.password, values.name);
                    setSubmitting(false);
                    return navigate("/");
                }}
            >

                <Form>
                    <ContainerConfig>
                        <LabelConfigUpdate htmlFor="">Senha Antiga</LabelConfigUpdate>
                        <TextInputGlobal name="Oldpassword" type="password" placeholder="Digite sua senha antiga" />
                        <LabelConfigUpdate htmlFor="">Senha Nova</LabelConfigUpdate>
                        <TextInputGlobal name="Newpassword" type="password" placeholder="Digite sua senha nova"/>

                        <ButtonEntry type='submit'>Atualizar Senha</ButtonEntry>
                    </ContainerConfig>
                </Form>

            </Formik>
        </>
    )
}