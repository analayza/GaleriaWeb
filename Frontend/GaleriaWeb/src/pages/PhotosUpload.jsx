import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import servicePhotosUpload from "../service/PhotosUpload.js";
import TextInput from '../components/TextInput';
import { ButtonEntry, GlobalStyles } from '../style/Entry.js';

export default function PhotosUpload() {

    const navigate = useNavigate();

    return (
        <>
            <GlobalStyles />
            <Formik
                initialValues={{
                    //userId: "",
                    photo: null
                }} validationSchema={Yup.object({
                    // userId: Yup.string()
                    //     .required("O ID do usuário é Obrigatório"),
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
                    // const resul = await servicePhotosUpload(values.userId, values.photo);
                    // console.log(resul)
                    // setSubmitting(false);
                    const formData = new FormData();
                    formData.append("userId", values.userId);
                    formData.append("photo", values.photo);

                    try {
                        const resul = await servicePhotosUpload(formData); 
                        console.log(resul);
                    } catch (error) {
                        console.error(error.message);
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ setFieldValue }) => (
                    <Form>
                    {/* <TextInput
                        name="userId"
                        type="text"
                        placeholder="Digite o Id"
                    /> */}
                    <div>
                        <label htmlFor="photo">Selecione uma Foto</label>
                        <input
                            id="photo"
                            name="photo"
                            type="file"
                            accept="image/jpeg,image/jpg,image/png"
                            onChange={(event) => {
                                const file = event.target.files[0];
                                setFieldValue("photo", file);
                            }}
                        />
                    </div>
                    <ButtonEntry type="submit">Enviar</ButtonEntry>
                </Form>
                )}
                
            </Formik>
        </>

    )
}