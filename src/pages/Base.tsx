import {useSelector, useDispatch} from "react-redux";
import type {RootState} from "../store";
import {showSnackbar} from "../store/eventSlice";
import CButtonPrimary from "../components/common/CButtonPrimary";

function Base() {
    const dispatch = useDispatch();
    const isSnackbarShown = useSelector((state: RootState) => state.event.snackbar.isShown);

    function kek() {
        console.log("kek");
    }

    return (
        <div>
            <h1>Base</h1>
            {isSnackbarShown.toString()}
            <button onClick={() => dispatch(showSnackbar({message: "a", type: "a"}))}>Show Snackbar</button>
            <br></br>
            <CButtonPrimary onClick={() => kek()} iconStart={["fas", "coffee"]} text={"aa"}></CButtonPrimary>
        </div>
    );
}

export default Base;
