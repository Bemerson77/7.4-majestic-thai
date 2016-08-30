/* complete jsx */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var ModalBody = require('react-bootstrap/lib/ModalBody');
require('backbone-react-component');



// local


var CompleteComponent = React.createClass({


  render: function() {

    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.props.close}>
          <ModalBody>
            <h1 className="modal-text">total: &#36; {this.props.total}</h1>
          </ModalBody>
          <Modal.Footer>
            <Button onClick={this.props.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

module.exports = CompleteComponent;
