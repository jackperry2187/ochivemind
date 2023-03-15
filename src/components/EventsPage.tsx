import React, { useCallback, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Event } from '../events/types';
import { events as UnprocessedEvents } from '../events';
import '../styles/EventsPage.css'
import { EventsList } from './EventsList';
import { EventFilters } from './EventFilters';
import { EventsCalendar } from './EventsCalendar';

export const EventsPage: React.FC = () => {
    const [events, setEvents] = useState<Event[]>(UnprocessedEvents);
    const [view, setView] = useState<'list' | 'calendar'>('list');

    const onFilterChange = useCallback((events: Event[]) => {
        setEvents(events);
    }, [setEvents]);

    const viewAsList = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        setView('list');
    }, [setView]);

    const viewAsCalendar = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        setView('calendar');
    }, [setView]);
    
    return (
        <div className='m-2 bg-logo'>
            <Card className="bg-secondary text-white text-center m-2 mt-5" border="white">
                <Card.Body>
                    <div>
                        <EventFilters events={events} onFilterChange={onFilterChange} />
                    </div>
                </Card.Body>
            </Card>
            <Card className="bg-secondary text-white text-center m-2 mt-5" border="white">
                <Card.Body>
                    <Card.Title>
                        <Row>
                            <Col></Col>
                            <Col>
                                <Button variant="dark" onClick={viewAsList} disabled={view === 'list'}>View as List</Button>
                            </Col>
                            <Col className='my-auto'><h5 className='my-auto'>Events</h5></Col>
                            <Col>
                                <Button variant="dark" onClick={viewAsCalendar} disabled={view === 'calendar'}>View as Calendar</Button>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Card.Title>
                    {view === 'list' && <EventsList events={events} />}
                    {view === 'calendar' && <EventsCalendar events={events} />}
                </Card.Body>
            </Card>
        </div>
    )    
}