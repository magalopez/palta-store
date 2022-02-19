import Container from '@components/Container/Container'
import Footer from '@components/Footer/Footer'
import Navbar from '@components/Navbar/Navbar'
import React from 'react'
 
import styles from './layout.module.css'
// CSS Module // 

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>
        { children }
      </Container>
      <Footer />
    </>
  )
}

export default Layout