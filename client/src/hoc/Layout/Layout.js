import React from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';



const layout = (props) => {

    return (
        <Aux>
            <Toolbar />
            <main>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;