export const orderElements = (array) => {
    array.sort((a, b) => a.order - b.order);
    return array
}