import React from 'react';
import { Card, CardHeader,CardFooter} from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const SignUp: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Image Section */}
      <div className="hidden lg:flex w-1/2 bg-blue-500">
        <img
          src="https://via.placeholder.com/600x800"
          alt="Sign-Up"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-center">Sign Up</h2>
            </CardHeader>
            <div className="p-6">
              {/* CardBody Content */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
              </div>
            </div>
            <CardFooter>
              <Button className="w-full">Sign Up</Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
