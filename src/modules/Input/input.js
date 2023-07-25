import React from 'react';
import { SheetContext } from '../Context/context';
import './input.css';

class Input extends React.Component {

    static contextType = SheetContext;

    constructor(props) {
        super(props);
        this.label = props.name;
        const size = props.size;

        this.size = isNaN(size) ? 120 : size;
    }



    render() {
        return (
            <div>
                <span>{this.label}</span>
                <input type='text' style={{width: this.size + 'px'}}  />
            </div>
        );
    }
}

export default Input;
