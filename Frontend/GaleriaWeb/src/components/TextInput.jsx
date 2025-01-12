import {useField} from 'formik';
import {Input, StyledErrorMessage} from '../style/TextInput.js';

export default function TextInput({ ...props}){
    const [field, meta] = useField(props);

    return(
        <>
            <Input {...field} {...props}></Input>
            {meta.touched && meta.error ? (
                <StyledErrorMessage>{meta.error}</StyledErrorMessage>
            ) : null}
        </>
    )
}