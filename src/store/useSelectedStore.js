import { create } from 'zustand'



export const useSelectedStore= create((set) => ({
  selectedTasks: [],
  addTask: (task) => set((state) => {
    if (state.selectedTasks.some((selectedTask) => selectedTask.id === task.id)) {
      return state
    }

    return { selectedTasks: [...state.selectedTasks, task] }
  }),
  removeTask: (id) => set((state) => ({
    selectedTasks: state.selectedTasks.filter((task) => task.id !== id),
  })),
  clearAll: () => set({ selectedTasks: [] }),
}))