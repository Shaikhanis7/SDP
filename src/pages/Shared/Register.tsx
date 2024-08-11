import React, { useRef } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { BorderBeam } from "../../components/magicui/border-beam";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Register.css"; 

// Mock SignUp function
const SignUp = async (name: string, email: string, phone: string, address: string, password: string) => {
  // Replace with actual API call
  return fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, phone, address, password }),
  });
};

const Register: React.FC = () => {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const phone = phoneRef.current?.value || "";
    const address = addressRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const confirmPassword = confirmPasswordRef.current?.value || "";

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const res = await SignUp(name, email, phone, address, password);

    if (res.status === 200) {
      toast.success("Signup Success");
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    } else {
      const errorData = await res.json();
      toast.error(errorData.message || "Signup failed");
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 flex items-center justify-center min-h-screen p-4">
      <div className="flip-container relative flex items-center justify-center w-full max-w-md">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="relative flex flex-col items-center justify-center w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 border-transparent bg-clip-padding backdrop-filter backdrop-blur-lg">
                {/* Add BorderBeam here */}
                <BorderBeam className="absolute inset-0 border-gradient rounded-2xl" />

                <h1 className="text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white mb-3">
                  Create Your Account
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Register to get started and explore our platform.
                </p>
                <form className="space-y-3 w-full" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <Label
                      htmlFor="name"
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
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
                  <div className="mb-3">
                    <Label
                      htmlFor="email"
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
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
                  <div className="mb-3">
                    <Label
                      htmlFor="phone"
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
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
                  <div className="mb-3">
                    <Label
                      htmlFor="address"
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
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
                  <div className="mb-3">
                    <Label
                      htmlFor="password"
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
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
                  <div className="mb-4">
                    <Label
                      htmlFor="confirm-password"
                      className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm Password
                    </Label>
                    <Input
                      type="password"
                      id="confirm-password"
                      ref={confirmPasswordRef}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400 transition duration-200 ease-in-out"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-200 ease-in-out"
                  >
                    Sign up
                  </Button>

                  <div className="text-center mt-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Or sign up with
                    </p>
                    <Button
                      type="button"
                      className="w-full flex items-center justify-center text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-4 py-2 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800 transition duration-200 ease-in-out"
                    >
                      <FaGoogle className="mr-2" />
                      Google
                    </Button>
                  </div>

                  <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
                    Already have an account?{" "}
                    <a
                      href="/login"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Sign in
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
