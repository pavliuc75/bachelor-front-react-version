import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { showLoadingOverlay, showSnackbar } from "../store/eventSlice";
import CButtonPrimary from "../components/common/CButtonPrimary";
import CButtonSecondary from "../components/common/CButtonSecondary";
import CTextarea from "../components/common/CTextarea";
import { useRef, useState } from "react";
import { validatorHelper } from "../utils/validatorHelper";
import CComment from "../components/common/CComment";
import CDialog from "../components/common/CDialog";
import CFileInput from "../components/common/CFileInput";
import CInput from "../components/common/CInput";
import CMenu from "../components/common/CMenu";
import CLoadingOverlay from "../components/common/CLoadingOverlay";
import CPagination from "../components/common/CPagination";
import CRating from "../components/common/CRating";
import CRatingEdit from "../components/common/CRatingEdit";

//todo

function Base() {
  const dispatch = useDispatch();
  const isSnackbarShown = useSelector((state: RootState) => state.event.snackbar.isShown);

  const [text, setText] = useState<string>("");
  const cTextareaRef = useRef<any>(null);

  const [isDialogShown, setIsDialogShown] = useState<boolean>(false);
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

  function kek() {
    console.log(cTextareaRef.current?.validateInput());
  }

  function handleShowOverlay() {
    dispatch(showLoadingOverlay({ isInstant: true }));
  }

  function handleShowMenu(e: { currentTarget: any }) {
    console.log(e.currentTarget);
    setIsMenuShown(true);
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
        value={text}
        validatorFunctions={[validatorHelper.validateRequired]}
        onUpdate={(newStr) => setText(newStr)}
        labelText={"aaa"}></CTextarea>
      {/*<Child slot1={(items: any) => <div>aaa {items.name}</div>} slot2={<div>bbb</div>}></Child>*/}
      <CComment authorSlot={() => <div>kek</div>}></CComment>
      <CDialog onUpdate={setIsDialogShown} isShown={isDialogShown}></CDialog>
      <button onClick={() => setIsDialogShown(true)}>ds</button>
      <CFileInput></CFileInput>
      <CInput
        onUpdate={function (value: string): void {
          throw new Error("Function not implemented.");
        }}></CInput>
      <button onClick={handleShowOverlay}>show overlay</button>
      <button onClick={handleShowMenu}>show menu</button>
      <CPagination onCurrentPageChanged={() => {}} currentPage={3} totalPages={10}></CPagination>
      <CRating value={3.5} totalRatings={5} isTotalRatingShown={true}></CRating>
      <CRatingEdit value={3}></CRatingEdit>
    </div>
  );
}

export default Base;
