import React, { Component } from "react";
import "bulma/css/bulma.css";

class CoolButton extends Component {
  render() {
    const all = {
      isActive: "is-active",
      isBlack: "is-black",
      isCentered: "is-centered",
      isDanger: "is-danger",
      isDark: "is-dark",
      isFocused: "is-focused",
      isGrouped: "is-grouped",
      isHovered: "is-hovered",
      isInfo: "is-info",
      isInverted: "is-inverted",
      isLarge: "is-large",
      isLight: "is-light",
      isLink: "is-link",
      isLoading: "is-loading",
      isMedium: "is-medium",
      isOutlined: "is-outlined",
      isPrimary: "is-primary",
      isRight: "is-right",
      isRounded: "is-rounded",
      isSelected: "is-selected",
      isSmall: "is-small",
      isStatic: "is-static",
      isSuccess: "is-success",
      isText: "is-text",
      isWarning: "is-warning",
      isWhite: "is-white"
    };

    let allClasses = "button ";

    Object.keys(this.props).forEach(prop => {
      if (prop) {
        allClasses += all[prop] + " ";
      }
    });

    // const allClasses = `
    // button
    // ${this.props.className ? this.props.className : ""}
    // ${this.props.isSmall ? "is-small" : ""}
    // ${this.props.isDanger ? "is-danger" : ""}
    // ${this.props.isSuccess ? "is-success" : ""}
    // `;

    return <a className={allClasses}>{this.props.children}</a>;
  }
}

export default CoolButton;
