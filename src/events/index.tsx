import { mtgoEvents } from "./mtgo";
import { mtgoWeeklyEvents } from "./mtgoWeekly";
import { rcqEvents } from "./rcq";
import { Event } from "./types";
import { weeklyEvents } from "./weekly";

export const events: Event[] = [
    ...mtgoEvents,
    ...mtgoWeeklyEvents,
    ...rcqEvents,
    ...weeklyEvents,
];