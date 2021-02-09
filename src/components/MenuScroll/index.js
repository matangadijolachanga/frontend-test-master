import React from 'react'
import Carousel from 'react-elastic-carousel'
import './index.css'

const MenuScroll = ({ children }) => (
    <Carousel
        showArrows={ false }
        showEmptySlots={ false }
        itemsToShow={3}
    >
        { children }
    </Carousel>
)

export default MenuScroll
