import React from "react";
import { useHistory } from "react-router-dom";

function GoBack({ children }) {
  const history = useHistory();
  return (
    <div
      className="tw-goback"
      onClick={() => {
        history.goBack();
      }}
    >
      {children}
    </div>
  );
}

export default GoBack;
