import React, { useCallback, useMemo } from "react";
import { Button, ListGroup, Table } from "react-bootstrap";
import { Event } from '../events/types';
import { compareTimes, generateFormattedMonth } from "../util/calendar";
import '../styles/EventsCalendar.css'

type EventsCalendarProps = {
    events: Event[];
}

export const EventsCalendar: React.FC<EventsCalendarProps> = ({ events }) => {
    const [givenMonth, setGivenMonth] = React.useState<number>(new Date().getMonth());
    const [givenYear, setGivenYear] = React.useState<number>(new Date().getFullYear());

    const formattedMonth = useMemo(() => generateFormattedMonth(givenMonth, givenYear), [givenMonth, givenYear]);
    
    const addOneToMonth = useCallback(() => {
        if (givenMonth === 11) {
            setGivenMonth(0);
            setGivenYear(givenYear + 1);
        } else {
            setGivenMonth(givenMonth + 1);
        }
    }, [setGivenMonth, setGivenYear, givenMonth, givenYear]);

    const subtractOneFromMonth = useCallback(() => {
        console.log(givenMonth, `subtracting to ${givenMonth - 1}`);
        if (givenMonth === 0) {
            setGivenMonth(11);
            setGivenYear(givenYear - 1);
        } else {
            setGivenMonth(givenMonth - 1);
        }
    }, [setGivenMonth, setGivenYear, givenMonth, givenYear]);

    return (
        <div className="border border-white">
            <Table responsive bordered variant="dark" className="border border-secondary mb-0">
                <thead>
                    <tr>
                        <th colSpan={7}>
                            <Button variant='dark' onClick={subtractOneFromMonth}>&lt;</Button>
                            {formattedMonth.name} {formattedMonth.year}
                            <Button variant='dark' onClick={addOneToMonth}>&gt;</Button>
                        </th>
                    </tr>
                    <tr>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    {[1,2,3,4,5,6].map((row) => {
                        if(formattedMonth.days[row].every(day => day === undefined)) return null;
                        return <tr key={row}>
                            {formattedMonth.days[row].map((day, index) => {
                                const eventsMatchingDay = events.filter(event => event.date === day?.date || event.date === day?.day);
                                eventsMatchingDay.sort((a, b) => compareTimes(a.time, b.time));
                                const today = new Date();
                                const dayOfEvent = day ? new Date(day.date) : undefined;
                                const isToday = dayOfEvent?.getDate() === today.getDate() - 1 && dayOfEvent?.getMonth() === today.getMonth() && dayOfEvent?.getFullYear() === today.getFullYear();

                                return <td key={`${row}-${index}`} className={`td-calendar ${isToday && 'today'}`}>
                                    <h6 className='text-decoration-underline'>{day?.date.split('-')[2]}</h6>
                                    <ListGroup variant='flush'>
                                        {eventsMatchingDay.map((event, index) => 
                                            <ListGroup.Item className='bg-gone' key={`${row}-${index}`}>
                                                {event.time} - {event.name} {event.location === 'MTGO' && 'on MTGO'} {event.type === 'RCQ' && `at ${event.location}`}
                                            </ListGroup.Item>)}
                                    </ListGroup>
                                </td>
                            })}
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    )
}