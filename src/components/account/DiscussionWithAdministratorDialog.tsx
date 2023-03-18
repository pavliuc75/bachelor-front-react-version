import { forwardRef } from "react";
import { SupportThread } from "../../generated-sources/openapi";

interface Props {
  isDialogShown: boolean;
  onClose: () => void;
  discussionWithAdministratorDialogThreadInfo: SupportThread | null;
}

function DiscussionWithAdministratorDialog(props: Props, ref: any) {
  return <div></div>;
}

//todo impl
export default forwardRef(DiscussionWithAdministratorDialog);
