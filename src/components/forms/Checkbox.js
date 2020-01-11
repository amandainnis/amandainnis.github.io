import React from "react";

function Checkbox(props) {
  return (
    <div className="custom-checkbox">
      <label htmlFor={props.data.name}>
        <input
          type="checkbox"
          checked={props.data.checked}
          id={props.data.name}
          name={props.data.name}
          onChange={e => {
            props.handleCheckbox(props.data.id);
          }}
        />
        <div className="checkbox">
          <span className="inner-check"></span>
        </div>
        <div className="inner-label-text">{props.data.label}</div>
      </label>
    </div>
  );
}

export default Checkbox;
