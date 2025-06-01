import React from 'react'

import NavBar from '../components/NavigationBar'
import Footer from '../components/Footer'

function MainLayout({ children }) {
  return (
    <div>
      <NavBar />          {/* Always at the top */}
      <main style={{ minHeight: '80vh' }}>
        {children}        {/* Dynamic page content */}
      </main>
      <Footer />          {/* Always at the bottom */}
    </div>
  )
}

export default MainLayout