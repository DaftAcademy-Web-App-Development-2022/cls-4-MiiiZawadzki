import React from "react";

import { Form, User } from "../index";
import styles from "./Sidebar.module.css";

import userData from "~/data/userData.json";
import { signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  const { data } = useSession();

  const handleLogout = () => {
    signOut();
  };

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <User
          logout={() => handleLogout()}
          email={data?.user?.email || ""}
          image={data?.user?.image || ""}
          name={data?.user?.name || ""}
          loading={!data}
        />
      </div>
      <div className={styles.center}>
        <Form />
      </div>
    </div>
  );
};

export default Sidebar;
