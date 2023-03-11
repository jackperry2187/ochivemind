export type EventFormat = 'Pioneer' | 'Modern' | 'Pauper';
export type EventType = 'RCQ' | 'MTGO' | 'WEEKLY';

export type Event = {
    format: EventFormat;
    type: EventType;
    date: string;
    location: string;
    name: string;
    link: string;
}

export const exampleEvents: Event[] = [
    {
        format: 'Pioneer',
        type: 'RCQ',
        date: '2020-10-10',
        location: 'Nova Games',
        name: 'Pioneer Regional Championship Qualifier',
        link: 'https://www.novagames.com.au/events/pioneer-regional-championship-qualifier-2020-10-10'
    },
    {
        format: 'Modern',
        type: 'MTGO',
        date: '2020-10-10',
        location: 'MTGO',
        name: 'Modern Preliminary Qualifier',
        link: 'https://magic.wizards.com/en/articles/archive/mtgo-standings/modern-preliminary-2020-10-10'
    },
]

        