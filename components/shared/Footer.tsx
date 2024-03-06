import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <div className="flex items-center md:flex ">
        <Link href='/' className="w-36 flex justify-start items-center gap-2 ">
          <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={38}
            height={38}
          />
          <h2 className="p-medium-16 whitespace-nowrap">Feelit</h2>
          </Link>
          <div className="text-sm flex">
            <p>@ </p>
            <Link href={'https://portfolio-rajeev.vercel.app'} className="underline">RajeevSingh</Link>
          </div>
        </div>
       

        <p>2024 Feelit. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
