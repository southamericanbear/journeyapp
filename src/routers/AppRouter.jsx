import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { firebase } from "../firebase/firebaseConfig";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { loadNotes } from "../helpers/loadNotes";
import { setNotes, startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLogged(true);
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLogged(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth/login"
            isLogged={isLogged}
            component={AuthRouter}
          />

          <PrivateRoute
            path="/"
            component={JournalScreen}
            isLogged={isLogged}
          />
        </Switch>
      </div>
    </Router>
  );
};
