import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaBriefcase, FaChartLine, FaUsers, FaHandshake } from 'react-icons/fa';

Chart.register(ArcElement, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const data = {
    labels: ['Shortlisted', 'Hired', 'Rejected'],
    datasets: [
      {
        label: 'Applications',
        data: [942, 25, 2452],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome To Hire Karma</h1>
        <div className="flex items-center">
          <div className="mr-4">John Doe</div>
          <img src="/path-to-avatar" alt="avatar" className="rounded-full w-10 h-10" />
        </div>
      </header>

      <div className="p-6 flex flex-wrap gap-6">
        <Card className="flex-1 bg-white p-4 shadow">
          <CardHeader className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Job Posts</h2>
              <div className="text-green-500 text-sm">+2.5%</div>
            </div>
            <FaBriefcase size={24} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2,456</div>
          </CardContent>
        </Card>

        <Card className="flex-1 bg-white p-4 shadow">
          <CardHeader className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Total Application</h2>
              <div className="text-red-500 text-sm">-4.4%</div>
            </div>
            <FaChartLine size={24} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">4,561</div>
          </CardContent>
        </Card>

        <Card className="flex-1 bg-white p-4 shadow">
          <CardHeader className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">No of Meetings</h2>
              <div className="text-orange-500 text-sm">+1.5%</div>
            </div>
            <FaUsers size={24} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">125</div>
          </CardContent>
        </Card>

        <Card className="flex-1 bg-white p-4 shadow">
          <CardHeader className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">No of Hirings</h2>
              <div className="text-green-500 text-sm">+4.5%</div>
            </div>
            <FaHandshake size={24} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2,456</div>
          </CardContent>
        </Card>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white p-4 shadow">
          <CardHeader className="flex justify-between">
            <h2 className="text-lg font-semibold">Application Response</h2>
            <a href="#" className="text-blue-500">Download Report</a>
          </CardHeader>
          <CardContent>
            <Doughnut data={data} />
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-center">
              <div className="text-2xl font-bold">942</div>
              <div>Shortlisted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">25</div>
              <div>Hired</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">2,452</div>
              <div>Rejected</div>
            </div>
          </CardFooter>
        </Card>

        <Card className="bg-white p-4 shadow">
          <CardHeader>
            <h2 className="text-lg font-semibold">Recent Job Posts</h2>
            <div className="flex space-x-4">
              <button className="text-blue-500">Monthly</button>
              <button className="text-blue-500">Weekly</button>
              <button className="text-blue-500">Today</button>
            </div>
          </CardHeader>
          <CardContent>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Category</th>
                  <th>Openings</th>
                  <th>Applications</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Example rows */}
                <tr>
                  <td>UI/UX Designer</td>
                  <td>Full Time</td>
                  <td>12</td>
                  <td>135</td>
                  <td className="text-green-500">Active</td>
                </tr>
                <tr>
                  <td>Full Stack Dev</td>
                  <td>Full Time</td>
                  <td>8</td>
                  <td>100</td>
                  <td className="text-red-500">Inactive</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
