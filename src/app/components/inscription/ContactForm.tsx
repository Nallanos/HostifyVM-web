"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "$/components/ui/button";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xdkooaqe");
  if (state.succeeded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">
          Thanks for joining!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 h-screen text-white flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="border border-gray-700 my-4 bg-gray-900 text-white p-3 rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <Button
          variant="secondary"
          type="submit"
          disabled={state.submitting}
          className="mt-4 w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-2 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-200"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
