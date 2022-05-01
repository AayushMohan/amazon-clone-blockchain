import Image from "next/image";
import React from "react";
import { ConnectButton } from "web3uikit";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        {isAuthenticated && (
          <div className={styles.profilePicContainer}>
            <Image
              alt="profile"
              className={styles.profilePic}
              height={100}
              width={100}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
