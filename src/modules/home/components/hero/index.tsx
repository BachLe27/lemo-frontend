import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import Link from "next/link"
import bgImage from '../../../../../public/nen.jpg'

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 w-full flex flex-row items-center small:p-32 gap-6">

        <div className="flex flex-col gap-5 w-1/2">
          <div className="flex flex-col gap-2">
            <Heading
              level="h1"
              className="text-5xl text-amber-500 leading-10 font-bold uppercase"
              >
              Lemo - Always by your side 
            </Heading>
            <p className="text-lg">
              Quà tặng handmade bằng len móc tại Hoà Lạc
            </p>
          </div>
        
          
            <Button variant="primary" className="bg-amber-500 px-10 text-lg rounded-lg hover:bg-amber-400 text-black">
              <Link
                href="/store"
              >
                Mua ngay
              </Link> 
            </Button>
        </div>

        <div className="flex justify-center w-1/2">
          <Image src={bgImage} alt="bg" width={700} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
