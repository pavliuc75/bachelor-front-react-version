import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { showSnackbar } from "../store/eventSlice";

function Base() {
  const dispatch = useDispatch();
  const isSnackbarShown = useSelector((state: RootState) => state.event.snackbar.isShown);
  return (
    <div>
      <h1>Base</h1>
      {isSnackbarShown.toString()}
      <button onClick={() => dispatch(showSnackbar({ message: "a", type: "a" }))}>Show Snackbar</button>
    </div>
  );
}

export default Base;
