import { createSlice, nanoid } from '@reduxjs/toolkit';
import {
    DEFAULT_CALENDAR_ID,
    DEFAULT_CALENDAR_NAME,
    DEFAULT_CALENDAR_COLOR,
} from 'constants/calendar';
import {
    findCalendarIndexById,
    findCalendarById,
} from 'constants/calendarUtils';


const initialState = {
    calendars: [
        {
            id: DEFAULT_CALENDAR_ID,
            name: DEFAULT_CALENDAR_NAME,
            color: DEFAULT_CALENDAR_COLOR,
            visible: true,
        },
    ],
};


const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        addCalendar: {
            reducer(state, action) {
                state.calendars.push(action.payload);
            },
            prepare(data) {
                return {
                    payload: {
                        id: nanoid(),
                        ...data,
                        visible: true,
                    },
                };
            },
        },
        deleteCalendar(state, action) {
            const id = action.payload;
            if (id !== DEFAULT_CALENDAR_ID) {
                state.calendars = state.calendars.filter(calendar => calendar.id !== id);
            }
        },
        updateCalendar(state, action) {
            const { id, ...updates } = action.payload;
            const index = findCalendarIndexById(state.calendars, id);
            if (index !== -1) {
                state.calendars[index] = {
                    ...state.calendars[index],
                    ...updates,
                };
            }
        },
        toggleCalendarVisibility(state, action) {
            const calendar = findCalendarById(state.calendars, action.payload);
            if (calendar) {
                calendar.visible = !calendar.visible;
            }
        },
    },
});


export const {
    addCalendar,
    deleteCalendar,
    updateCalendar,
    toggleCalendarVisibility,
} = calendarSlice.actions;

export default calendarSlice.reducer;
