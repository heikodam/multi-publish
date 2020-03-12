import React, { useState } from 'react';

import axios from '../../../axios';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import combinedForms from '../../../forms/combinedForms';
import {updateObject} from '../../../shared/utility';

const CreateNewAd = props => {

    const [adData, setAdData] = useState(combinedForms);
    const [isSending, setIsSending] = useState(false)

    const inputChangeHandler = (event, formElName) => {
        const updatedFormElement = updateObject(adData[formElName], {value: event.target.value})
        const updatedAdData = updateObject(adData, {[formElName]: updatedFormElement});
        setAdData(updateObject(updatedAdData))
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setIsSending(true);
        var adDataToSave =  {};
        for(var el in adData){
            var value = {[el]: adData[el].value}
            adDataToSave = updateObject(adDataToSave, value)
        }
        axios.post('/create-ad', {adDataToSave})
        .then((res) => {
            console.log("Sucessfully return")
            console.log(res)
            setIsSending(false)
        })
        .catch((err) => {
            console.log(err)
            setIsSending(false)
        })

        console.log(adDataToSave)

        setAdData(combinedForms)
    }

    // Creating the Form
    let formElArray = [];
    for (let key in adData){
        formElArray.push(adData[key])
    }
    let form = formElArray.map(formEl => (
        <Input
            key={formEl.name}
            elType = {formEl.elType}
            elConfig = {formEl.elConfig}
            value = {formEl.value}
            changed = {(event) => inputChangeHandler(event, formEl.name)}
        />
    ));

    return (

        <React.Fragment>
            <h3> Create a New Ad here</h3>

            <form onSubmit={onSubmitHandler}>
                {form}
            <Button btnType="Success">Publish Ad</Button>
            </form>
        </React.Fragment>

    );
}

export default CreateNewAd;