import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ToggleBar.css";

export default class ToggleEditor extends Component {
  toggleEditor = () => {
    const { editorEnabled, enableEditor, disableEditor } = this.props;
    if (editorEnabled) {
      disableEditor();
    } else {
      enableEditor();
    }
  };
  render() {
    const { editorEnabled } = this.props;
    const enableText = editorEnabled ? "Disable" : "Enable";
    return (
      <div>
        <input
          type="checkbox"
          name="toggleEditor"
          checked={editorEnabled}
          onChange={this.toggleEditor}
        />
        {enableText} Editor
        <br />
      </div>
    );
  }
}

ToggleEditor.propTypes = {
  editorEnabled: PropTypes.bool.isRequired,
  enableEditor: PropTypes.func.isRequired,
  disableEditor: PropTypes.func.isRequired
};
