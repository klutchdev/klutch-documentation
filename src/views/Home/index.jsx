import { lazy, useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaMinus, FaPlus } from "react-icons/fa";
import { pageVariant, iconVariants } from "../../animations";
import { useAuthState } from "klutch-fire-hooks/auth";
import { auth } from "../../firebase";
const TextButton = lazy(() => import("../../components/TextButton"));

const Home = () => {
  const [user] = useAuthState(auth);
  const [alertsCollapsed, setAlertsCollapsed] = useState(true);
  const [buttonsCollapsed, setButtonsCollapsed] = useState(true);
  const [inputsCollapsed, setInputsCollapsed] = useState(true);
  const [modalsCollapsed, setModalsCollapsed] = useState(true);
  const [togglesCollapsed, setTogglesCollapsed] = useState(true);
  const [imagesCollapsed, setImagesCollapsed] = useState(true);

  return (
    <motion.div
      style={{ padding: `1rem` }}
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* <hr color="#363636" /> */}

      <div style={{ marginLeft: "0.5rem" }} className="flex column">
        <Header label="Home" user={user} />
        <br />
        <SubHeader
          label="Alerts"
          collapsed={alertsCollapsed}
          handleClick={() => setAlertsCollapsed(!alertsCollapsed)}
        />
        <Group collapsed={alertsCollapsed}>
          <LinkTo label="Banner" path="/top-banner" />
        </Group>

        <SubHeader
          label="Buttons"
          collapsed={buttonsCollapsed}
          handleClick={() => setButtonsCollapsed(!buttonsCollapsed)}
        />
        <Group collapsed={buttonsCollapsed}>
          <LinkTo label="Icon" path="/icon-button" />
          <LinkTo label="Text" path="/text-button" />
          <LinkTo label="Basic" path="/basic-button" />
          <LinkTo label="Outline" path="/outline-button" />
          <LinkTo label="Loading" path="/loading-button" />
          <LinkTo label="Progress" path="/progress-button" />
        </Group>

        <SubHeader
          label="Inputs"
          collapsed={inputsCollapsed}
          handleClick={() => setInputsCollapsed(!inputsCollapsed)}
        />
        <Group collapsed={inputsCollapsed}>
          <LinkTo label="Text" path="/text-input" />
          <LinkTo label="Search" path="/search-input" />
          <LinkTo label="Password" path="/password-input" />
        </Group>

        <SubHeader
          label="Images"
          collapsed={imagesCollapsed}
          handleClick={() => setImagesCollapsed(!imagesCollapsed)}
        />
        <Group collapsed={imagesCollapsed}>
          <LinkTo label="Avatar" path="/avatar" />
        </Group>

        <SubHeader
          label="Modals"
          collapsed={modalsCollapsed}
          handleClick={() => setModalsCollapsed(!modalsCollapsed)}
        />
        <Group collapsed={modalsCollapsed}>
          <LinkTo label="Alert" path="/modal-alert" />
          <LinkTo label="Prompt" path="/modal-prompt" />
        </Group>

        <SubHeader
          label="Toggles"
          collapsed={togglesCollapsed}
          handleClick={() => setTogglesCollapsed(!togglesCollapsed)}
        />
        <Group collapsed={togglesCollapsed}>
          <LinkTo label="Checkbox" path="/checkbox" />
          <LinkTo label="Burger" path="/menu-toggle" />
        </Group>

        <motion.p
          onClick={() => window.open("https://github.com/klutchdev/klutch-documentation", "_blank")}
          style={{
            position: "fixed",
            left: "1.75rem",
            bottom: "1.75rem",
            color: "#666666",
            fontFamily: `Montserrat`,
            margin: "auto auto auto auto",
            fontWeight: 400,
            fontSize: "100%",
            cursor: "default",
          }}
        >
          0.2.3
        </motion.p>

        <br />
      </div>
    </motion.div>
  );
};

const Header = ({ label, user }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <motion.span variants={iconVariants} initial="hidden" animate="visible">
      <FaHome size="2rem" color="#fa8142" />
    </motion.span>
    {/* <motion.h1
      style={{
        textAlign: `left`,
        margin: `auto auto auto 1rem`,
        paddingBottom: "0.25rem",
        fontFamily: `Montserrat`,
        fontSize: "1.75rem",
        fontWeight: 500,
        cursor: "default",
      }}
    >
      {label}
    </motion.h1> */}
    <TextButton
      type="button"
      label={user ? "🔥 " + user.displayName : "👋🏻 Welcome!"}
      width="auto"
      height="2.5rem"
      fontSize="90%"
      fontWeight={400}
      margin="auto 0 auto auto"
      letterSpacing="0"
      padding="0 0.5rem"
      border="1px dashed #292929"
      bgColor="#212121"
      textColor="#666666"
      disabled={false}
      onClick={() => {
        console.log("Welcome!");
      }}
    />
  </div>
);

const SubHeader = ({ label, handleClick, collapsed }) => (
  <motion.div
    positionTransition
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeIn" } }}
    exit={{
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    }}
    onClick={handleClick}
    style={{
      minWidth: "25%",
      maxWidth: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      margin: "0.5rem auto 0.5rem 0",
    }}
  >
    {collapsed ? (
      <FaPlus
        size="1.5rem"
        style={{
          margin: "auto 0.25rem auto 0",
          color: "#fa8142",
          transition: "all 350ms ease",
        }}
      />
    ) : (
      <FaMinus
        size="1.5rem"
        style={{
          margin: "auto 0.25rem auto 0",
          color: "#fa8142",
          transition: "all 350ms ease",
        }}
      />
    )}

    <motion.h3
      style={{
        fontFamily: `Montserrat`,
        fontSize: "150%",
        padding: "0 0.5rem",
        margin: "auto 0",
        textAlign: "center",
        cursor: "default",
      }}
    >
      {label}
    </motion.h3>
  </motion.div>
);

const Group = ({ children, collapsed }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeIn" } }}
      exit={{
        opacity: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {!collapsed && children}
    </motion.div>
  );
};

const LinkTo = ({ label, path }) => (
  <motion.a
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeIn" } }}
    exit={{
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    }}
    style={{
      margin: `0.25rem auto 0.5rem 2.5rem`,
      textAlign: `left`,
      fontSize: `1.25rem`,
      fontWeight: 500,
      color: `#ff4088`,
      fontFamily: "Montserrat",
    }}
    href={path}
  >
    {label}
  </motion.a>
);

export default Home;
