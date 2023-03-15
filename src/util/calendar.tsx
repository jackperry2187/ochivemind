
export type Day = {
    date: string; //date in YYYY-MM-DD format
    day: string; // day of the week
    x: number; // a row 1-6 where 1 is the first row of the calendar
    y: number; // a column 0-6 where 0 is the first column of the calendar which represents Sunday
}

export type Month = {
    name: string;
    year: number;
    days: Day[]; // 28-31 days
}

export type FormattedMonth = {
    name: string;
    year: number;
    days: (Day | undefined)[][]; 
}

export const formatMonth = (month: number): string => {
    if(month < 10) {
        return `0${month}`;
    }
    return `${month}`;
}

export const formatDay = (day: number): string => {
    if(day < 10) {
        return `0${day}`;
    }
    return `${day}`;
}

export const generateCalendarMonth = (givenMonth?: number, givenYear?: number): Month => {
    const date = new Date();
    const month = givenMonth === undefined ? date.getMonth() : givenMonth;
    const year = givenYear || date.getFullYear();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: Day[] = [];
    let x = 1;
    let y = firstDay.getDay();
    for(let i = 1; i <= lastDay.getDate(); i++) {
        days.push({
            date: `${year}-${formatMonth(month + 1)}-${formatDay(i)}`,
            day: (new Date(year, month, i)).toLocaleString('default', { weekday: 'long' }),
            x,
            y,
        });
        y++;
        if(y > 6) {
            y = 0;
            x++;
        }
    }
    return {
        name: firstDay.toLocaleString('default', { month: 'long' }),
        year,
        days,
    };
}

export const generateFormattedMonth = (givenMonth?: number, givenYear?: number): FormattedMonth => {
    const calendarMonth = generateCalendarMonth(givenMonth, givenYear);
    const table: (Day | undefined)[][] = [];
    for(let i = 0; i < calendarMonth.days.length; i++) {
        const day = calendarMonth.days[i];
        if(!table[day.x]) {
            table[day.x] = [];
        }
        table[day.x][day.y] = day;
    }

    for(let i = 1; i < 7; i++) {
        if(!table[i]) {
            table[i] = [];
        }
        const row = table[i];
        for(let j = 0; j < 7; j++) {
            if(!row[j]) {
                row[j] = undefined;
            }
        }
    }

    return {
        name: calendarMonth.name,
        year: calendarMonth.year,
        days: table,
    }
}

export const convertTimeTo24Hour = (time: string) : string => {
    const hours = time.substring(0, 2);
    const minutes = time.substring(3, 5);
    const isPm = time.includes('pm');
    if(isPm) {
        if(hours === '12') {
            return `12:${minutes}`;
        }
        return `${parseInt(hours.replace('pm', '')) + 12}:${minutes}`;
    }
    return `${hours}:${minutes}`;
}

export const compareTimes = (time1: string, time2: string) : number => {
    const convertedTime1 = convertTimeTo24Hour(time1)
    const convertedTime2 = convertTimeTo24Hour(time2)
    
    if(convertedTime1 < convertedTime2) {
        return -1;
    }
    return 1;
}