import React from "react";
import './fill.css';
import { SheetContext } from '../Context/context';

function createArray(array, value) {
    for(let i = 0; i < array.length; i++) {
        if (i < value)
            array[i] = true;
        else array[i] = false;
    }
    return array;
}

class Fill extends React.Component {
    
    static contextType = SheetContext;

    constructor(props) {
        
        super(props);
        
        this.traitId = props.traitId;
        this.type = props.type;

        if (props.shape === "circle") {
            this.fillChar = "e";
            this.emptyChar = "d";
        } else {
            this.fillChar = "a";
            this.emptyChar = "f";
        }
    }

    item(index, value) {
        return (
            <span 
                key={index} 
                vl={index+1} 
                onClick={() => this.handleClick(index + 1)}>
                    {value ? this.fillChar : this.emptyChar}
            </span>
        );
    }

    handleClick(value) {
        const trait = this.context[this.type].traits[this.traitId];
        trait.changeValue(value, true);
        this.context.update(this.context);
    }

    render() {
        const trait = this.context[this.type].traits[this.traitId];
        const fill = createArray(Array(trait.maxValue), trait.value);
        console.log(this.context);
        return (
            <div>
                <span id="1" className="wod wod-attribute">
                    {fill.map((value, index) => (this.item(index, value)))}
                </span>
            </div>
        );
    }
}

export default Fill;