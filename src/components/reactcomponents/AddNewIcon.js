import React from 'react';
import AddNewModal from './AddNewModal.js';

/**
 * Component for Add button.
 * Handles opening/closing of the dialog box.
 **/

export default class AddNewIcon extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  openModalDialog() {
    console.log('Clicked');
    this.setState({ isOpen: true });
  }

  closeModalDialog() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <img src='images/plus.png' onClick={() => this.openModalDialog()} />
        <AddNewModal isOpen={this.state.isOpen} onClose={() => this.closeModalDialog()} />
      </div>
    );
  };
};
