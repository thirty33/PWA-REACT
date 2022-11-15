import React, { Suspense } from "react";
import { Logo } from "./components/Logo";
import { GlobalStyles } from "./styles/globalStyles";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import { NotRegisteredUser } from "./pages/NotRegisterUser";
import { User } from "./pages/User";
import Context from "./Context";
import { PageNotFound } from "./pages/404";
import { Home } from "./pages/Home"
import { Detail } from "./pages/Detail";

// import { Favs } from "./pages/Favs";
const Favs = React.lazy(() => import ('./pages/Favs'))

function App(props) {
    return (
        <Suspense fallback={<div />}>
            <Context.Consumer>
                {({ isAuth }) => (
                    <>
                        <BrowserRouter>
                            <GlobalStyles />
                            <Logo />
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    render={(props) => <Home />}
                                ></Route>
                                <Route
                                    exact
                                    path="/pet/:categoryId"
                                    render={(props) => <Home />}
                                ></Route>
                                <Route path="/search">
                                    <>
                                        {/* <PhotoCardDetailed /> */}
                                        <Detail />
                                    </>
                                </Route>
                                <Route
                                    exact
                                    path="/favs"
                                    render={() =>
                                        isAuth ? (
                                            <Favs />
                                        ) : (
                                            <NotRegisteredUser />
                                        )
                                    }
                                />
                                <Route
                                    exact
                                    path="/user"
                                    render={() =>
                                        isAuth ? (
                                            <User />
                                        ) : (
                                            <NotRegisteredUser />
                                        )
                                    }
                                />
                                {!isAuth && (
                                    <Route
                                        exact
                                        component={NotRegisteredUser}
                                        path="/login"
                                    />
                                )}
                                {!isAuth && (
                                    <Redirect from="/favs" to="/login" />
                                )}
                                {!isAuth && (
                                    <Redirect from="/user" to="/login" />
                                )}
                                {isAuth && <Redirect from="/login" to="/" />}
                                
                                <Route
                                    path="/login"
                                    component={NotRegisteredUser}
                                />
                                <Route path="*" component={PageNotFound} />
                            </Switch>
                            <NavBar />
                        </BrowserRouter>
                    </>
                )}
            </Context.Consumer>
        </Suspense>
    );
}

export default App;
