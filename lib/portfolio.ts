import { cacheLife, cacheTag } from "next/cache"
import { portfolioContent, type PortfolioContent } from "@/lib/portfolio-data"

export async function getPortfolioContent(): Promise<PortfolioContent> {
  "use cache"
  cacheLife("max")
  cacheTag("portfolio")

  return portfolioContent
}
