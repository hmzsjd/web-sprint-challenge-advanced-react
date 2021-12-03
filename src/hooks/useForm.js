// write your custom hook here to control your checkout form

import { useState} from "react";

const useForm = (initialValue) => {


    const [values, setValues] = useState(initialValue);

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setShowSuccessMessage(true);
    }

    const handleChanges = (evt) => {
        setValues({...values, [evt.target.name]: evt.target.value})
    }

    return (
        [values, showSuccessMessage, handleSubmit, handleChanges]
        );
}

export default useForm;