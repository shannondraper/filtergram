import React from 'react';

const display = {
  display: 'block'
};
const hide = {
  display: 'none'
};

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: false
    }
  }
  toggle(event) {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
    // console.log(this);
  }
  render() {
    var modal = [];
    modal.push(
        <div className="modal" style={this.state.toggle ? display : hide}>
            <div className="modal-content">
                <span onClick={this.toggle}>X</span>
                <h3>Your photo looks great!</h3>
            </div>
            <div className="modalFooter">
                <a className="btn" onClick={this.toggle} href="/view">View Your Post</a>
                <h2>OR</h2>
                <a className="btn" onClick={this.toggle} href="/">Edit Another Photo</a>
            </div>
        </div>
    );
    return (
        <div>
            <a className="btn" onClick={this.toggle}>Modal</a>
            {modal}
        </div>
    );
  }
}
// ReactDOM.render(<Modal />, document.getElementById("root"));
