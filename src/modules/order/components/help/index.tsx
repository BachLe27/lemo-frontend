import { Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React from "react"

const Help = () => {
  return (
    <div className="mt-6">
      <Heading className="text-base-semi">Bạn cần hỗ trợ à?</Heading>
      <div className="text-base-regular my-2">
        <ul className="gap-y-2 flex flex-col">
          <li>
            <LocalizedClientLink href="https:fb.com/lecongbach27">Liên hệ</LocalizedClientLink>
          </li>
          <li>
            <LocalizedClientLink href="https:fb.com/lecongbach27">
              Hoàn trả và đổi hàng
            </LocalizedClientLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Help
