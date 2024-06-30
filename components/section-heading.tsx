import { ReactNode } from "react"

type SectionHeadingProps = {
  children: ReactNode,
}

export default function SectionHeading({ children } : SectionHeadingProps) {
  return (
    <h2 className="font-medium text-3xl capitalize mb-8 text-center">{children}</h2>
  )
}
