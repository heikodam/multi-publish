const immowelt = {

    bedrooms: {
        name: 'bedrooms',
        elConfig: {
            type: 'number',
            placeholder: 'How many Bedrooms'
        },
        validation: {
            required: true
        }
    },
    description: {
        name: 'description',
        elType: 'textarea',
        elConfig: {
            type: 'textarea',
            placeholder: 'Your detailed description of your ad...'
        }
    }
    
}


export default immowelt;