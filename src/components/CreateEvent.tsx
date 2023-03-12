import { Button, Card, Col, Row } from "react-bootstrap"
import React, { useCallback, useEffect, useState } from "react"
import { EventFormat, EventType } from "../events/types";

export type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export const CreateEvent: React.FC = () => {
    const [format, setFormat] = useState<EventFormat>('Pioneer');
    const [type, setType] = useState<EventType>('RCQ');
    const [day, setDay] = useState<Day>('Monday');
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const [copied, setCopied] = useState<boolean>(false);

    const onClickPioneer = useCallback(() => setFormat('Pioneer'), [setFormat]);
    const onClickModern = useCallback(() => setFormat('Modern'), [setFormat]);
    const onClickPauper = useCallback(() => setFormat('Pauper'), [setFormat]);

    const onClickRCQ = useCallback(() => setType('RCQ'), [setType]);
    const onClickMTGO = useCallback(() => setType('MTGO'), [setType]);
    const onClickMTGOWeekly = useCallback(() => setType('MTGO WEEKLY'), [setType]);
    const onClickWEEKLY = useCallback(() => setType('WEEKLY'), [setType]);
    const onClickOTHER = useCallback(() => setType('OTHER'), [setType]);

    const onClickMonday = useCallback(() => setDay('Monday'), [setDay]);
    const onClickTuesday = useCallback(() => setDay('Tuesday'), [setDay]);
    const onClickWednesday = useCallback(() => setDay('Wednesday'), [setDay]);
    const onClickThursday = useCallback(() => setDay('Thursday'), [setDay]);
    const onClickFriday = useCallback(() => setDay('Friday'), [setDay]);
    const onClickSaturday = useCallback(() => setDay('Saturday'), [setDay]);
    const onClickSunday = useCallback(() => setDay('Sunday'), [setDay]);

    const onChangeDate = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value), [setDate]);
    const onChangeTime = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const ogTime = e.target.value;
        const hours = ogTime.slice(0, 2);
        const minutes = ogTime.slice(3, 5);
        if(Number(hours) > 12) {
            setTime(`${Number(hours) - 12}:${minutes}pm`);
        }
        else if (Number(hours) === 12) {
            setTime(`${hours}:${minutes}pm`);
        }
        else if (Number(hours) === 0) {
            setTime(`12:${minutes}am`);
        }
        else {
            setTime(`${hours}:${minutes}am`);
        }
    }, [setTime]);

    const onChangeLocation = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value), [setLocation]);
    const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value), [setName]);
    const onChangeLink = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setLink(e.target.value), [setLink]);

    const copyResult = useCallback(() => {
        const result = `{
            format: '${format}',
            type: '${type}',
            date: '${(type === 'WEEKLY' || type === 'MTGO WEEKLY') ? day : date}',
            time: '${time}',
            location: '${location}',
            name: '${name}',
            link: '${link}',
        }`;
        navigator.clipboard.writeText(result);
        setCopied(true);
    }, [format, type, day, date, time, location, name, link])

    useEffect(() => {
        if(copied) {
            setTimeout(() => setCopied(false), 1000);
        }
    }, [copied])

    return (
        <div className='m-5'>
            <Card className="bg-secondary text-white text-center m-5" border="white">
                <Card.Body>
                    <Row>
                        <Col>
                            <input type='radio' name='format' value='Pioneer' checked={format === 'Pioneer'} onChange={onClickPioneer} /> Pioneer
                            <input type='radio' name='format' value='Modern' checked={format === 'Modern'} onChange={onClickModern} /> Modern
                            <input type='radio' name='format' value='Pauper' checked={format === 'Pauper'} onChange={onClickPauper} /> Pauper
                        </Col>
                        <Col>
                            <input type='radio' name='type' value='RCQ' checked={type === 'RCQ'} onChange={onClickRCQ} /> RCQ
                            <input type='radio' name='type' value='MTGO' checked={type === 'MTGO'} onChange={onClickMTGO} /> MTGO
                            <input type='radio' name='type' value='MTGO WEEKLY' checked={type === 'MTGO WEEKLY'} onChange={onClickMTGOWeekly} /> MTGO WEEKLY
                            <input type='radio' name='type' value='WEEKLY' checked={type === 'WEEKLY'} onChange={onClickWEEKLY} /> WEEKLY
                            <input type='radio' name='type' value='OTHER' checked={type === 'OTHER'} onChange={onClickOTHER} /> OTHER
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {(type === 'WEEKLY' || type === 'MTGO WEEKLY') && (
                                <>
                                    <input type='radio' name='day' value='Monday' checked={day === 'Monday'} onChange={onClickMonday} /> Monday
                                    <input type='radio' name='day' value='Tuesday' checked={day === 'Tuesday'} onChange={onClickTuesday} /> Tuesday
                                    <input type='radio' name='day' value='Wednesday' checked={day === 'Wednesday'} onChange={onClickWednesday} /> Wednesday
                                    <input type='radio' name='day' value='Thursday' checked={day === 'Thursday'} onChange={onClickThursday} /> Thursday
                                    <input type='radio' name='day' value='Friday' checked={day === 'Friday'} onChange={onClickFriday} /> Friday
                                    <input type='radio' name='day' value='Saturday' checked={day === 'Saturday'} onChange={onClickSaturday} /> Saturday
                                    <input type='radio' name='day' value='Sunday' checked={day === 'Sunday'} onChange={onClickSunday} /> Sunday
                                </>
                            )}
                            {(type !== 'WEEKLY' && type !== 'MTGO WEEKLY') && (
                                <>
                                    <input type="date" onChange={onChangeDate} />
                                </>
                            )}
                        </Col>
                        <Col>
                                <input type='time' onChange={onChangeTime} />
                        </Col>
                    </Row>
                    <Row>
                        <input type='text' placeholder='Event Location' onChange={onChangeLocation} />
                        <input type='text' placeholder='Event Name' onChange={onChangeName} />
                        <input type='text' placeholder='Link' onChange={onChangeLink} />
                    </Row>
                </Card.Body>
            </Card>
            <Card className="bg-secondary text-white text-center m-5" border="white">
                <Card.Title>Result</Card.Title>
                <Card.Body>
                    <Button onClick={copyResult}>Copy</Button>
                    {copied && (
                        <p>Copied!</p>
                    )}
                </Card.Body>
            </Card>
        </div>
    )
}