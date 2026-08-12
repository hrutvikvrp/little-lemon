/* global fetchAPI */
export function initializeTimes() {
    return fetchAPI(new Date());
  }
export function updateTimes(state, action) {
    return fetchAPI(new Date(action));
  }