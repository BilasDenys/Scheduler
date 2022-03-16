export const CapitalLater = ( element: string ) => {
    const firstLater =  element.split('')[0].toUpperCase();
    const lastLater = element.split('')[1];
    return firstLater + lastLater;
}