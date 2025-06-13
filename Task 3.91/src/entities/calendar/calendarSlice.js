import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    calendars: [
        {
            id: 'default',
            name: 'Main calendar',
            color: '#3f51b5',
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
            if (id !== 'default') {
                state.calendars = state.calendars.filter((c) => c.id !== id);
            }
        },
        updateCalendar(state, action) {
            const index = state.calendars.findIndex((c) => c.id === action.payload.id);
            if (index !== -1) {
                state.calendars[index] = {
                    ...state.calendars[index],
                    ...action.payload,
                };
            }
        },
        toggleCalendarVisibility(state, action) {
            const calendar = state.calendars.find((c) => c.id === action.payload);
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
