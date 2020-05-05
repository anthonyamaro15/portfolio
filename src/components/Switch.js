import React from "react";
import Switch from "@material-ui/core/Switch";

export default function Switches({ setState, state }) {
  const handleChange = (event) => {
    setState(event.target.checked);
  };

  return (
    <div>
      <Switch
        checked={state}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
}
