import { Shield, Server } from "lucide-react";

export function AnsibleSecuritySection() {
  return (
    <section className="py-16 border-b border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Secure and Automated Deployments
        </h2>

        <div className="flex flex-wrap justify-center gap-12">
          <div className="max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
            <Server className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Powered by Ansible
            </h3>
            <p className="text-lg text-gray-300">
              HostifyVM uses Ansible for simplified, automated deployments,
              ensuring that your infrastructure is set up with minimal effort.
              Enjoy reliability and flexibility, without complex configurations.
            </p>
          </div>

          <div className="max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
            <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">
              Built with Security in Mind
            </h3>
            <p className="text-lg text-gray-300">
              HostifyVM ensures your deployments are secure by design. Your code
              and infrastructure remain under your control, reducing external
              dependencies and ensuring data privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
