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
const BASE_HEALTH = 3;
const ATTRIBUTES = ['str', 'dex', 'sta', 'int', 'wit', 'res', 'cha', 'man', 'com'];
const EXPENDABLES = ['health', 'willpower'];
const EXPENDABLES_STARTING_VALUES = {'health': BASE_HEALTH + 1, 'willpower': 2};

export const SheetState = {
    attributes: new Group(ATTRIBUTES, 'attributes', 'attributes', 1, 5, 5, null, ATT_LIMITS),
    expendables: new Group(EXPENDABLES, 'expendables', 'expendables', 1, 5, 10, EXPENDABLES_STARTING_VALUES, null),
    headers : {
        "name": "",
        "concept": "",
        "chronicle": "",
        "tribe": "",
        "auspice": "",
        "patron": "",
    },
    updateTrait: updateTrait,
    updateHeader: updateHeader,
}

export const SheetContext = createContext(SheetState);

function updateTrait(state, type, traitId, newValue) {
    const trait = state[type].traits[traitId];
    trait.changeValue(newValue, true);
    state.update(state);
    const resolve = state['attributes'].traits['res'].value;
    const composure = state['attributes'].traits['com'].value;
    const stamina = state['attributes'].traits['sta'].value;
    state['expendables'].traits['willpower'].setValue(resolve + composure);
    state['expendables'].traits['health'].setValue(stamina + BASE_HEALTH);
    state.update(state);
}

function updateHeader (state, header, value) {
    state.headers[header] = value;
    state.update(state);
}

