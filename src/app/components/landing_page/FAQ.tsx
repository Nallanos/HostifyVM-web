import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "$/components/ui/accordion";
import { Button } from "$/components/ui/button";
export function FAQ() {
  return (
    <section className="py-16 text-white w-full ">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <Accordion
          type="single"
          collapsible
          className="max-w-2xl mx-auto space-y-4"
        >
          <h2 className="text-4xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold">
              What is HostifyVM and how does it work?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-gray-300">
              HostifyVM is a web deployment platform that allows you to easily
              deploy applications on your own virtual machines. It uses Ansible
              to automate the deployment process, offering flexibility and
              control without relying on third-party services.
            </AccordionContent>
          </AccordionItem>

          {/* Question 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold">
              Is HostifyVM secure?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-gray-300">
              Yes! HostifyVM is designed with security in mind, allowing you to
              maintain full control over your code and environment. We reduce
              third-party risks by ensuring that deployments happen directly on
              your VMs, keeping your data private and secure.
            </AccordionContent>
          </AccordionItem>

          {/* Question 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold">
              How is HostifyVM different from other hosting services?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-gray-300">
              Unlike traditional cloud platforms, HostifyVM gives you full
              control over your infrastructure and code. You do not have to
              worry about vendor lock-in, and you can deploy directly to your
              virtual machines, retaining control over your resources.
            </AccordionContent>
          </AccordionItem>

          {/* Question 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold">
              Do I need to know Ansible to use HostifyVM?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-gray-300">
              Not necessarily! While HostifyVM uses Ansible under the hood, we
              have simplified the process so that users without deep technical
              knowledge can still deploy their applications effortlessly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button variant="secondary" className="rounded-full mt-5">
          <a href="/inscription">Early Access</a>
        </Button>
      </div>
    </section>
  );
}
