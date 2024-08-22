import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="flex">
        <Image
          src="/images/twitter.jpg"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="ほげ"
        />
        <Image
          src="/images/pink-bg.jpg"
          width={1000}
          height={760}
          className="block md:hidden"
          alt="ほげ"
        />
      </div>
    </>
  )
}
