import { create } from "zustand";

export const useGameStore = create((set) => ({
    board: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    messages: [],
    score: { X: 0, O: 0 },


    setBoard: (board) => set({ board }),


    setCurrentPlayer: (player) => set({ currentPlayer: player }),


    setWinner: (winner) => set({ winner }),


    sendMessage: (msg) =>
        set((state) => ({ messages: [...state.messages, msg] })),


    resetGame: () =>
        set(() => ({
            board: Array(9).fill(null),
            currentPlayer: 'X',
            winner: null,
        })),

    fullReset: () =>
        set(() => ({
            board: Array(9).fill(null),
            currentPlayer: 'X',
            winner: null,
            messages: [],
            score: { X: 0, O: 0 },
        })),
    incrementXWins: () =>
        set((state) => ({
            score: { ...state.score, X: state.score.X + 1 },
        })),

    incrementOWins: () =>
        set((state) => ({
            score: { ...state.score, O: state.score.O + 1 },
        })),

}))
