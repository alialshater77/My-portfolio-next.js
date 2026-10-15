import { portfolioContent, type PortfolioContent } from "@/lib/portfolio-data"

export async function getPortfolioContent(): Promise<PortfolioContent> {
  return portfolioContent
}
