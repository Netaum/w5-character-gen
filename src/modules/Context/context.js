import { createContext } from 'react';
import Group from '../Controls/group';

const ATT_LIMITS = 
{
    "5": 0,
    "4": 1,
    "3": 3,
    "2": 4,
    "1": 1
}

const ATTRIBUTES = ['str', 'dex', 'sta', 'int', 'wit', 'res', 'cha', 'man', 'com'];

export const SheetState = {
    name: 'Neto',
    attributes: new Group(ATTRIBUTES, 'attributes', 'attributes', 1, 5, ATT_LIMITS),
    headers : {
        "name": "",
        "concept": "",
        "chronicle": "",
        "tribe": "",
        "auspice": "",
        "patron": "",
    },
    updateAttribute: updateAttribute,
    updateHeader: updateHeader
}

export const SheetContext = createContext(SheetState);

function updateAttribute(state, traitId, newValue) {
    state.attributes[traitId].changeValue(newValue);
    state.update(state);
}

function updateHeader (state, header, value) {
    state.headers[header] = value;
    state.update(state);
}

