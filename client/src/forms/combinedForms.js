import { updateObject } from '../shared/utility';
import formInputTemplate from './formInputTemplate';

import immowelt from './singleForms/immowelt';
import ebayKleinanzeige from './singleForms/ebay-kleinanzeige';


const updateInput = (form) => {

    const updatedInput = {}

    for(let key in form) {
        updatedInput[key] = updateObject(formInputTemplate, form[key]);
        updatedInput[key].elConfig = updateObject(formInputTemplate.elConfig, form[key].elConfig)
        }
    return updatedInput;
}

var combinedForms = {}
combinedForms = updateObject(combinedForms, updateInput(ebayKleinanzeige));
combinedForms = updateObject(combinedForms, updateInput(immowelt));


export default combinedForms;