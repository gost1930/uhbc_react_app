import React, { memo } from 'react'
import { Modal } from '../../components';


const EditLesson = ({showModal, CloseModal}) => {
  return (
    <Modal showModal={showModal} CloseModal={CloseModal}>
        
      </Modal>
  );
};

export default memo(EditLesson);