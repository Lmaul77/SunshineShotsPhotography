import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection'
import InfoSection from '../components/InfoSection'
import { weddingObjone, portraitObjone, newbornObjone, boudiourObjone } from '../components/InfoSection/Data'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
     <Sidebar isOpen={isOpen} toggle={toggle}/>
     <Navbar toggle={toggle}/>
     <HomeSection />
     <InfoSection {...weddingObjone}/>
     <InfoSection {...portraitObjone}/>
     <InfoSection {...newbornObjone}/>
     <InfoSection {...boudiourObjone}/>
     <Footer />
    </>
  )
}

export default Home