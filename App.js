import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "../components/ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            patch="/services"
            component={() => <div>Services</div>}
          />
          <Route
            exact
            patch="/customsoftware"
            component={() => <div>Custom Software</div>}
          />
          <Route
            exact
            patch="/mobileapps"
            component={() => <div>Mobile Apps</div>}
          />
          <Route
            exact
            patch="/websites"
            component={() => <div>Websites</div>}
          />
          <Route
            exact
            patch="/revolution"
            component={() => <div>The Revolution</div>}
          />
          <Route exact patch="/about" component={() => <div>About Us</div>} />
          <Route
            exact
            patch="/contact"
            component={() => <div>Contact Us</div>}
          />
          <Route
            exact
            patch="/estimate"
            component={() => <div>Estimate</div>}
          />
          <Route exact patch="/" component={() => <div>Home</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
