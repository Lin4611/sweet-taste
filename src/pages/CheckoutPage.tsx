import { useState } from "react";
import ShippingStep from "../components/checkout/ShippingStep";
import PaymentStep from "../components/checkout/PaymentStep";
import OrderSummaryCard from "../components/OrderSummaryCard";
import InvoiceStep from "../components/checkout/InvoiceStep";
const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const handleNextstep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };
  return (
    <main className="w-full mx-auto md:max-w-[768px] md:pb-8 md:pt-5 md:px-[10px] lg:max-w-[1024px] lg:px-[122px] lg:pb-[65px] lg:pt-5">
      <section className="w-full flex gap-5 md:gap-[15px]">
        <section className="w-full flex flex-col">
          {currentStep === 1 && <ShippingStep onNext={handleNextstep} />}
          {currentStep === 2 && <PaymentStep onNext={handleNextstep} />}
          {currentStep === 3 && <InvoiceStep />}
        </section>
        <OrderSummaryCard />
      </section>
    </main>
  );
};
export default CheckoutPage;
