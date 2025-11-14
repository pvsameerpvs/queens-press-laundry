import { Hero } from "@/components/hero";
import { ValuePropsSection } from "@/components/value-props";
import { ServicesOverview } from "@/components/services-overview";
import { BranchSelector } from "@/components/branch-selector";
import { HowItWorks } from "@/components/how-it-works";
import { WhatsappOrderSection } from "@/components/whatsapp-order-section";

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      <Hero />
      <section className="container space-y-12">
        <div className="mt-10 md:mt-16">
          <ValuePropsSection />
        </div>

        <ServicesOverview />
        <BranchSelector compact />
        <HowItWorks />
        <WhatsappOrderSection highlight />
      </section>
    </div>
  );
}
