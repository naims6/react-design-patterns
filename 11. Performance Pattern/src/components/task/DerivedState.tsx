const DerivedState = ({
  items = [{ active: true }, { active: false }],
}: {
  items?: { active: boolean }[];
}) => {
  const filteredValue = items.filter((i) => i.active);
  console.log(filteredValue);

  return <div>DerivedState</div>;
};

export default DerivedState;
