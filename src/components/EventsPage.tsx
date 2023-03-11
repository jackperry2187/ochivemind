import React, { useCallback, useMemo, useState } from 'react';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import { EventFormat, EventType, exampleEvents } from '../events';

type SortBy = 'dateDesc' | 'dateAsc' | 'formatDesc' | 'formatAsc' | 'typeDesc' | 'typeAsc' | 'locationDesc' | 'locationAsc' | 'nameDesc' | 'nameAsc';

export const EventsPage: React.FC = () => {
    const events = exampleEvents;
    const [sortBy, setSortBy] = useState<SortBy | undefined>('dateDesc');
    const [eventFormat, setEventFormat] = useState<Set<EventFormat>>(new Set());
    const [eventType, setEventType] = useState<Set<EventType>>(new Set());

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

    const sortByDate = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        if (sortBy === 'dateDesc') {
            setSortBy('dateAsc');
        } else if (sortBy === 'dateAsc') {
            setSortBy(undefined);
        } else {
            setSortBy('dateDesc');
        }
    }, [sortBy, setSortBy]);

    const sortByFormat = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        if (sortBy === 'formatDesc') {
            setSortBy('formatAsc');
        } else if (sortBy ==='formatAsc') {
            setSortBy(undefined);
        } else {
            setSortBy('formatDesc');
        }
    }, [sortBy, setSortBy]);

    const sortByType = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        if (sortBy === 'typeDesc') {
            setSortBy('typeAsc');
        } else if (sortBy ==='typeAsc') {
            setSortBy(undefined);
        } else {
            setSortBy('typeDesc');
        }
    }, [sortBy, setSortBy]);

    const sortByLocation = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        if (sortBy === 'locationDesc') {
            setSortBy('locationAsc');
        } else if (sortBy ==='locationAsc') {
            setSortBy(undefined);
        } else {
            setSortBy('locationDesc');
        }
    }, [sortBy, setSortBy]);

    const sortByName = useCallback((event: React.MouseEvent) => {
        event.preventDefault();
        if (sortBy === 'nameDesc') {
            setSortBy('nameAsc');
        } else if (sortBy ==='nameAsc') {
            setSortBy(undefined);
        } else {
            setSortBy('nameDesc');
        }
    }, [sortBy, setSortBy]);

    const filteredEvents = useMemo(() => {
        return events.filter(event => {
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
    }, [events, eventFormat, eventType]);

    const sortedEvents = useMemo(() => {
        switch (sortBy) {
            case 'dateDesc':
                return [...filteredEvents].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            case 'dateAsc':
                return [...filteredEvents].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            case 'formatDesc':
                return [...filteredEvents].sort((a, b) => a.format.localeCompare(b.format));
            case 'formatAsc':
                return [...filteredEvents].sort((a, b) => b.format.localeCompare(a.format));
            case 'typeDesc':
                return [...filteredEvents].sort((a, b) => a.type.localeCompare(b.type));
            case 'typeAsc':
                return [...filteredEvents].sort((a, b) => b.type.localeCompare(a.type));
            case 'locationDesc':
                return [...filteredEvents].sort((a, b) => a.location.localeCompare(b.location));
            case 'locationAsc':
                return [...filteredEvents].sort((a, b) => b.location.localeCompare(a.location));
            case 'nameDesc':
                return [...filteredEvents].sort((a, b) => a.name.localeCompare(b.name));
            case 'nameAsc':
                return [...filteredEvents].sort((a, b) => b.name.localeCompare(a.name));
            default:
                return filteredEvents;
        }
    }, [filteredEvents, sortBy]);

    return (
        <div className='m-5'>
            <Card className="bg-secondary text-white text-center m-5" border="white">
                <Card.Body>
                    <div>
                        <Row>
                            <Col>
                                <h5>Event Format</h5>
                                <Button variant={eventFormat.has('Pioneer') ? 'primary' : 'dark'} className='m-2' onClick={onClickPioneer}>Pioneer</Button>
                                <Button variant={eventFormat.has('Modern') ? 'primary' : 'dark'} className='m-2' onClick={onClickModern}>Modern</Button>
                                <Button variant={eventFormat.has('Pauper') ? 'primary' : 'dark'} className='m-2' onClick={onClickPauper}>Pauper</Button>
                            </Col>
                            <Col>
                                <h5>Event Type</h5>
                                <Button variant={eventType.has('RCQ') ? 'primary' : 'dark'} className='m-2' onClick={onClickRCQ}>RCQ</Button>
                                <Button variant={eventType.has('WEEKLY') ? 'primary' : 'dark'} className='m-2' onClick={onClickWeekly}>Weekly</Button>
                                <Button variant={eventType.has('MTGO') ? 'primary' : 'dark'} className='m-2' onClick={onClickMTGO}>MTGO</Button>
                            </Col>
                        </Row>
                        
                    </div>
                </Card.Body>
            </Card>
            <Card className="bg-secondary text-white text-center m-5" border="white">
                <Card.Body>
                    <Card.Title>Events</Card.Title>
                    {sortedEvents.length > 0 && (
                        <div className="border border-white">
                            <Table responsive hover bordered variant="dark" className="border border-secondary mb-0">
                                <thead>
                                    <tr>
                                        <th onClick={sortByDate} className='text-decoration-underline'>
                                            Date
                                            {sortBy === 'dateDesc' && <span className="float-right">&#x25BC;</span>}
                                            {sortBy === 'dateAsc' && <span className="float-right">&#x25B2;</span>}
                                        </th>
                                        <th onClick={sortByFormat} className='text-decoration-underline'>
                                            Format
                                            {sortBy === 'formatDesc' && <span className="float-right">&#x25BC;</span>}
                                            {sortBy === 'formatAsc' && <span className="float-right">&#x25B2;</span>}
                                        </th>
                                        <th onClick={sortByType} className='text-decoration-underline'>
                                            Type
                                            {sortBy === 'typeDesc' && <span className="float-right">&#x25BC;</span>}
                                            {sortBy === 'typeAsc' && <span className="float-right">&#x25B2;</span>}
                                        </th>
                                        <th onClick={sortByLocation} className='text-decoration-underline'>
                                            Location
                                            {sortBy === 'locationDesc' && <span className="float-right">&#x25BC;</span>}
                                            {sortBy === 'locationAsc' && <span className="float-right">&#x25B2;</span>}
                                        </th>
                                        <th onClick={sortByName} className='text-decoration-underline'>
                                            Name
                                            {sortBy === 'nameDesc' && <span className="float-right">&#x25BC;</span>}
                                            {sortBy === 'nameAsc' && <span className="float-right">&#x25B2;</span>}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedEvents.map((event, index) => (
                                        <tr key={index}>
                                            <td>{event.date}</td>
                                            <td>{event.format}</td>
                                            <td>{event.type}</td>
                                            <td>{event.location}</td>
                                            <td><a href={event.link} target='_blank' rel='noreferrer'>{event.name}</a></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    )}
                    {sortedEvents.length === 0 && (
                        <h5>No results found</h5>
                    )}
                </Card.Body>
            </Card>
        </div>
    )    
}