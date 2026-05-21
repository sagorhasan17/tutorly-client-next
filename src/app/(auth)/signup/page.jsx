"use client";

import GoogleSVG from "@/components/GoogleSVG";
import { authClient } from "@/lib/auth-client";
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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userFormData = Object.fromEntries(formData.entries());
    const { name, email, password, photo } = userFormData;
    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email, // required
      password: password,
      image: photo,
    });
    if (!error) {
      toast.success("Registration successful!", {
        autoClose: 2000,
        position: "top-center",
      });
      await authClient.signOut();
      router.push("/login");
    } else {
      toast.error("Registration error:", {
        autoClose: 2000,
        position: "top-center",
      });
    }
  };
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-10">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />

      <Card className="relative w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-200 sm:p-9">
        {/* Header */}
        <div className="text-center">
          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900">
            Create Account
          </h1>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            Join Tutorly and start learning with expert tutors from anywhere.
          </p>
        </div>

        {/* Form */}
        <Form className="mt-8 flex flex-col gap-5" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text" className="w-full">
            <Label className="mb-2 text-sm font-semibold text-slate-700">
              Full Name
            </Label>

            <Input
              placeholder="Enter your full name"
              className="w-full rounded-2xl border border-slate-200 bg-white text-slate-700"
            />

            <FieldError />
          </TextField>

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

          <TextField isRequired name="photo" type="url" className="w-full">
            <Label className="mb-2 text-sm font-semibold text-slate-700">
              Photo URL
            </Label>

            <Input
              placeholder="https://example.com/photo.jpg"
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
              placeholder="Create a strong password"
              className="w-full rounded-2xl border border-slate-200 bg-white text-slate-700"
            />

            <FieldError />
          </TextField>

          <Button
            type="submit"
            className="mt-2 h-13 w-full rounded-2xl bg-emerald-500 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-600"
          >
            {loading ? "Signing Up..." : "Sign Up"}
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
        <Button
          onClick={handleGoogleLogin}
          className="h-13 w-full rounded-2xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50"
        >
          <GoogleSVG className="mr-2 h-5 w-5" />
          Continue with Google
        </Button>

        {/* Footer */}
        <p className="mt-4 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-emerald-600 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </Card>
    </section>
  );
};

export default SignUpPage;
