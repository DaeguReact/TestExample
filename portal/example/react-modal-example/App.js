import { useState } from 'react'
import Modal from './components/Modal'
import Portal from './components/Portal'
import logo from './logo.svg'
import './App.css'

function App() {
  const [visibleModal, setVisibleModal] = useState(false)

  const closeModal = () => {
    setVisibleModal(false)
  }

  return (
    <>
      {/* Portal Section */}
      {visibleModal && <Modal onClose={closeModal} error={visibleModal} />}

      {/* HTML Section */}
      <header>
        <h1>WebPage Demo</h1>
        <span>(with Deagu React)</span>
      </header>
      <section>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum a
            totam nesciunt ratione non maiores molestiae in optio sit culpa
            expedita provident, impedit, eos aut facere eaque corrupti rerum ut.
          </p>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              setVisibleModal(true)
            }}
          >
            Button A
          </button>
        </div>
      </section>
    </>
  )
}

export default App
