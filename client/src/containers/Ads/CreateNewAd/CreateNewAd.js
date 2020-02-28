import React from 'react';

import Input from '../../../components/UI/Input/Input';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

import combinedForms from '../../../forms/combinedForms';

const createNewAd = () => {

    let formElArray = [];
    for (let key in combinedForms){
        formElArray.push(combinedForms[key])
    }
    console.log(formElArray);
    let form = formElArray.map(formEl => (
        <Input
            key={formEl.name}
            elementType = {formEl.elementType}
            elementConfig = {formEl.elementConfig}
        />
    ));

    return (

        <Aux>
            <h3> Create a New Ad here</h3>

            <form>
                {form}
            </form>
        </Aux>

    );
}

export default createNewAd;