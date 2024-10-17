import React from "react";

function CheckBoxItem({ label, children, id, checked, onChecked, parentId }) {
  return (
    <div>
      <div>
        <input
          onChange={() => onChecked(id, checked)}
          type="checkbox"
          checked={checked}
          id={id}
        />
        <span>{label}</span>
      </div>
      <div
        style={{
          margin: "20px",
        }}
      >
        {!!children &&
          !!children.length &&
          children.map(({ label, id, checked, children }) => (
            <CheckBoxItem
              parentId={id}
              onChecked={onChecked}
              label={label}
              children={children}
              checked={checked}
              id={id}
            />
          ))}
      </div>
    </div>
  );
}

export default CheckBoxItem;
