import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const WeddingGallery = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Navbar id="reMargin" toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    </>
  )
}

export default WeddingGallery