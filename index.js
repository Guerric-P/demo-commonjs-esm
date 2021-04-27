function isFalsy(value) {
    return !value;
}

function isTruthy(value) {
    return !!value;
}

function arrayize(value) {
    return value instanceof Array ? value : [value];
}

module.exports= {
    isFalsy,
    isTruthy,
    arrayize
}