import React, { Component } from "react";

import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />

        <CoolButton isSmall isDanger isDark className="is-rounded my-class">
          Success
        </CoolButton>
        <CoolButton isLarge isSuccess>
          Fail
        </CoolButton>
      </div>
    );
  }
}

export default App;
