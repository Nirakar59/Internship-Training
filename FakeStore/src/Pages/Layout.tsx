import { Outlet } from 'react-router'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Layout = () => {
  return (
    <>
    <title>Home</title>
      <Header />
      <Outlet />
      <Footer /></>
  )
}

export default Layout