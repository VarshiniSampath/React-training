import React from 'react';
import styles from './css/modal.css';

/**
 * Component for Modal Dialog.
 * Contains the form that allows users to add a new publication to the data.
 **/

export default class AddNewModal extends React.Component {

/**
 * Function to call the close method in enclosing Component when Close icon/background overlay is clicked.
 * @param e Javascript click event
 **/
  closeDialog(e) {
    e.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    if (this.props.isOpen) {
      return (
        <div>
          <div className='dialog'>
            <form method='post' action='/publications/'>
              <span onClick={e => this.closeDialog(e)}>x</span>
              <label htmlFor='title'>Title</label>
              <input type='text' name='title' placeholder='Enter title of the paper' required />
              <label htmlFor='author'>Author</label>
              <input type='text' name='author' placeholder='Enter author name' required />
              <label htmlFor='id'>ID</label>
              <input type='number' name='id' placeholder='Enter publication ID' required />
              <label htmlFor='year'>Year of publication</label>
              <input type='number' name='year' placeholder='Enter year of publication' required />
              <label htmlFor='citationCount'>Citation Count</label>
              <input type='number' name='citationCount' placeholder='Enter #citations' required />
              <input type='submit' value='Submit' />
             </form>
            </div>
          <div className='overlay' onClick={e => this.closeDialog(e)} />
        </div>
      );
    } else {
      return null;
    }
  }
};
