import axios from 'axios';
import React, { FormEvent, useRef } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { BorderBeam } from "../../components/magicui/border-beam";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Register.css";
import { SignUp } from "../services/api";

const Register = () => {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const name = nameRef.current?.value ?? "";
    const email = emailRef.current?.value ?? "";
    const phone = phoneRef.current?.value ?? "";
    const address = addressRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";
    const confirmPassword = confirmPasswordRef.current?.value ?? "";
  
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
  
    try {
      const res = await SignUp(name, email, phone, address, password);
  
      toast.success("Signup Success");
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    } catch (error: any) {
      // Axios errors have response property with details
      if (error.response) {
        const errorMessage = error.response.data?.message || "Signup failed";
        toast.error(errorMessage);
      } else {
        // Handle other errors (network issues, etc.)
        console.error("Error during signup:", error);
        toast.error("Signup failed");
      }
    }
  };
  
  return (
    <section className="bg-gray-50 dark:bg-gray-900 flex items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="relative">
          <BorderBeam className="absolute inset-0 border-gradient rounded-xl" />
          <div className="p-8">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Create Your Account
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Register to get started and explore our platform.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                  Username
                </Label>
                <Input
                  type="text"
                  id="name"
                  ref={nameRef}
                  placeholder="Enter your username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400 transition duration-200 ease-in-out"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  ref={emailRef}
                  placeholder="name@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400 transition duration-200 ease-in-out"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  ref={phoneRef}
                  placeholder="Enter your phone number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400 transition duration-200 ease-in-out"
                  required
                />
              </div>
              <div>
                <Label htmlFor="address" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                  Address
                </Label>
                <Input
                  type="text"
                  id="address"
                  ref={addressRef}
                  placeholder="Enter your address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400 transition duration-200 ease-in-out"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  ref={passwordRef}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400 transition duration-200 ease-in-out"
                  required
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm Password
                </Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  ref={confirmPasswordRef}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400 transition duration-200 ease-in-out"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 text-white font-semibold rounded-lg text-sm px-4 py-2 transition duration-200 ease-in-out"
              >
                Sign Up
              </Button>
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Or sign up with
                </p>
                <Button
                  type="button"
                  className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-500 text-white font-semibold rounded-lg text-sm px-4 py-2 transition duration-200 ease-in-out"
                >
                  <FaGoogle className="mr-2" />
                  Google
                </Button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
