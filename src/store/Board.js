import { create } from "zustand";
import { boardData } from "../Data/Data";

const useBoard = create((set) => ({
    board: boardData,
    setBoard: (board) => set((state) => ({ board })),
}));

export default useBoard;