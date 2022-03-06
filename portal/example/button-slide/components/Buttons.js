import React, { useRef, useState } from 'react'
import st from './Button.module.css'
import Modal from './Modal'

const Button = (props) => {
  const [modalVisible, setModalVisible] = useState(false)

  const modalHanlder = () => {
    setModalVisible(true)

    setTimeout(() => {
      setModalVisible(false)
    }, 3000)
  }

  return (
    <>
      {
        <Modal>
          <div
            className={`${modalVisible ? 'modal-visible' : 'modal-invisible'} ${
              props.className ?? ''
            }`}
          >
            {props.children}
          </div>
        </Modal>
      }
      <button
        className={`${props.className} ${st.button}`}
        onClick={modalHanlder}
      >
        {props.children}
      </button>
    </>
  )
}
export default Button
