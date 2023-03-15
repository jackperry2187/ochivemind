import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { EventFormat, EventType, Event } from "../events/types";

export type DayType = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
type TimeType = 'Previous' | 'Upcoming';

export const isDay = (day: string): day is DayType => {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].includes(day);
}

type EventFiltersProps = {
    events: Event[];
    onFilterChange: (events: Event[]) => void;
}

export const EventFilters: React.FC<EventFiltersProps> = ({ events, onFilterChange }) => {
    const [localEvents] = useState<Event[]>(events);
    const [eventFormat, setEventFormat] = useState<Set<EventFormat>>(new Set());
    const [eventType, setEventType] = useState<Set<EventType>>(new Set());
    const [day, setDay] = useState<Set<DayType>>(new Set());
    const [eventTime, setEventTime] = useState<Set<TimeType>>(new Set());

    const onClickReset = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        setEventFormat(new Set());
        setEventType(new Set());
        setDay(new Set());
        setEventTime(new Set());
    }, []);

    const onClickPioneer = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        const localEventFormat = new Set(eventFormat);
        if(eventFormat.has('Pioneer')) {
            localEventFormat.delete('Pioneer');
        } else {
            localEventFormat.add('Pioneer');
        }
        setEventFormat(localEventFormat);
    }, [eventFormat, setEventFormat]);

    const onClickModern = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        const localEventFormat = new Set(eventFormat);
        if(eventFormat.has('Modern')) {
            localEventFormat.delete('Modern');
        } else {
            localEventFormat.add('Modern');
        }
        setEventFormat(localEventFormat);
    }, [eventFormat, setEventFormat]);

    const onClickPauper = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        const localEventFormat = new Set(eventFormat);
        if(eventFormat.has('Pauper')) {
            localEventFormat.delete('Pauper');
        } else {
            localEventFormat.add('Pauper');
        }
        setEventFormat(localEventFormat);
    }, [eventFormat, setEventFormat]);

    const onClickRCQ = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        const localEventType = new Set(eventType);
        if(eventType.has('RCQ')) {
            localEventType.delete('RCQ');
        } else {
            localEventType.add('RCQ');
        }
        setEventType(localEventType);
    }, [eventType, setEventType]);

    const onClickMTGO = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        const localEventType = new Set(eventType);
        if(eventType.has('MTGO')) {
            localEventType.delete('MTGO');
        } else {
            localEventType.add('MTGO');
        }
        setEventType(localEventType);
    }, [eventType, setEventType]);

    const onClickMTGOWeekly = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        const localEventType = new Set(eventType);
        if(eventType.has('MTGO WEEKLY')) {
            localEventType.delete('MTGO WEEKLY');
        } else {
            localEventType.add('MTGO WEEKLY');
        }
        setEventType(localEventType);
    }, [eventType, setEventType]);

    const onClickWeekly = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        const localEventType = new Set(eventType);
        if(eventType.has('WEEKLY')) {
            localEventType.delete('WEEKLY');
        } else {
            localEventType.add('WEEKLY');
        }
        setEventType(localEventType);
    }, [eventType, setEventType]);

    const onClickOther = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        const localEventType = new Set(eventType);
        if(eventType.has('OTHER')) {
            localEventType.delete('OTHER');
        } else {
            localEventType.add('OTHER');
        }
        setEventType(localEventType);
    }, [eventType, setEventType]);

    const onClickMonday = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        const localDay = new Set(day);
        if(day.has('Monday')) {
            localDay.delete('Monday');
        } else {
            localDay.add('Monday');
            setEventType(eventType.add('MTGO WEEKLY').add('WEEKLY'));
        }
        setDay(localDay);
    }, [day, setDay, setEventType, eventType]);

    const onClickTuesday = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        const localDay = new Set(day);
        if(day.has('Tuesday')) {
            localDay.delete('Tuesday');
        } else {
            localDay.add('Tuesday');
            setEventType(eventType.add('MTGO WEEKLY').add('WEEKLY'));
        }
        setDay(localDay);
    }, [day, setDay, setEventType, eventType]);

    const onClickWednesday = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        const localDay = new Set(day);
        if(day.has('Wednesday')) {
            localDay.delete('Wednesday');
        } else {
            localDay.add('Wednesday');
            setEventType(eventType.add('MTGO WEEKLY').add('WEEKLY'));
        }
        setDay(localDay);
    }, [day, setDay, setEventType, eventType]);

    const onClickThursday = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        const localDay = new Set(day);
        if(day.has('Thursday')) {
            localDay.delete('Thursday');
        } else {
            localDay.add('Thursday');
            setEventType(eventType.add('MTGO WEEKLY').add('WEEKLY'));
        }
        setDay(localDay);
    }, [day, setDay, setEventType, eventType]);

    const onClickFriday = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        const localDay = new Set(day);
        if(day.has('Friday')) {
            localDay.delete('Friday');
        } else {
            localDay.add('Friday');
            setEventType(eventType.add('MTGO WEEKLY').add('WEEKLY'));
        }
        setDay(localDay);
    }, [day, setDay, setEventType, eventType]);

    const onClickSaturday = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        const localDay = new Set(day);
        if(day.has('Saturday')) {
            localDay.delete('Saturday');
        } else {
            localDay.add('Saturday');
            setEventType(eventType.add('MTGO WEEKLY').add('WEEKLY'));
        }
        setDay(localDay);
    }, [day, setDay, setEventType, eventType]);

    const onClickSunday = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        const localDay = new Set(day);
        if(day.has('Sunday')) {
            localDay.delete('Sunday');
        } else {
            localDay.add('Sunday');
            setEventType(eventType.add('MTGO WEEKLY').add('WEEKLY'));
        }
        setDay(localDay);
    }, [day, setDay, setEventType, eventType]);

    const onClickPrevious = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        const localEventTime = new Set(eventTime);
        if(eventTime.has('Previous')) {
            localEventTime.delete('Previous');
        } else {
            localEventTime.add('Previous');
            localEventTime.delete('Upcoming');
            setEventType((new Set<EventType>()).add('RCQ').add('OTHER').add('MTGO'));
        }
        setEventTime(localEventTime);
    }, [eventTime, setEventTime, setEventType]);

    const onClickUpcoming = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        const localEventTime = new Set(eventTime);
        if(eventTime.has('Upcoming')) {
            localEventTime.delete('Upcoming');
        } else {
            localEventTime.add('Upcoming');
            localEventTime.delete('Previous');
            setEventType((new Set<EventType>()).add('RCQ').add('OTHER').add('MTGO'));
        }
        setEventTime(localEventTime);
    }, [eventTime, setEventTime, setEventType]);

    useEffect(() => {
        const filteredByTypeAndFormat = localEvents.filter(event => {
            if (eventFormat.size === 0 && eventType.size === 0) {
                return true;
            }
            if (eventFormat.size > 0 && eventType.size === 0) {
                return eventFormat.has(event.format);
            }
            if (eventFormat.size === 0 && eventType.size > 0) {
                return eventType.has(event.type);
            }
            return eventFormat.has(event.format) && eventType.has(event.type);
        });
        const filteredByDay = filteredByTypeAndFormat.filter(event => {
            if (day.size === 0) {
                return true;
            }
            if (isDay(event.date)) {
                return day.has(event.date);
            }
            return false;
        });
        const filteredByTime = filteredByDay.filter(event => {
            if (eventTime.size === 0) {
                return true;
            }
            if (isDay(event.date)) {
                return false;
            }
            let hours = parseInt(event.time.substring(0,2));
            const minutes = parseInt(event.time.substring(3,5));
            if(event.time.includes('pm')) hours += 12;
            const eventDate = new Date(event.date);
            eventDate.setHours(hours);
            eventDate.setMinutes(minutes);
            eventDate.setDate(eventDate.getDate() + 1);

            if (eventTime.has('Previous')) return eventDate < (new Date());  
            if (eventTime.has('Upcoming')) return eventDate >= (new Date());

            return false;
        });

        onFilterChange(filteredByTime);
    }, [eventFormat, eventType, day, eventTime, localEvents, onFilterChange]);

    return (
        <>
            <Row>
                <Col>
                    <h5>Event Format</h5>
                    <Button variant={eventFormat.has('Pioneer') ? 'primary' : 'dark'} className='m-2' onClick={onClickPioneer}>Pioneer</Button>
                    <Button variant={eventFormat.has('Modern') ? 'primary' : 'dark'} className='m-2' onClick={onClickModern}>Modern</Button>
                    <Button variant={eventFormat.has('Pauper') ? 'primary' : 'dark'} className='m-2' onClick={onClickPauper}>Pauper</Button>
                    <hr />
                    <h5>Event Day</h5>
                    <Button variant={day.has('Monday') ? 'primary' : 'dark'} className='m-2' onClick={onClickMonday}>Monday</Button>
                    <Button variant={day.has('Tuesday') ? 'primary' : 'dark'} className='m-2' onClick={onClickTuesday}>Tuesday</Button>
                    <Button variant={day.has('Wednesday') ? 'primary' : 'dark'} className='m-2' onClick={onClickWednesday}>Wednesday</Button>
                    <Button variant={day.has('Thursday') ? 'primary' : 'dark'} className='m-2' onClick={onClickThursday}>Thursday</Button>
                    <Button variant={day.has('Friday') ? 'primary' : 'dark'} className='m-2' onClick={onClickFriday}>Friday</Button>
                    <Button variant={day.has('Saturday') ? 'primary' : 'dark'} className='m-2' onClick={onClickSaturday}>Saturday</Button>
                    <Button variant={day.has('Sunday') ? 'primary' : 'dark'} className='m-2' onClick={onClickSunday}>Sunday</Button>
                </Col>
                <Col>
                    <img src={require('./logo_maxres.png')} alt='logo' />
                    <hr />
                    <Button variant='dark' className='m-2' onClick={onClickReset}>Reset Filters</Button>
                </Col>
                <Col>
                    <h5>Event Type</h5>
                    <Button variant={eventType.has('RCQ') ? 'primary' : 'dark'} className='m-2' onClick={onClickRCQ}>RCQ</Button>
                    <Button variant={eventType.has('WEEKLY') ? 'primary' : 'dark'} className='m-2' onClick={onClickWeekly}>Weekly</Button>
                    <Button variant={eventType.has('MTGO') ? 'primary' : 'dark'} className='m-2' onClick={onClickMTGO}>MTGO</Button>
                    <Button variant={eventType.has('MTGO WEEKLY') ? 'primary' : 'dark'} className='m-2' onClick={onClickMTGOWeekly}>MTGO WEEKLY</Button>
                    <Button variant={eventType.has('OTHER') ? 'primary' : 'dark'} className='m-2' onClick={onClickOther}>OTHER</Button>
                    <hr />
                    <h5>Event Time</h5>
                    <Button variant={eventTime.has('Previous') ? 'primary' : 'dark'} className='m-2' onClick={onClickPrevious}>Previous Events</Button>
                    <Button variant={eventTime.has('Upcoming') ? 'primary' : 'dark'} className='m-2' onClick={onClickUpcoming}>Upcoming Events</Button>
                </Col>
            </Row>
        </>
    )
}