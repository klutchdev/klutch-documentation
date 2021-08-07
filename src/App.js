import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { motion } from "framer-motion";
import useMedia from "./hooks/useMedia";
import { auth, googleSignIn, logOut } from "./firebase";
import { useAuthState } from "klutch-fire-hooks/auth";
// import useAuthState from "./hooks/useAuthState";
import { FaGithub, FaSignOutAlt, FaTwitter } from "react-icons/fa";
import Home from "./views/Home";
import MenuDrawer from "./components/MenuDrawer";
import FloatingActionButton from "./components/FloatingActionButton";
const ShowErr = lazy(() => import("./components/ShowErr"));
const AvatarImage = lazy(() => import("./components/AvatarImage"));
const IconButton = lazy(() => import("./components/IconButton"));
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
    <h1 style={{ margin: `auto`, fontWeight: 500 }}>Loading...</h1>
  </div>
);

const App = () => {
  const [user, loading, error] = useAuthState(auth);
  const isDesktop = useMedia("(min-width: 1080px)");
  const isLandscape = useMedia("(max-width: 1080px) and (max-height: 600px)");

  // const history = useHistory();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ShowErr err={error} />;
  } else {
    return (
      <>
        <Suspense fallback={<Loading />}>
          <FloatingActionButton />
          <MenuDrawer
            position="fixed"
            height={isDesktop ? "calc(100vh)" : isLandscape ? "calc(100vh)" : "100vh"}
            width={isDesktop ? "calc(35vw)" : isLandscape ? "calc(45vw)" : "calc(70vw)"}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                margin: "0.5rem auto 1rem auto",
                width: "100%",
                height: "100%",
              }}
            >
              <AvatarImage />

              {isLandscape ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <IconButton
                    type="button"
                    icon={<FaGithub size="1.5rem" style={{ marginRight: "0.5rem" }} />}
                    label="Open Github"
                    width="auto"
                    height="2.5rem"
                    margin="0.5rem auto"
                    bgColor="linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%)"
                    textColor="#000000"
                    fontSize="70%"
                    letterSpacing="0"
                    disabled={false}
                    onClick={() =>
                      window.open("https://github.com/klutchdev/klutch-documentation", "_blank")
                    }
                  />
                  <IconButton
                    type="button"
                    icon={<FaTwitter size="1.5rem" style={{ marginRight: "0.5rem" }} />}
                    label="@klutchDev"
                    width="auto"
                    height="2.5rem"
                    margin="0.5rem auto"
                    fontSize="70%"
                    letterSpacing="1.1px"
                    bgColor="#0091eb"
                    textColor="#d9d9d9"
                    disabled={false}
                    onClick={() => window.open("https://twitter.com/klutchdev", "_blank")}
                  />
                </div>
              ) : (
                <>
                  <IconButton
                    type="button"
                    icon={<FaGithub size="1.5rem" style={{ marginRight: "0.5rem" }} />}
                    label="View on Github"
                    width="auto"
                    margin="0.5rem"
                    bgColor="linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%)"
                    textColor="#000000"
                    fontSize="110%"
                    letterSpacing="0"
                    disabled={false}
                    onClick={() =>
                      window.open("https://github.com/klutchdev/klutch-documentation", "_blank")
                    }
                  />
                  <IconButton
                    type="button"
                    icon={<FaTwitter size="1.5rem" style={{ marginRight: "0.5rem" }} />}
                    label="@klutchDev"
                    width="auto"
                    margin="0.5rem auto"
                    letterSpacing="1.25px"
                    bgColor="#0091eb"
                    textColor="#d9d9d9"
                    disabled={false}
                    onClick={() => window.open("https://twitter.com/klutchdev", "_blank")}
                  />
                </>
              )}

              <Footer />
              <div style={{ height: "25%", margin: "1rem auto 0.5rem auto" }} />
              {user ? (
                <IconButton
                  type="button"
                  label="Sign out"
                  icon={<FaSignOutAlt size="1.5rem" style={{ margin: "auto 0.5rem" }} />}
                  width="auto"
                  height="2.5rem"
                  margin="0 1rem 1rem 1rem"
                  fontSize="110%"
                  fontWeight={700}
                  letterSpacing="1.1px"
                  bgColor="#dc4040"
                  textColor="#030303"
                  disabled={false}
                  onClick={logOut}
                />
              ) : (
                <IconButton
                  type="button"
                  label="Login with Google"
                  width="auto"
                  height="2.5rem"
                  margin="0 auto 1rem 1rem"
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
              <Route component={LoadingButtonPage} exact path="/loading-button" />
              <Route component={MenuTogglePage} exact path="/menu-toggle" />
              <Route component={ModalAlertPage} exact path="/modal-alert" />
              <Route component={ModalPromptPage} exact path="/modal-prompt" />
              <Route component={OutlineButtonPage} exact path="/outline-button" />
              <Route component={PasswordInputPage} exact path="/password-input" />
              <Route component={ProgressButtonPage} exact path="/progress-button" />
              <Route component={SearchInputPage} exact path="/search-input" />
              <Route component={TextButtonPage} exact path="/text-button" />
              <Route component={TextInputPage} exact path="/text-input" />
              <Route component={BannerPage} exact path="/top-banner" />
              <Route component={Home} path="/" />
            </Switch>
          </Router>
        </Suspense>
      </>
    );
  }
};

const Footer = () => {
  return (
    <motion.a
      href="mailto: klutchdevelopment@gmail.com"
      style={{
        color: "#00bbff",
        fontFamily: `Montserrat`,
        margin: "0 auto",
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
