import React from "react";
import useCheckBox from "./useCheckBox";
import CheckBoxItem from "./CheckBoxItem";

function CheckBoxSystem() {
  const { data: checkBoxData, onChecked } = useCheckBox();
  return (
    <div>
      {checkBoxData.map(({ label, id, checked, children }) => (
        <CheckBoxItem
          onChecked={onChecked}
          label={label}
          children={children}
          id={id}
          parentId={null}
          checked={checked}
        />
      ))}
    </div>
  );
}

export default CheckBoxSystem;
