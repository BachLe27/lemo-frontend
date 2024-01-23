import { Metadata } from "next"
import { notFound } from "next/navigation"

import AddressBook from "@modules/account/components/address-book"

import { getCustomer } from "@lib/data"

import { getRegion } from "app/actions"
import { headers } from "next/headers"

export const metadata: Metadata = {
  title: "Addresses",
  description: "View your addresses",
}

export default async function Addresses() {
  const nextHeaders = headers()
  const countryCode = nextHeaders.get("next-url")?.split("/")[1] || ""
  const customer = await getCustomer()
  const region = await getRegion(countryCode)

  if (!customer || !region) {
    notFound()
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Địa chỉ giao hàng</h1>
        <p className="text-base-regular">
          Xem và cập nhật địa chỉ giao hàng của bạn, bạn có thể thêm bao nhiêu tùy thích. Việc lưu địa chỉ của bạn sẽ giúp chúng có sẵn khi thanh toán.
        </p>
      </div>
      <AddressBook customer={customer} region={region} />
    </div>
  )
}
