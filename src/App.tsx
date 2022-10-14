import React from 'react'
import {Navbar, Footer} from './components/';

const xssPayloads = [
    'onload=alert(1)><svg/1=',
    '>alert(1)</script><script/1='
]

const App = () => {
    return (
        <div style={{height: '30rem', width: '10rem'}}>
            <Navbar/>



            <Footer/>
        </div>
    )
}

export default App
