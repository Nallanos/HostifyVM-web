import { Button } from "$/components/ui/button";
import Image from "next/image";
export function Header() {
  return (
    <header className="flex items-center justify-evenly w-full">
      <div className="flex items-center">
        <Image
          src="/images/HostifyVmLogo.png"
          alt="HostifyVM logo"
          width={60}
          height={60}
        />
        <h1 className="text-2xl font-cedora font-bold">HostifyVM</h1>
      </div>
      <nav className="flex gap-8 hidden md:flex">
        <a href="#home" className="">
          Home
        </a>
        <a href="/inscription">Early Access</a>
      </nav>
      <div className="flex items-center  gap-8">
        <Button variant="secondary" className="rounded-full">
          <a href="/inscription">Early Access</a>
        </Button>
      </div>
    </header>
  );
}
