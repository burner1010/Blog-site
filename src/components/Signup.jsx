import React, { useState } from "react";
import authService from "../appwrite_services/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login as storeLogin } from "../store/authSlice";

function Signup() {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const createAcc = async (data) => {
    setErr("");
    try {
      const session = await authService.createAccount(data);

      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(storeLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
          <h2 className="text-center text-2xl font-bold leading-tight">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-black/60">
            Already have an account?&nbsp;
            <Link
              to="/login"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
          {err && <p className="text-red-600 mt-8 text-center">{err}</p>}
          <form onSubmit={handleSubmit(createAcc)}>
            <div className="space-y-5">
                <Input 
                label= "full name"
                placeholder="Enter Full Name"
                type="name"
                {...register("name",{
                    required:true,
                })}
                />
                <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {  //register has this weird syntax in hook form 
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
                label="password"
                type="password"
                placeholder="Enter strong password"
                {...register("name",{
                    required:true
                })}
            />
            <Button type="submit" className="w-full">
              Sign up
            </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
