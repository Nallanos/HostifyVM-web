import { Button } from "$/components/ui/button";
export function Header() {
  return (
    <header className="flex items-center justify-evenly w-full">
      <div className="flex items-center">
        <img
          src="/images/HostifyVmLogo.png"
          alt="HostifyVM logo"
          className="size-16"
        />
        <h1 className="text-2xl font-cedora font-bold">HostifyVM</h1>
      </div>
      <nav className="flex gap-8">
        <a href="#home">Home</a>
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
