import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import MenuContextProvider from "./contexts/menuContext";
import FloatingActionButton from "./components/FloatingActionButton";
import MenuDrawer from "./components/MenuDrawer";
import Home from "./views/Home";
import useMedia from "./hooks/useMedia";
import { FaGithub, FaSignOutAlt, FaTwitter } from "react-icons/fa";
import { auth, googleSignIn } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { motion } from "framer-motion";
const AvatarImage = lazy(() => import("./components/AvatarImage"));
const IconButton = lazy(() => import("./components/IconButton"));
const TextButton = lazy(() => import("./components/TextButton"));
const AvatarPage = lazy(() => import("./views/AvatarPage"));
const BannerPage = lazy(() => import("./views/BannerPage"));
const CheckboxPage = lazy(() => import("./views/CheckboxPage"));
const TextInputPage = lazy(() => import("./views/TextInputPage"));
const MenuTogglePage = lazy(() => import("./views/MenuTogglePage"));
const IconButtonPage = lazy(() => import("./views/IconButtonPage"));
const ModalAlertPage = lazy(() => import("./views/ModalAlertPage"));
const ModalPromptPage = lazy(() => import("./views/ModalPromptPage"));
const BasicButtonPage = lazy(() => import("./views/BasicButtonPage"));
const TextButtonPage = lazy(() => import("./views/TextButtonPage"));
const PasswordInputPage = lazy(() => import("./views/PasswordInputPage"));
const SearchInputPage = lazy(() => import("./views/SearchInputPage"));
const OutlineButtonPage = lazy(() => import("./views/OutlineButtonPage"));
const LoadingButtonPage = lazy(() => import("./views/LoadingButtonPage"));
const ProgressButtonPage = lazy(() => import("./views/ProgressButtonPage"));

const Loading = () => (
  <div
    style={{
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      height: `100vh`,
      width: `100vw`,
    }}
  >
    <h1 style={{ margin: `auto` }}>Loading...</h1>
  </div>
);

const App = () => {
  const [user, loading] = useAuthState(auth);
  const isDesktop = useMedia("(min-width: 1024px)");

  const history = useHistory();

  const signOut = async () => {
    await auth.signOut().then(() => {
      history.replace("/");
    });
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <MenuContextProvider>
        <FloatingActionButton />
        <Suspense fallback={<Loading />}>
          <MenuDrawer
            position="fixed"
            width={isDesktop ? "calc(35vw)" : "calc(70vw)"}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "1rem auto auto auto ",
                width: "100%",
                height: "100vh",
              }}
            >
              <AvatarImage />
              <br />

              <TextButton
                type="button"
                label={user ? "🔥 " + user.displayName : "👋🏻 Welcome!"}
                width="auto"
                height="3rem"
                margin="1rem auto"
                letterSpacing="1.25px"
                padding="0 1.5rem"
                border="1px dashed #333333"
                bgColor="#21222b"
                textColor="#22da6b"
                disabled={false}
                onClick={() => {
                  console.log("Welcome!");
                }}
              />
              <IconButton
                type="button"
                icon={
                  <FaGithub size="1.5rem" style={{ marginRight: "0.5rem" }} />
                }
                label="View on Github"
                width="auto"
                margin="1rem auto"
                bgColor="linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%)"
                textColor="#000000"
                fontSize="110%"
                letterSpacing="0"
                disabled={false}
                onClick={() =>
                  window.open(
                    "https://github.com/klutchdev/klutch-documentation",
                    "_blank"
                  )
                }
              />
              <IconButton
                type="button"
                icon={
                  <FaTwitter size="1.5rem" style={{ marginRight: "0.5rem" }} />
                }
                label="@klutchDev"
                width="auto"
                margin="1rem auto"
                letterSpacing="1.25px"
                bgColor="#0091eb"
                textColor="#d9d9d9"
                disabled={false}
                onClick={() =>
                  window.open("https://twitter.com/klutchdev", "_blank")
                }
              />
              <br />
              <Footer />
              <div style={{ height: "35%", margin: "0 auto 0 auto" }} />
              {user ? (
                <IconButton
                  type="button"
                  label="Sign out"
                  icon={
                    <FaSignOutAlt
                      size="1.5rem"
                      style={{ margin: "auto 0.5rem" }}
                    />
                  }
                  width="100%"
                  margin="0 1rem 1rem 1rem"
                  fontSize="130%"
                  fontWeight={700}
                  letterSpacing="1.25px"
                  bgColor="#dc4040"
                  textColor="#030303"
                  disabled={false}
                  onClick={signOut}
                />
              ) : (
                <IconButton
                  type="button"
                  label="Login with Google"
                  width="auto"
                  margin="0 auto 1rem auto"
                  fontSize="110%"
                  fontWeight={700}
                  letterSpacing="0"
                  bgColor="#dc4040"
                  textColor="#030303"
                  disabled={false}
                  onClick={googleSignIn}
                />
              )}
            </div>
          </MenuDrawer>
          <Router>
            <Switch>
              <Route component={AvatarPage} exact path="/avatar" />
              <Route component={BasicButtonPage} exact path="/basic-button" />
              <Route component={CheckboxPage} exact path="/checkbox" />
              <Route component={IconButtonPage} exact path="/icon-button" />
              <Route
                component={LoadingButtonPage}
                exact
                path="/loading-button"
              />
              <Route component={MenuTogglePage} exact path="/menu-toggle" />
              <Route component={ModalAlertPage} exact path="/modal-alert" />
              <Route component={ModalPromptPage} exact path="/modal-prompt" />
              <Route
                component={OutlineButtonPage}
                exact
                path="/outline-button"
              />
              <Route
                component={PasswordInputPage}
                exact
                path="/password-input"
              />
              <Route
                component={ProgressButtonPage}
                exact
                path="/progress-button"
              />
              <Route component={SearchInputPage} exact path="/search-input" />
              <Route component={TextButtonPage} exact path="/text-button" />
              <Route component={TextInputPage} exact path="/text-input" />
              <Route component={BannerPage} exact path="/top-banner" />
              <Route component={Home} path="/" />
            </Switch>
          </Router>
        </Suspense>
      </MenuContextProvider>
    );
  }
};

const Footer = () => {
  return (
    <motion.a
      href="mailto: klutchdevelopment@gmail.com"
      style={{
        // textAlign: "center",
        color: "#00bbff",
        fontFamily: `Montserrat`,
        margin: "auto",
        fontWeight: 600,
        fontSize: "110%",
        cursor: "default",
        textDecoration: "none",
      }}
    >
      <small
        style={{
          textAlign: "left",
          margin: "auto auto auto 0",
          color: "#6b6f71",
          fontWeight: 500,
        }}
      >
        author
      </small>
      <br />
      KlutchDevelopment
    </motion.a>
  );
};

export default App;
