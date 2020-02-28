const ebayKleinanzeige = {
    name: {
        name: 'name',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your Name'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    
    email: {
        name: 'email',
        elementType: 'input',
        elementConfig: {
            type: 'email',
            placeholder: 'Your email'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    }
}


export default ebayKleinanzeige;