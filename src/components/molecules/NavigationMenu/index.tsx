import NavigationItem from '@/components/atoms/NavigationItem'
import React from 'react'

const NavigationList = [
    {
        name: '-',
        url: 'tips'
    },
    {
        name: '-',
        url: 'study'
    },
    {
        name: '-',
        url: 'portfolio'
    }
]

const NavigationMenu = () => {
    
  return ( 
    <nav className="inline-flex my-auto mr-auto pl-10 space-x-4">
        {NavigationList.map((item) => (
            <NavigationItem key={item.url} name={item.name} url={item.url} />
        ))}
    </nav>
  )
}

export default NavigationMenu
