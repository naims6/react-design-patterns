import ToolbarWithSlot from "./ToolbarWithSlot";

const Toolbar = () => {
  return (
    <div>
      <ToolbarWithSlot
        start={<h1>Start</h1>}
        center={<h1>Center</h1>}
        end={<h1>End</h1>}
      />
    </div>
  );
};

export default Toolbar;
