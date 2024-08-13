import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, FileText, Briefcase, UserPlus, DollarSign, AlertCircle, Activity } from 'lucide-react';

const AdminDashboard: React.FC = () => {
    return (
        <div className="flex flex-wrap p-4 gap-4">
            {/* User Analytics */}
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Users
                    </CardTitle>
                    <Users className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">10,000</div>
                </CardContent>
            </Card>

            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Active Users
                    </CardTitle>
                    <User className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">9,999</div>
                </CardContent>
            </Card>

            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        New Users
                    </CardTitle>
                    <UserPlus className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">1,200</div>
                </CardContent>
            </Card>

            {/* Job Posting Analytics */}
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Job Postings
                    </CardTitle>
                    <Briefcase className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">2,500</div>
                </CardContent>
            </Card>

            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        New Job Postings
                    </CardTitle>
                    <Briefcase className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">500</div>
                </CardContent>
            </Card>

            {/* Application Metrics */}
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Applications
                    </CardTitle>
                    <FileText className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">15,000</div>
                </CardContent>
            </Card>

            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Pending Applications
                    </CardTitle>
                    <FileText className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">3,000</div>
                </CardContent>
            </Card>

            {/* Financial Analytics */}
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Revenue
                    </CardTitle>
                    <DollarSign className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">$50,000</div>
                </CardContent>
            </Card>

            {/* System Health */}
            <Card className='w-1/4 border border-red-500'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-red-500">
                        System Alerts
                    </CardTitle>
                    <AlertCircle className="h-6 w-6 text-red-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-lg text-red-500">3 Critical Issues</div>
                </CardContent>
            </Card>

            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        API Requests
                    </CardTitle>
                    <Activity className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">25,000</div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminDashboard;
