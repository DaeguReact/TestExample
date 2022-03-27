import ReactDOM from 'react-dom'
import Modal from './Modal'

const Portal = (props) => {
  return ReactDOM.createPortal(
    props.children,
    document.getElementById('portal'),
  )
}

export default Portal
