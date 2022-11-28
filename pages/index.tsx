import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Auth } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import App from "./app";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth
          providers={["github", "google"]}
          supabaseClient={supabase}
        />
      ) : (
        <App />
      )}
    </div>
  );
};

export default Home;
