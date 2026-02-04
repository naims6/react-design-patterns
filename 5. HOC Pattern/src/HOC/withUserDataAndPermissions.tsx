export type User = {
  id: number;
  name: string;
  role: "admin" | "user";
  permissions: string[];
};

type WithUserDataProps = {
  user: User;
  isAdmin: boolean;
  hasPermission: (permission: string) => boolean;
};

const withUserDataAndPermissions = <P extends object>(
  Component: React.ComponentType<P & WithUserDataProps>
) => {
  return function EnhancedComponent(
    props: Omit<P, keyof WithUserDataProps>
  ) {
    const user: User = {
      id: 1,
      name: "John Doe",
      role: "admin",
      permissions: ["report"],
    };

    const isAdmin = user.role === "admin";

    const hasPermission = (permission: string) =>
      user.permissions.includes(permission);

    return (
      <Component
        {...(props as P)}
        user={user}
        isAdmin={isAdmin}
        hasPermission={hasPermission}
      />
    );
  };
};


export default withUserDataAndPermissions;
