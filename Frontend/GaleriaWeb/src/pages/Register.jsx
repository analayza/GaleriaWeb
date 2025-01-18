import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../components/TextInput';
import serviceRegister from '../service/Register.js';
import * as Styles from '../style/Entry.js';
import { useNavigate } from "react-router-dom";

export default function Register() {

    
    const navigate = useNavigate();
    
    return (
        <>
            <Styles.GlobalStyles></Styles.GlobalStyles>

            <h1 style={{ marginBottom: '40px', color:'white' }}>Cadastro</h1>

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

                onSubmit={async (values, {setSubmitting}) => {
                    await serviceRegister(values.email, values.password, values.name);
                    setSubmitting(false);
                    return navigate("/");
                }}
            >

                <Form>
                    <TextInput
                        name="name"
                        type="text"
                        placeholder="Digite seu nome"
                    />
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
                    <Styles.ButtonEntry type="submit">Cadastrar</Styles.ButtonEntry>
                </Form>
            </Formik>
        </>
    )
}