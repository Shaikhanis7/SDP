import React from 'react';
import { TrendingUp } from 'lucide-react';
import { RadialBarChart, RadialBar, LabelList, LineChart, Line, CartesianGrid, XAxis, BarChart, Bar } from 'recharts';
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from '@/components/ui/card';
import {
  ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig
} from '@/components/ui/chart';

// Sample data for demonstration
const browserData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const userGrowthData = [
  { month: "January", users: 186 },
  { month: "February", users: 305 },
  { month: "March", users: 237 },
  { month: "April", users: 73 },
  { month: "May", users: 209 },
  { month: "June", users: 214 },
];

const jobCategoryData = [
  { category: "IT", postings: 120 },
  { category: "Healthcare", postings: 90 },
  { category: "Finance", postings: 75 },
  { category: "Education", postings: 60 },
  { category: "Retail", postings: 45 },
];

const applicationData = [
  { month: "January", applications: 150 },
  { month: "February", applications: 230 },
  { month: "March", applications: 180 },
  { month: "April", applications: 80 },
  { month: "May", applications: 190 },
  { month: "June", applications: 210 },
];

const browserChartConfig = {
  chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
  safari: { label: "Safari", color: "hsl(var(--chart-2))" },
  firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
  edge: { label: "Edge", color: "hsl(var(--chart-4))" },
  other: { label: "Other", color: "hsl(var(--chart-5))" },
} satisfies ChartConfig;

const userGrowthChartConfig = {
  users: { label: "Users", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig;

const jobCategoryChartConfig = {
  postings: { label: "Postings", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig;

const applicationChartConfig = {
  applications: { label: "Applications", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig;

const AdminDashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Browser Analytics */}
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Visitor Analytics</CardTitle>
          <CardDescription>Browser Distribution (Jan - Jun 2024)</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer config={browserChartConfig} className="mx-auto aspect-square max-h-[250px]">
            <RadialBarChart data={browserData} startAngle={-90} endAngle={380} innerRadius={30} outerRadius={110}>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel nameKey="browser" />} />
              <RadialBar dataKey="visitors" background>
                <LabelList position="insideStart" dataKey="browser" className="fill-white capitalize mix-blend-luminosity" fontSize={11} />
              </RadialBar>
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors by browser for the last 6 months
          </div>
        </CardFooter>
      </Card>

      {/* User Growth */}
      <Card>
        <CardHeader>
          <CardTitle>User Growth</CardTitle>
          <CardDescription>Monthly Users (Jan - Jun 2024)</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={userGrowthChartConfig}>
            <LineChart data={userGrowthData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Line dataKey="users" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing the number of desktop users over the last 6 months
          </div>
        </CardFooter>
      </Card>

      {/* Job Postings by Category */}
      <Card>
        <CardHeader>
          <CardTitle>Job Postings by Category</CardTitle>
          <CardDescription>Distribution of Job Postings (Jan - Jun 2024)</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={jobCategoryChartConfig}>
            <BarChart data={jobCategoryData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="category" tickLine={false} tickMargin={10} axisLine={false} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Bar dataKey="postings" fill="var(--color-desktop)" radius={8} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Job postings across various categories
          </div>
          <div className="leading-none text-muted-foreground">
            Showing job posting distribution from January to June 2024
          </div>
        </CardFooter>
      </Card>

      {/* Applications Received */}
      <Card>
        <CardHeader>
          <CardTitle>Applications Received</CardTitle>
          <CardDescription>Monthly Applications (Jan - Jun 2024)</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={applicationChartConfig}>
            <LineChart data={applicationData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Line dataKey="applications" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Application trends over the past 6 months
          </div>
          <div className="leading-none text-muted-foreground">
            Total number of applications received from January to June 2024
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminDashboard;
