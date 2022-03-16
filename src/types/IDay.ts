
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
    start: string,
    end: string,
    duration: string,
    date: string
    user: {
        username: string,
        email:string,
        phone: string
    }
}