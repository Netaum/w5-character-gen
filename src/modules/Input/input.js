import React from 'react';
import { SheetContext } from '../Context/context';
import './input.css';

class Input extends React.Component {

    static contextType = SheetContext;

    constructor(props) {
        super(props);
        const size = props.size;
        this.name = props.name;
        this.size = isNaN(size) ? 120 : size;
    }

    onChangeHandler = (event) => {
        this.context.updateHeader(this.context, this.name, event.target.value);
    }

    render() {
        const value = this.context.headers[this.name];
        return (
            <div>
                <input type='text' style={{width: this.size + 'px'}} value={value} onChange={this.onChangeHandler} />
            </div>
        );
    }
}

export default Input;
