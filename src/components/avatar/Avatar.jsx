import React from "react";
import { colorForName, initials } from "../../data";
import "./Avatar.scss";

function Avatar({ name, size = 40 }) {
  return (
    <div
      className="avatar"
      style={{
        width: size,
        height: size,
        fontSize: Math.max(11, size * 0.4),
        backgroundColor: colorForName(name),
      }}
      aria-hidden="true"
      title={name}
    >
      {initials(name) || "?"}
    </div>
  );
}

export default Avatar;
