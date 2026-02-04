const AdminPanel = ({ isAdmin }: { isAdmin: boolean; }) => {
  return (
    <div>
      {isAdmin ? "ADming is ok" : "this is not admin"}
      AdminPanel
    </div>
  );
};

export default AdminPanel;
