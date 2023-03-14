import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./eventSlice";
import administratorManagementToolReducer from "./administratorManagementToolSlice";
import businessManagementToolReducer from "./businessManagementToolSlice";

export const store = configureStore({
  reducer: {
    event: eventReducer,
    administratorManagementTool: administratorManagementToolReducer,
    businessManagementTool: businessManagementToolReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
