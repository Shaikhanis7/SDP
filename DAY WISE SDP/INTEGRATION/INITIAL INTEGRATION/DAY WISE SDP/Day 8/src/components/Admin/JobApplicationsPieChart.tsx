"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

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
  { jobType: "Full-time", applications: 275, fill: "var(--color-full-time)" },
  { jobType: "Part-time", applications: 200, fill: "var(--color-part-time)" },
  { jobType: "Contract", applications: 287, fill: "var(--color-contract)" },
  { jobType: "Internship", applications: 173, fill: "var(--color-internship)" },
  { jobType: "Freelance", applications: 190, fill: "var(--color-freelance)" },
]

const chartConfig = {
  applications: {
    label: "Applications",
  },
  fullTime: {
    label: "Full-time",
    color: "hsl(var(--chart-1))",
  },
  partTime: {
    label: "Part-time",
    color: "hsl(var(--chart-2))",
  },
  contract: {
    label: "Contract",
    color: "hsl(var(--chart-3))",
  },
  internship: {
    label: "Internship",
    color: "hsl(var(--chart-4))",
  },
  freelance: {
    label: "Freelance",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function JobApplicationsPieChart() {
  const totalApplications = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.applications, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Job Applications by Type</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="applications"
              nameKey="jobType"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalApplications.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Applications
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total job applications for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
