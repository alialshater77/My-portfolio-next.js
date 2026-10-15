declare module "react-vertical-timeline-component" {
  import type { CSSProperties, FC, ReactNode } from "react"

  export const VerticalTimeline: FC<{
    animate?: boolean
    className?: string
    layout?: "1-column-left" | "1-column-right" | "2-columns"
    lineColor?: string
    children?: ReactNode
  }>

  export const VerticalTimelineElement: FC<{
    className?: string
    contentArrowStyle?: CSSProperties
    contentStyle?: CSSProperties
    date?: string
    icon?: ReactNode
    iconStyle?: CSSProperties
    position?: string
    visible?: boolean
    children?: ReactNode
  }>
}
