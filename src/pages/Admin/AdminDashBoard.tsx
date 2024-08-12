"use client";

import { JobApplicationsAreaChart } from '@/components/Admin/JobApplicationsAreaChart';
import { JobApplicationsPieChart } from '@/components/Admin/JobApplicationsPieChart';
import { JobStatsBarChart } from '@/components/Admin/JobStatsBarChart';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  User,
  Users,
  FileText,
  Briefcase,
  UserPlus,
  DollarSign,
  AlertCircle,
  Activity,
} from 'lucide-react';
import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="flex flex-col p-4 h-screen overflow-y-auto">
      <div className="flex flex-wrap mb-4 ">
        <JobApplicationsPieChart />
        <JobApplicationsAreaChart />
        <JobStatsBarChart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* User Analytics */}
        <Card className='border border-primary shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Users
            </CardTitle>
            <Users className="h-8 w-8 text-primary transition-transform transform hover:rotate-12" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10,000</div>
          </CardContent>
        </Card>

        <Card className='border border-primary shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Users
            </CardTitle>
            <User className="h-8 w-8 text-primary transition-transform transform hover:rotate-12" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9,999</div>
          </CardContent>
        </Card>

        <Card className='border border-primary shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              New Users
            </CardTitle>
            <UserPlus className="h-8 w-8 text-primary transition-transform transform hover:rotate-12" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,200</div>
          </CardContent>
        </Card>

        {/* Job Posting Analytics */}
        <Card className='border border-primary shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Job Postings
            </CardTitle>
            <Briefcase className="h-8 w-8 text-primary transition-transform transform hover:rotate-12" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,500</div>
          </CardContent>
        </Card>

        <Card className='border border-primary shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              New Job Postings
            </CardTitle>
            <Briefcase className="h-8 w-8 text-primary transition-transform transform hover:rotate-12" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">500</div>
          </CardContent>
        </Card>

        {/* Application Metrics */}
        <Card className='border border-primary shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Applications
            </CardTitle>
            <FileText className="h-8 w-8 text-primary transition-transform transform hover:rotate-12" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15,000</div>
          </CardContent>
        </Card>

        <Card className='border border-primary shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Applications
            </CardTitle>
            <FileText className="h-8 w-8 text-primary transition-transform transform hover:rotate-12" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,000</div>
          </CardContent>
        </Card>

        {/* Financial Analytics */}
        <Card className='border border-primary shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Revenue
            </CardTitle>
            <DollarSign className="h-8 w-8 text-primary transition-transform transform hover:rotate-12" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$50,000</div>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card className='border border-red-500 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-red-500">
              System Alerts
            </CardTitle>
            <AlertCircle className="h-8 w-8 text-red-500 transition-transform transform hover:rotate-12" />
          </CardHeader>
          <CardContent>
            <div className="text-lg text-red-500">3 Critical Issues</div>
          </CardContent>
        </Card>

        <Card className='border border-primary shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              API Requests
            </CardTitle>
            <Activity className="h-8 w-8 text-primary transition-transform transform hover:rotate-12" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25,000</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AdminDashboard;
