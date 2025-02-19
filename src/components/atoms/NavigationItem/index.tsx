import Link from 'next/link';
import React from 'react'

type NavigationItemProps = {
    name: string;
    url: string;
}

const NavigationItem = ({ name, url }: NavigationItemProps ) => {
  return (
    <Link href={url}>{name}</Link>
  )
}

export default NavigationItem