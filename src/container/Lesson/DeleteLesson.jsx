import React, { memo } from 'react'
import { Modal } from '../../components';
import { deleteLesson } from '../../utils/api/lesson';
import { showSuccessAlert } from '../../utils/alert';

const DeleteLesson = ({showModal, CloseModal , lesseonId , setDeleteTrue}) => {

    const onDeleteLesson = (lesseonId) =>{
        deleteLesson(lesseonId)
        .then(()=>{
            showSuccessAlert("تم حذف درس بنجاح");
            CloseModal();
            setDeleteTrue(true);
        }).catch(console.error);
    }
  return (
    <Modal showModal={showModal} CloseModal={CloseModal}>
        <button className='bg-red-500 text-white py-2 px-4 rounded' onClick={()=>onDeleteLesson(lesseonId)}>حذف</button>
        <button className='bg-gray-500 text-white py-2 px-4 rounded' onClick={CloseModal}>اغلاق</button>
      </Modal>
  );
};

export default memo(DeleteLesson);