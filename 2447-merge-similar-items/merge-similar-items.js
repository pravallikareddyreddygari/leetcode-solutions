var mergeSimilarItems = function (items1, items2) {
    cl = console.log;

    let item_Val_SumWei = {};

    for (let [v, w] of items1) {
        item_Val_SumWei[v] = (item_Val_SumWei[v] ?? 0) + w;
    }
    for (let [v, w] of items2) {
        item_Val_SumWei[v] = (item_Val_SumWei[v] ?? 0) + w;
    }

    let a = Object.entries(item_Val_SumWei);
    a = a.map(([v, sw]) => [+v, sw]);
    return a;
};