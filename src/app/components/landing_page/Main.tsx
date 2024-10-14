import { Button } from "$/components/ui/button";

export function Main() {
  return (
    <div className="flex flex-col justify-center w-full items-center mx-auto border-t border-gray-700">
      <h1 className="font-cedora font-semibold text-5xl md:7xl text-center pt-20 p-4 ">
        Effortless Web Deployments on Your Own VM
      </h1>
      <p className="text-center text-sm p-4">
        Seamlessly deploy your web applications on your own virtual machines,
        giving you full control over your code and environment.
      </p>
      <p className="text-center text-sm ">
        Say goodbye to cloud lock-in and embrace a hassle-free deployment
        solution tailored for small businesses.
      </p>
      <Button variant="secondary" className="rounded-full mt-5">
        <a href="/inscription">Early Access</a>
      </Button>
    </div>
  );
}
