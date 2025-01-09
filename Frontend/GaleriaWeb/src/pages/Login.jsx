import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../components/TextInput';

export default function Login(){
    return(
        <>
            <h1>
                Login
            </h1>
            <div>
                <Formik  initialValues={{
                    email: "",
                    password: ""
                }} validationSchema={Yup.object({
                    email: Yup.string()
                    .required("Obrigatório"),
                    password: Yup.string()
                    .required("Obrigatório")
                })} onSubmit={async () => {

                }}>
                    <Form>
                        <TextInput
                            label="Email"
                            name= "email"
                            type= "email"
                            password= "Digite seu email" 
                        />
                        <TextInput
                            label="Senha"
                            name= "password"
                            type= "password"
                            password= "Digite sua senha" 
                        />
                        <button type="submit">Login</button>
                    </Form> 
                </Formik>
            </div>
        </>
    )
}