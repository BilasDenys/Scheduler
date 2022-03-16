
export interface IDay {
    clickedDay: number;
    value: number | null;
    current: boolean;
    padding: boolean;
    active: boolean;
    date: string;
    events: any[];
}

export interface IEvent {

    start: string
    end: string,
    duration: number,
    description: string,
    date: string,
    author: string,
    phone: string,
    training: string

}
