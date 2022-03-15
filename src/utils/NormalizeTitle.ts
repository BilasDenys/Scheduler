export const NormalizeTitle = ( value: string | number ) => {

    return Number(value) < 10 ? '0' + value : value;

}