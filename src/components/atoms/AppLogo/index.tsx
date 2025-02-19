import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className="h-[40px] my-auto">
      <Image src='/logo.png' alt="logo image" width={40} height={40} />
    </Link>
  )
}

export default Logo