import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import "../../styles/CDialog.css";

interface Props {
  isShown: boolean;
  titleText?: string;
  subtitleText?: string;
  width?: number;
  contentClassOverwrite?: string;
  onUpdate: (value: boolean) => void;
  titleSlot?: any;
  subtitleSlot?: any;
  footerSlot?: any;
  children?: any;
}

function CDialog(props: Props) {
  const { t } = useTranslation();
  const {
    isShown,
    titleText,
    subtitleText,
    width = 600,
    contentClassOverwrite = "border border-mid-gray border-solid bg-white pa-8 focus-visible:outline-none flex flex-col",
    onUpdate,
    titleSlot,
    subtitleSlot,
    footerSlot,
    children,
  } = props;

  return (
    <Dialog open={isShown} onClose={() => onUpdate(false)}>
      aaa
    </Dialog>
  );
}

export default CDialog;
