"use client";

import GoogleSVG from "@/components/GoogleSVG";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const LoginPage = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-10">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />

      <Card className="relative w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-200 sm:p-9">
        {/* Header */}
        <div className="text-center">
          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            Sign in to continue learning with Tutorly and connect with expert
            tutors.
          </p>
        </div>

        {/* Form */}
        <Form className="mt-8 flex flex-col gap-5">
          <TextField isRequired name="email" type="email" className="w-full">
            <Label className="mb-2 text-sm font-semibold text-slate-700">
              Email Address
            </Label>

            <Input
              placeholder="Enter your email address"
              className="w-full rounded-2xl border border-slate-200 bg-white text-slate-700"
            />

            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            className="w-full"
          >
            <Label className="mb-2 text-sm font-semibold text-slate-700">
              Password
            </Label>

            <Input
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-slate-200 bg-white text-slate-700"
            />

            <FieldError />
          </TextField>

          <div className="flex items-center justify-between text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-slate-500">
              <input
                type="checkbox"
                className="h-4 w-4 rounded accent-emerald-500"
              />
              Remember me
            </label>

            <Link
              href=""
              className="font-medium text-emerald-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            className="mt-2 h-13 w-full rounded-2xl bg-emerald-500 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-600"
          >
            Sign In
            <FaArrowRight />
          </Button>
        </Form>

        {/* Divider */}
        <div className="my-2 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />

          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
            Or Continue With
          </span>

          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* Google Login */}
        <Button className="h-13 w-full rounded-2xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50">
          <GoogleSVG className="mr-2 h-5 w-5" />
          Continue with Google
        </Button>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-emerald-600 hover:underline"
          >
            Create Account
          </Link>
        </p>
      </Card>
    </section>
  );
};

export default LoginPage;
