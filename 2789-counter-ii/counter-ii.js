var createCounter = function (init) {
    let value = init;

    return {
        increment: () => ++value,
        reset: () => (value = init),
        decrement: () => --value
    };
}