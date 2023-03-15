import React, { useCallback, useMemo } from "react"
import { Table } from "react-bootstrap";
import { Event } from "../events/types";

type SortBy = 'dateDesc' | 'dateAsc' | 'formatDesc' | 'formatAsc' | 'typeDesc' | 'typeAsc' | 'locationDesc' | 'locationAsc' | 'nameDesc' | 'nameAsc';

type EventsListProps = {
    events: Event[];
}

export const EventsList: React.FC<EventsListProps> = ({ events }) => {
    const [sortBy, setSortBy] = React.useState<SortBy | undefined>('dateDesc');

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

    const sortedEvents = useMemo(() => {
        switch (sortBy) {
            case 'dateDesc':
                return [...events].sort((a, b) => a.date.localeCompare(b.date));
            case 'dateAsc':
                return [...events].sort((a, b) => b.date.localeCompare(a.date));
            case 'formatDesc':
                return [...events].sort((a, b) => a.format.localeCompare(b.format));
            case 'formatAsc':
                return [...events].sort((a, b) => b.format.localeCompare(a.format));
            case 'typeDesc':
                return [...events].sort((a, b) => a.type.localeCompare(b.type));
            case 'typeAsc':
                return [...events].sort((a, b) => b.type.localeCompare(a.type));
            case 'locationDesc':
                return [...events].sort((a, b) => a.location.localeCompare(b.location));
            case 'locationAsc':
                return [...events].sort((a, b) => b.location.localeCompare(a.location));
            case 'nameDesc':
                return [...events].sort((a, b) => a.name.localeCompare(b.name));
            case 'nameAsc':
                return [...events].sort((a, b) => b.name.localeCompare(a.name));
            default:
                return events;
        }
    }, [events, sortBy]);

    return (
        <>
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
                                <th>
                                    Time (EST)
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
                                    <td>{event.time}</td>
                                    <td>{event.format}</td>
                                    <td>{event.type}</td>
                                    <td>{event.location}</td>
                                    <td><a href={event.link} target='_blank' rel='noreferrer' className='link-light'>{event.name}</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
            {sortedEvents.length === 0 && (
                <h5>No results found</h5>
            )}
        </>
    )
}