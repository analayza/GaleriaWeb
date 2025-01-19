import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import servicePhotosUpload from "../service/PhotosUpload.js";
import { GlobalStyles } from '../style/GlobalStyle.js';
import { Div, LabelDiv, LabelDivButton, ButtonDiv } from '../style/PhotosUpload.js';
import { useState } from 'react';
import Menu from '../components/Menu.jsx';

export default function PhotosUpload() {

    const [fileName, setFileName] = useState("");
    const [message, setMessage] = useState("");
  


    return (
        <>
            <GlobalStyles />
            <Menu />
            <Formik
                initialValues={{
                    photo: null
                }} validationSchema={Yup.object({
                    photo: Yup.mixed()
                        .required("A foto é Obrigatória")
                        .test(
                            "fileType",
                            "Apenas Aquivos JPEG, JPG ou PNG são permitidos",
                            (value) => {
                                if (!value) return false;
                                const supportedFormats = ["image/jpeg", "image/jpg", "image/png"];
                                return supportedFormats.includes(value.type);
                            }
                        )
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    const formData = new FormData();
                    formData.append("userId", values.userId);
                    formData.append("photo", values.photo);

                    try {
                        setMessage("Foto Enviada")
                        const resul = await servicePhotosUpload(formData);
                        console.log(resul);
                        setMessage(""); 
                    } catch (error) {
                        console.error(error.message);
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ setFieldValue }) => (
                    <Form>
                        <Div>
                            <LabelDiv>Selecione uma Foto</LabelDiv>
                            <input
                                id="photo"
                                name="photo"
                                type="file"
                                accept="image/jpeg,image/jpg,image/png"
                                onChange={(event) => {
                                    const file = event.target.files[0];
                                    setFileName(file.name);
                                    setFieldValue("photo", file);
                                    setMessage("");
                                }}
                                style={{ display: 'none' }}
                            />
                            <LabelDivButton htmlFor='photo'>
                                Escolher foto
                            </LabelDivButton>
                            {fileName && <p>Arquivo selecionado: {fileName}</p>}
                        </Div>
                        <ButtonDiv type="submit">Enviar</ButtonDiv>
                        {message && <p style={{color: 'black', marginLeft: '250px', marginTop: '20px'}}>{message}</p>}
                    </Form>
                )}

            </Formik>
        </>

    )
}