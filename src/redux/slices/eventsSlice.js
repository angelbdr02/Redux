import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  joinedEvents: JSON.parse(localStorage.getItem("joinedEvents")) || [],
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    joinEvent: (state, action) => {
      state.joinedEvents.push(action.payload);
      localStorage.setItem("joinedEvents", JSON.stringify(state.joinedEvents));
    },
    leaveEvent: (state, action) => {
      state.joinedEvents = state.joinedEvents.filter(event => event.id !== action.payload);
      localStorage.setItem("joinedEvents", JSON.stringify(state.joinedEvents));
    },
  },
});

export const { setEvents, joinEvent, leaveEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
