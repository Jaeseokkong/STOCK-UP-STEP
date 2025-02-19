import Logo from '@/components/atoms/AppLogo'
import AuthButtons from '@/components/molecules/AuthButtons'
import NavigationMenu from '@/components/molecules/NavigationMenu'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between px-10 h-[60px]'>
        <Logo />
        <NavigationMenu />
        <AuthButtons />
    </header>
  )
}

export default Header