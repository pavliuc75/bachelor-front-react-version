import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { showSnackbar } from "../store/eventSlice";
import CButtonPrimary from "../components/common/CButtonPrimary";
import CButtonSecondary from "../components/common/CButtonSecondary";
import CTextarea from "../components/common/CTextarea";
import { useRef, useState } from "react";
import { validatorHelper } from "../utils/validatorHelper";
import CComment from "../components/common/CComment";
import CDialog from "../components/common/CDialog";

function Base() {
  const dispatch = useDispatch();
  const isSnackbarShown = useSelector((state: RootState) => state.event.snackbar.isShown);

  const [text, setText] = useState<string>("");
  const cTextareaRef = useRef<any>(null);

  const [isDialogShown, setIsDialogShown] = useState<boolean>(false);

  function kek() {
    console.log(cTextareaRef.current?.validateInput());
  }

  return (
    <div>
      <h1>Base</h1>
      {isSnackbarShown.toString()}
      <button onClick={() => dispatch(showSnackbar({ message: "a", type: "a" }))}>Show Snackbar</button>
      <br></br>
      <CButtonPrimary onClick={() => kek()} iconStart={["fas", "coffee"]} text={"aa"}></CButtonPrimary>
      <CButtonSecondary text={"aa"}></CButtonSecondary>
      {text}
      <CTextarea
        ref={cTextareaRef}
        lazyValidation={true}
        value={text}
        validatorFunctions={[validatorHelper.validateEmailAddress]}
        onUpdate={(newStr) => setText(newStr)}
        labelText={"aaa"}></CTextarea>
      {/*<Child slot1={(items: any) => <div>aaa {items.name}</div>} slot2={<div>bbb</div>}></Child>*/}
      <CComment authorSlot={() => <div>kek</div>}></CComment>
      <CDialog onUpdate={setIsDialogShown} isShown={isDialogShown}></CDialog>
      <button onClick={() => setIsDialogShown(true)}>ds</button>
    </div>
  );
}

export default Base;
