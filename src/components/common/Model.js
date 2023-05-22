import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

export const Model = ({
  showModal,
  closeModal,
  title,
  containerClassName,
  contentClassName,
  bodyClassName,
  closeIcon,
  children,
}) => (
  <Modal
    isOpen={showModal}
    toggle={() => closeModal()}
    className={containerClassName}
    contentClassName={contentClassName}
    centered
  >
    <ModalHeader toggle={() => closeModal()}>{title}</ModalHeader>
    <ModalBody className={`${bodyClassName}`}>
      {children}
    </ModalBody>
  </Modal>
)
