import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { FAQ } from "./FAQ";
import { AnsibleSecuritySection } from "./AnsibleSecuritySection";
import { Footer } from "./Footer";
export function LandingPage() {
  return (
    <div>
      <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen flex flex-col text-white">
        <Header />
        <Main />
        <AnsibleSecuritySection />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
