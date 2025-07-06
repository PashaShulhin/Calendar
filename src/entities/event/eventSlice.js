import { createSlice, nanoid } from '@reduxjs/toolkit';
import { isSameDay } from 'date-fns';

const initialState = {
    events: [
        {
            id: nanoid(),
            title: 'First event',
            description: 'Description',
            date: '2025-06-01T10:00',
            calendarId: 'default',
        },
    ],
};

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        addEvent: {
            reducer(state, action) {
                state.events.push(action.payload);
            },
            prepare(data) {
                return {
                    payload: {
                        id: nanoid(),
                        ...data,
                    },
                };
            },
        },
        deleteEvent(state, action) {
            state.events = state.events.filter((event) => event.id !== action.payload);
        },
        updateEvent(state, action) {
            const index = state.events.findIndex((event) => event.id === action.payload.id);
            if (index !== -1) {
                state.events[index] = action.payload;
            }
        },
    },
});

export const { addEvent, deleteEvent, updateEvent } = eventSlice.actions;
export default eventSlice.reducer;
