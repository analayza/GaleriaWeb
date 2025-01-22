import {useField} from 'formik';
import {Input, StyledErrorMessageGlobal} from '../style/TextInputGlobal.js';

export default function TextInputGlobal({ ...props}){
    const [field, meta] = useField(props);

    return(
        <>  
            <div  style={{ display: 'flex', flexDirection: 'column', marginBottom: '4px' }}>
            <Input {...field} {...props}></Input>
            {meta.touched && meta.error ? (
                <StyledErrorMessageGlobal>{meta.error}</StyledErrorMessageGlobal>
            ) : null}
            </div>
            
        </>
    )
}