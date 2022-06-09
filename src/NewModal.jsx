import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const  NewModal = (props) =>  {
  
    const [modal, setModal] = useState(false);
    useEffect(() => {
      setModal(true)
    }, []);

    const toggle = () => {
      props.closeError()
      setModal(!modal);
    }
  
      return (
        <div>
          
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>ERROR</ModalHeader>
            <ModalBody>
              {props.error}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>Ok</Button>{' '}
            </ModalFooter>
          </Modal>
        </div>
      );
  }


export default NewModal;