"use client"

import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import { signUp } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null)

  return (
    <div className="max-w-sm flex flex-col items-center">
      <h1 className="text-large-semi mb-6">
        Trở thành thành viên với Lemo Store
      </h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-4">
        Tạo tài khoản Lemo Store để được hưởng những chính sách ưu đãi và trải nghiệm mua hàng tốt nhất
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
        <Input
            label="Họ và tên đệm"
            name="last_name"
            required
            autoComplete="family-name"
          />
          <Input
            label="Tên"
            name="first_name"
            required
            autoComplete="given-name"
          />
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
          />
          <Input label="Số điện thoại" name="phone" type="tel" autoComplete="tel" required />
          <Input
            label="Mật khẩu"
            name="password"
            required
            type="password"
            autoComplete="new-password"
          />
        </div>
        <ErrorMessage error={message} />
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          Bằng việc đăng ký, bạn đồng ý với{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline"
          >
            Chính sách quyền riêng tư 
          </LocalizedClientLink>{" "}
          và{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline"
          >
            Điều khoản sử dụng 
          </LocalizedClientLink>
          {" "}của Lemo Store.
        </span>
        <SubmitButton className="w-full mt-6">Đăng ký</SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Đã có tài khoản?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Đăng nhập ngay
        </button>
        .
      </span>
    </div>
  )
}

export default Register
