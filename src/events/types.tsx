export type EventFormat = 'Pioneer' | 'Modern' | 'Pauper';
export type EventType = 'RCQ' | 'MTGO' | 'MTGO WEEKLY' | 'WEEKLY' | 'OTHER';

export type Event = {
    format: EventFormat;
    type: EventType;
    date: string;
    time: string;
    location: string;
    name: string;
    link: string;
}