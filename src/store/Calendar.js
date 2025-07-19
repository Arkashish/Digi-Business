import { create } from "zustand";
import { groupNumber, INITIAL_EVENTS, userData, boardData } from "../Data/Data";

const useCalendar = create((set) => ({
    currentEvents: INITIAL_EVENTS,
    setCurrentEvents: (events) => set({ currentEvents: events }),
}));

export default useCalendar;