
import React from 'react'
import Footer from './Footer'
import AddItem from '../containers/AddItem'
import {DisplayItemList} from '../containers/DisplayItemList'

const App = () => (
    <div>
        <AddItem/>
        <DisplayItemList/>
        <Footer/>
    </div>
)
export {App}