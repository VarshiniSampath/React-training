import React, { Component, PropTypes } from 'react';
import SaveFormMutation from '../mutations/SaveFormMutation';
import  { modernEnvironment } from '../../environment.js'

// A stateless component for rendering the label and input box in the modal dialog box.
class InputBox extends Component {

  constructor(props: Object) {
    super(props);
  }

  render() {
    const  {
      type,
      label,
      name,
      placeholder,
    } = this.props;
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <input
          name={name}
          placeholder={placeholder}
          type={type}
        />
      </div>
    );
  }
};

// // InputBox.propTypes = {
//   label: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired
// };

/**
 * Component for Modal Dialog.
 * Contains the form that allows users to add a new publication to the data.
 **/

export default class AddNewModal extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.saveForm = this.saveForm.bind(this);
  }

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

  saveForm(e) {
    e.preventDefault();
    const form = document.getElementById('newPublication');
    const args = {
      input : {
        doi: form.elements['doi'].value,
        title: form.elements['title'].value,
        author: form.elements['author'].value,
        year: parseInt(form.elements['year'].value),
        citationCount: parseInt(form.elements['citationCount'].value)
      }
    }
    console.log('Passing the following object');
    console.log(args);
    SaveFormMutation(modernEnvironment, args, (data, err) => console.log(data));
    window.location = '/';
  }

  render() {
    if (this.props.isOpen) {
      return (
        <div>
          <div className='dialog'>
            <form id='newPublication' onSubmit= {e => this.saveForm(e)}>
              <span onClick={e => this.closeDialog(e)}>x</span>
              <InputBox label='Title' type='text' name='title' placeholder='Enter publication title'/>
              <InputBox label='Author' type='text' name='author' placeholder='Enter author name'/>
              <InputBox label='DOI' type='text' name='doi' placeholder='Enter publication ID'/>
              <InputBox label='Year of publication' type='number' name='year' placeholder='Enter year of publication'/>
              <InputBox label='Citation Count' type='number' name='citationCount' placeholder='Enter #citations'/>
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
