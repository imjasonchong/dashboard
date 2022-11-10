import React from 'react'
import MainLayout from '../../Layout/Main'
import NavBar from '../NavBar'
import Footer from '../Footer/index'
import NavLinks from '../NavLinks/index'
import '../../main.css'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import logo from '../../Assets/logo.svg'
import bar from '../../Assets/bar.svg'
import Router from '../Router/index'
const App = () => {
  return (
    <div className='app-wrapper'>
        <MainLayout
            header=
            {
                <NavBar 
                    logo={<object data={logo} width="auto" height="100%"> </object>} 
                    links={<NavLinks/>}
                    mobile={<object data={bar} width='100%' height='100%'> </object>}
                />
            }
            body={<Router/>}
            footer={<Footer/>}
        />
    </div>
  )
}

export default App