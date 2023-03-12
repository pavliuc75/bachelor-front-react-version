import Backdrop from "@mui/material/Backdrop";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "../../styles/CLoadingOverlay.css";
import { useEffect, useState } from "react";

function CLoadingOverlay() {
  const { isShown, isInstant } = useSelector((state: RootState) => state.event.loadingOverlay);

  const [isShownLocal, setIsShownLocal] = useState<boolean>(false);

  useEffect(() => {
    if (isShown) {
      showLoadingOverlay();
    } else {
      setIsShownLocal(false);
    }
  }, [isShown]);

  function showLoadingOverlay() {
    if (isInstant) {
      setIsShownLocal(true);
    } else {
      setTimeout(() => setIsShownLocal(true), 3000);
    }
  }

  return <Backdrop open={isShownLocal}></Backdrop>;
}

export default CLoadingOverlay;
