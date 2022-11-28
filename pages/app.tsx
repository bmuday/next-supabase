
import Account from "./account";
import { useSession } from "@supabase/auth-helpers-react";
import Navbar from "../components/Navbar";

const App = () => {
  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
       <Navbar />
       App
    </div>
  );
};

export default App;
