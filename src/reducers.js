/* global fetchAPI */
//Starting value that gives today's available times
export function initializeTimes() {
    return fetchAPI(new Date());
  }
//Takes selected date and gives the times based on the date
export function updateTimes(state, action) {
    return fetchAPI(new Date(action));
  }