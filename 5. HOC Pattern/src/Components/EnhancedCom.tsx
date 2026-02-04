import ProfilePage from "./ProfilePage";
import AdminPanel from "./AdminPanel";
import Reportspage from "./Reportspage";
import withUserDataAndPermissions from "../HOC/withUserDataAndPermissions";

export const ProfileWithAuth = withUserDataAndPermissions(ProfilePage);

export const AdminWithAuth = withUserDataAndPermissions(AdminPanel);

export const ReportsWithAuth = withUserDataAndPermissions(Reportspage);
