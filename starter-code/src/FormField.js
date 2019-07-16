import React, { Component } from "react";
import "bulma/css/bulma.css";

class FormField extends Component {
  render() {
    return (
      <div>
        <div className="field">
          <label className="label">{this.props.label}</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder={this.props.placeholder}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FormField;
