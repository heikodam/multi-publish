const immowelt = {

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
    
    title: {
        name: 'title',
        elementType: 'input',
        elementConfig: {
            type: 'email',
            placeholder: 'Nice Title'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
    description: {
        name: 'description',
        elementType: 'textarea',
        elementConfig: {
            type: 'text',
            placeholder: 'Your detailed description of your ad...'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    }
    
}


export default immowelt;