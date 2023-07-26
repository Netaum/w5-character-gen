import Trait from './trait.js';

export class Group {
    constructor (traitIds,
                 id = 'id',
                 type = 'attributes',
                 initialValue = 0,
                 xpMultiplier = 5,
                 maxValue = 5,
                 limits)
    {
        this.traits = Object.fromEntries(
            traitIds.map(traitId => [traitId, new Trait(this, initialValue, traitId, xpMultiplier, maxValue)])
        );
        
        this.id = id;
        this.type = type;

        if(!limits)
            return;

        const limitsCopy = { ...limits };

        const keys = Object.keys(limitsCopy).sort().reverse();
        let acc = 0;
        keys.forEach(k => {
            let newAcc = acc + limitsCopy[k];
            limitsCopy[k] = newAcc;
            acc = newAcc;
        });
       
        this.limits = limitsCopy;
    }

    check(traitId, newValue, allow=false) {
        if (allow)
            return true;
            
        let value = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        
        for (const key in this.traits) {
            if (key === traitId)
                continue;
            value[this.traits[key].value] += 1;
        }

        value[newValue] += 1;

        for (const key in value) {
            if (value[key] > this.limits[key])
                return false;
        }

        return true;
    }
}

export default Group;