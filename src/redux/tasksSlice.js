import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask } from "./tasksOps";
import { selectTextFilter } from "./filtersSlice";

const slice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTasks.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addTask.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteTask.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;

        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export default slice.reducer;

export const selectTasks = state => state.tasks.items;

export const selectLoading = state => state.tasks.loading;

export const selectError = state => state.tasks.error;

// export const selectVisibleTasks1 = state => {
//   // console.log("selectVisibleTasks");
//   const tasks = selectTasks(state);
//   const textFilter = selectTextFilter(state);

//   return tasks.filter(task =>
//     task.text.toLowerCase().includes(textFilter.toLowerCase())
//   );
// };

export const selectVisibleTasks = createSelector(
  [selectTasks, selectTextFilter],
  (tasks, textFilter) => {
    console.log("selectVisibleTasks");
    return tasks.filter(task =>
      task.text.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);

// export const selectTaskCount1 = state => {
//   // console.log("selectTaskCount");
//   const tasks = selectTasks(state);

//   return tasks.reduce(
//     (acc, task) => {
//       if (task.completed) {
//         acc.completed += 1;
//       } else {
//         acc.active += 1;
//       }
//       return acc;
//     },
//     { active: 0, completed: 0 }
//   );
// };

export const selectTaskCount = createSelector([selectTasks], tasks => {
  console.log("selectTaskCount");
  return tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
});
