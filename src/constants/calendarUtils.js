export const findCalendarIndexById = (calendars, id) =>
    calendars.findIndex(calendar => calendar.id === id);

export const findCalendarById = (calendars, id) =>
    calendars.find(calendar => calendar.id === id);


export function generateMonthDays(date = new Date()) {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const daysInMonth = lastDayOfMonth.getDate();
    const firstWeekday = firstDayOfMonth.getDay() || 7;

    const totalCells = Math.ceil((firstWeekday - 1 + daysInMonth) / 7) * 7;

    const days = [];

    for (let i = 0; i < totalCells; i++) {
        const dayNum = i - (firstWeekday - 2);
        const currentDate = new Date(year, month, dayNum);
        days.push({
            date: currentDate,
            isCurrentMonth: currentDate.getMonth() === month,
        });
    }

    return days;
}
  