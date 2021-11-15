import React from 'react';
import $ from 'jquery';
import bootstrap from 'bootstrap';

class Modal extends React.Component {
  constructor(props) {
      super(props);
      this.modal = null;
      this.show.bind(this);
  }

  show() {
    $(this.modal).modal('show')
  }

  hide() {
    $(this.modal).modal('hide')
  }

  componentDidMount() {
    $(this.modal).modal('hide')
  }

  render() {
    const { onSuccess, title } = this.props;
    const buttonText = this.props.buttonText || "Continue"
    return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" ref={modal=> this.modal = modal}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-dark">
              <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-dark">
              { this.props.children }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onSuccess}>{buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
