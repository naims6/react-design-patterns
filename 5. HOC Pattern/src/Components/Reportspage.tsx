const Reportspage = ({ hasPermission }: {hasPermission: (permission: string) => boolean}) => {
  return (
    <div>
      {hasPermission("ehl") ? "Yes Permisstion" : "No permsission"}
      Reportspage
    </div>
  );
};

export default Reportspage;
