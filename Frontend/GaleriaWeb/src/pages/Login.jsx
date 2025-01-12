import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../components/TextInput';
import serviceLogin from '../service/Login.js';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { GlobalStyles, StyleLink, StyleP, ButtonEntry, Container, InlineContainer, ImageLogo} from '../style/Entry.js';

export default function Login() {

    const navigate = useNavigate();
    const [loginError, setLoginError] = useState("");


    return (
        <>
             <GlobalStyles />

            <ImageLogo></ImageLogo>
            <Container>
                {loginError && <div className="error">{loginError}</div>}
                <Formik initialValues={{
                    email: "",
                    password: ""
                }} validationSchema={Yup.object({
                    email: Yup.string()
                        .required("Obrigatório"),
                    password: Yup.string()
                        .required("Obrigatório")
                })}

                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            const result = await serviceLogin(values.email, values.password);
                            if (result.token) {
                                return navigate("/photos");
                            }
                        } catch (error) {
                            setLoginError(error.message);
                        } finally {
                            setSubmitting(false);
                        }
                    }}>

                    <Form>
                        <TextInput
                            name="email"
                            type="email"
                            placeholder="Digite seu email"
                        />
                        <TextInput
                            name="password"
                            type="password"
                            placeholder="Digite sua senha"
                        />
                        <ButtonEntry type="submit">Login</ButtonEntry>
                        <InlineContainer>
                            <StyleP>Ainda não tem uma conta?</StyleP><StyleLink href='/register'>Registre-se</StyleLink>
                        </InlineContainer>
                    </Form>
                </Formik>
            </Container>
        </>
    )
}