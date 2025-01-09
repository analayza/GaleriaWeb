import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../components/TextInput';
import serviceLogin from '../service/Login.js';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { GlobalStyles} from '../style/Entry.js';

export default function Login() {

    const navigate = useNavigate();
    const [loginError, setLoginError] = useState("");

    return (
        <>
             <GlobalStyles />
            <h1>
                Login
            </h1>
            <div>
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
                        <button type="submit">Login</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}