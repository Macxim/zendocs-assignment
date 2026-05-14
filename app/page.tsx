import { Header } from "./components/Header";
import { PaywallCard } from "./components/PaywallCard";
import { TrustBand } from "./components/TrustBand";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { StickyBar } from "./components/StickyBar";

export default function PaywallPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PaywallCard />
        <TrustBand />
        <Faq />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
