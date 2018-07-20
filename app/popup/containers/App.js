import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ToggleEditor from "../components/ToggleEditor";
import * as EditorActions from "../../actions/editors";

const mapStateToProps = state => ({
  editorEnabled: state.editors.editorEnabled
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(EditorActions, dispatch)
});

class App extends Component {
  static propTypes = {
    editorEnabled: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { editorEnabled, actions } = this.props;
    return (
      <div>
        <ToggleEditor
          editorEnabled={editorEnabled}
          enableEditor={actions.enableEditor}
          disableEditor={actions.disableEditor}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
