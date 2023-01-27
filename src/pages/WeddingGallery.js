import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Wedding from '../components/WeddingSlider'

const WeddingPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Navbar id="reMargin" toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Wedding />
    <Footer />
    </>
  )
}

export default WeddingPage