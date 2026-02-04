import "./App.css";
import {
  AdminWithAuth,
  ProfileWithAuth,
  ReportsWithAuth,
} from "./Components/EnhancedCom";

function App() {
  return (
    <>
      <ProfileWithAuth />
      <hr />
      <AdminWithAuth />
      <hr />
      <ReportsWithAuth />
    </>
  );
}

export default App;
