import React from 'react';
import { Card, CardHeader, CardContent, CardFooter, } from '@/components/ui/card';
import {Button } from '@/components/ui/button';
import { Briefcase, User, SettingsIcon } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold text-primary mb-4'>Settings</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Card>
          <CardHeader>
            <SettingsIcon />
            <h2 className='text-lg font-semibold'>General Settings</h2>
          </CardHeader>
          <CardContent>
            <p>Manage your profile, notifications, and account settings.</p>
          </CardContent>
          <CardFooter>
            <Button>Go to Settings</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Briefcase size={24} className='text-primary' />
            <h2 className='text-lg font-semibold'>Job Posting Settings</h2>
          </CardHeader>
          <CardContent>
            <p>Configure job posting preferences and templates.</p>
          </CardContent>
          <CardFooter>
            <Button>Go to Job Postings</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <User size={24} className='text-primary' />
            <h2 className='text-lg font-semibold'>User Management</h2>
          </CardHeader>
          <CardContent>
            <p>Manage roles, permissions, and user access.</p>
          </CardContent>
          <CardFooter>
            <Button>Go to User Management</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
