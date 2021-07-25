import { useState, useEffect } from 'react';

function isSetValueAction(next) {
    if (typeof next === 'function') {
        return true;
    }
    return false;
}
function createStore(initialValue, option) {
    var key = (option === null || option === void 0 ? void 0 : option.key) || "store-" + Math.random();
    var getValueHook = option === null || option === void 0 ? void 0 : option.getValueHook;
    var setValueHook = option === null || option === void 0 ? void 0 : option.setValueHook;
    var value = initialValue;
    var onValueSet = new Set();
    function setValue(next) {
        var nextValue = value;
        if (isSetValueAction(next)) {
            nextValue = next(value);
        }
        else {
            nextValue = next;
        }
        if (setValueHook !== undefined) {
            nextValue = setValueHook(nextValue, key);
        }
        value = nextValue;
        onValueSet.forEach(function (onValue) { return onValue(); });
    }
    function getValue() {
        var nextValue = getValueHook !== undefined ? getValueHook(value, key) : value;
        return nextValue;
    }
    function subscribe(onValue) {
        onValueSet.add(onValue);
        function unsubscribe() {
            if (onValueSet.has(onValue)) {
                onValueSet.delete(onValue);
            }
        }
        return unsubscribe;
    }
    function useValue() {
        var _a = useState(value), state = _a[0], setState = _a[1];
        useEffect(function () {
            function onValue() {
                var nextState = getValue();
                setState(nextState);
            }
            var unsubscribe = subscribe(onValue);
            return unsubscribe;
        }, []);
        return state;
    }
    return [useValue, setValue, getValue];
}

export { createStore };
