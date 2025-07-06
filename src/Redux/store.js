import { configureStore } from '@reduxjs/toolkit';
import eventReducer from 'entities/event/eventSlice';
import calendarReducer from 'entities/calendar/calendarSlice';


export const store = configureStore({
    reducer: {
        event: eventReducer,
        calendar: calendarReducer,
    },
});
