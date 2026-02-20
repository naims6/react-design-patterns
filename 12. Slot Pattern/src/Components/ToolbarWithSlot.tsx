import React from "react";

const ToolbarWithSlot = ({
  start,
  center,
  end,
}: {
  start: React.ReactNode;
  center: React.ReactNode;
  end: React.ReactNode;
}) => {
  return (
    <div>
      <div>{start}</div>
      <div>{center}</div>
      <div>{end}</div>
    </div>
  );
};

export default ToolbarWithSlot;
