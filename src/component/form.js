import React, {Component, PropTypes} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {titleValue: ''};
  }

  static propType = {
    addBookAction: PropTypes.func.isRequired
  }

  handleButtonClick = (event) => {
    event.preventDefault();
    // console.log(this.refs.titleInput);
    this.props.addBookAction(
      // document.getElementById('titleInput').value
      // this.refs.titleInput.value
      this.state.titleValue
    );

    this.setState({ titleValue: ''});
  }
  
  handleTitleChange = (event) => {
    // console.log(event.target.value);
    this.setState({ titleValue: event.target.value })
  }

  render() {
    return (
      <div className="Form">
        <input type='text' 
          placeholder='Book Title' 
          ref='titleInput' 
          value={this.state.titleValue}
          onChange={this.handleTitleChange}
        />
        <button onClick={this.handleButtonClick}>
          Add Book
        </button>
      </div>
    );
  }
}

export default Form;