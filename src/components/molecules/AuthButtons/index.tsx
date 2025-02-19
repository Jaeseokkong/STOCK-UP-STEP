"use client"

import Button from '@/components/atoms/Button';
import React, { useState } from 'react'

const AuthButtons = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  return (
    <div className='my-auto'>
        {isAuthenticated ? (
            <Button label="Logout" onClick={() => setIsAuthenticated(false)} />
        ) : (
            <Button label="Login" onClick={() => setIsAuthenticated(true)} />
        )}
    </div>
  )
}

export default AuthButtons