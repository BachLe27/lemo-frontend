import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div className="py-48 px-2 flex flex-col justify-center items-start">
      <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        Giỏ hàng của bạn
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        {/* You don&apos;t have anything in your cart. Let&apos;s change that, use
        the link below to start browsing our products. */}

        Bạn chưa có sản phẩm ưng ý trong giỏ hàng, hãy cùng chúng mình lựa chọn một sản phẩm dễ thương ngay nhé.
      </Text>
      <div>
        <InteractiveLink href="/store">Tìm len ngay nào :3</InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
