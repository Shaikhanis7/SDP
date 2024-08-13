"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", applications: 186, interviews: 80 },
  { month: "February", applications: 305, interviews: 200 },
  { month: "March", applications: 237, interviews: 120 },
  { month: "April", applications: 73, interviews: 190 },
  { month: "May", applications: 209, interviews: 130 },
  { month: "June", applications: 214, interviews: 140 },
]

const chartConfig = {
  applications: {
    label: "Applications",
    color: "hsl(var(--chart-1))",
  },
  interviews: {
    label: "Interviews",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function JobStatsBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Job Stats</CardTitle>
        <CardDescription>Job Applications vs Interviews (Jan - Jun 2024)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 16,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="applications" fill="var(--color-applications)" radius={4} />
            <Bar dataKey="interviews" fill="var(--color-interviews)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Comparing job applications and interviews for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
