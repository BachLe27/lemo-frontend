import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import Link from "next/link"
import lemoLogo from '../../../../../public/lemo-logo.png'

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <div className="flex items-center flex-col justify-center">
          <Image 
            width={300}
            height={300}
            src={lemoLogo}
            alt="logo"
            style={{
              borderRadius: '40%'
            }}
          />
          <Heading
            level="h2"
            className="text-xl leading-10 text-ui-fg-subtle font-normal text-amber-600"
          >
            Cùng nhau tìm kiếm quà tặng len móc!
          </Heading>
        </div>
        <Link
          href="/store"
        >
          <Button variant="primary" className="bg-amber-500 outline-none border-0 hover:bg-amber-400 text-slate-50">
            Mua ngay
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
