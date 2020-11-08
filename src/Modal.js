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

  componentDidMount() {
    $(this.modal).modal('hide')
  }

  render() {
    const { onSuccess } = this.props;
    return (
      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" ref={modal=> this.modal = modal}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-dark">
              <h5 className="modal-title" id="exampleModalLabel">Successful donation</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-dark">
              Thank you for your donation <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg><br/>
              Please be patient, the payment may take a few minutes to appear.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onSuccess}>Continue</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
