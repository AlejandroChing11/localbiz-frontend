import Link from "next/link";

export function BizLogo() {
  return (
    <div className="-mx-6 px-6 py-4">
      <Link
        href="#"
        title="home"
      >
        <img src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg" className="w-32" alt="tailus logo" />
      </Link>
    </div>
  )
}