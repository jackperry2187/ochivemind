import { mtgoEvents } from "./mtgo";
import { mtgoWeeklyEvents } from "./mtgoWeekly";
import { otherEvents } from "./other";
import { rcqEvents } from "./rcq";
import { Event } from "./types";
import { weeklyEvents } from "./weekly";

export const events: Event[] = [
    ...mtgoEvents,
    ...mtgoWeeklyEvents,
    ...rcqEvents,
    ...weeklyEvents,
    ...otherEvents,
];