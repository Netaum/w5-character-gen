export class Trait {
    constructor(group,
        initialValue = 0,
        id = 'id',
        xpMultiplier = 5,
        maxValue = 5) {
        this.group = group;
        this.initialValue = initialValue;
        this.value = initialValue;
        this.id = id;
        this.xpMultiplier = xpMultiplier;
        this.notifier = null;
        this.maxValue = maxValue;
    }

    setNotifier(notifier) {
        this.notifier = notifier;
    }

    notifyError(error) {
        if (this.notifier !== null)
            this.notifier(error);
    }

    changeValue(newValue, allow=false) {
        
        if (newValue === this.value)
            newValue -= 1;

        if (newValue < this.initialValue)
            newValue = this.initialValue;

        if (this.group.check(this.id, newValue, allow))
            this.setValue(newValue);
        else
            this.notifyError('Invalid trait value');
    }

    setValue(newValue) {
        this.value = newValue;
    }

    expendXP(xpValue) {
        if (xpValue < 0) {
            this.notifyError('Invalid xp value');
            return xpValue;
        }

        const required = (this.value + 1) * this.xpMultiplier;
        if (required > xpValue) {
            this.notifyError('Not enough xp');
            return xpValue;
        }

        this.value += 1;

        return xpValue - required;
    }
}

export default Trait;