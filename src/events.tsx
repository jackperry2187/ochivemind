export type EventFormat = 'Pioneer' | 'Modern' | 'Pauper';
export type EventType = 'RCQ' | 'MTGO' | 'WEEKLY' | 'OTHER';

export type Event = {
    format: EventFormat;
    type: EventType;
    date: string;
    time: string;
    location: string;
    name: string;
    link: string;
}

export const exampleEvents: Event[] = [
    {
        format: 'Modern',
        type: 'WEEKLY',
        date: 'Friday',
        time: '7:00pm',
        location: 'ECG',
        name: 'FNM Modern @ ECG',
        link: 'https://www.facebook.com/EastCoastGamersNJ/',
    },
    {
        format: 'Pauper',
        type: 'WEEKLY',
        date: 'Saturday',
        time: '4:00pm',
        location: 'ECG',
        name: 'Saturday Pauper @ ECG',
        link: 'https://www.facebook.com/EastCoastGamersNJ/',
    },
    {
        format: 'Pioneer',
        type: 'WEEKLY',
        date: 'Tuesday',
        time: '6:30pm',
        location: 'Nova Games',
        name: 'Tuesday Pioneer @ Nova Games',
        link: 'https://www.facebook.com/NovaGamesBrick/',
    },
    {
        format: 'Modern',
        type: 'WEEKLY',
        date: 'Thursday',
        time: '6:30pm',
        location: 'Nova Games',
        name: 'Thursday Modern @ Nova Games',
        link: 'https://www.facebook.com/NovaGamesBrick/',
    },
    {
        format: 'Pauper',
        type: 'WEEKLY',
        date: 'Friday',
        time: '7:00pm',
        location: 'Nova Games',
        name: 'Friday Pauper @ Nova Games',
        link: 'https://www.facebook.com/NovaGamesBrick/',
    },
    {
        format: 'Modern',
        type: 'WEEKLY',
        date: 'Wednesday',
        time: '6:00pm',
        location: 'The Keep',
        name: 'Wednesday Modern @ The Keep',
        link: 'https://www.thekeephobby.com/events',
    },
    {
        format: 'Modern',
        type: 'RCQ',
        date: '2023-03-18',
        time: '12:00pm',
        location: 'The Bearded Dragon Games',
        name: '2-Slot Modern Regional Championship Qualifier',
        link: 'https://thebeardeddragongames.crystalcommerce.com/Magic%20Events',
    },
    {
        format: 'Modern',
        type: 'RCQ',
        date: '2023-03-25',
        time: '12:00pm',
        location: 'Alternate Universes - Holmes',
        name: '2-Slot Modern Regional Championship Qualifier',
        link: 'https://alternateu.com/special-events/',
    }
]

        