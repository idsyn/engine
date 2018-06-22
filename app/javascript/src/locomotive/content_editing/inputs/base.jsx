import React, { Component } from 'react';
import withRedux from '../utils/with_redux';

// Components
import TextInput from './text.jsx';
import CheckboxInput from './checkbox.jsx';
import SelectInput from './select.jsx';
import RadioInput from './radio.jsx';

class Base extends Component {

  // TODO: textarea, image_picker
  getInput() {
    switch (this.props.setting.type) {
      case 'text':      return TextInput;
      case 'checkbox':  return CheckboxInput;
      case 'select':    return SelectInput;
      case 'radio':     return RadioInput;
      default:
        console.log(`[Editor] Warning! Unknown input type: "${this.props.setting.type}"`);
        return null;
    }
  }

  render() {
    const Input = this.getInput();
    return Input !== null ? <Input {...this.props} /> : null;
  }

}

export default withRedux(Base, state => { return { site: state.site, page: state.page } });
