import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: 'Do QR codes have a scan limit?',
    answer: 'No, our QR codes can be scanned an unlimited number of times.',
  },
  {
    question: 'Can I use them for commercial purposes?',
    answer: 'Yes, you can use our QR codes for any purpose, including commercial use.',
  },
  {
    question: 'Can I edit QR codes after printing?',
    answer: 'Yes, you can edit the content of dynamic QR codes even after they are printed.',
  },
  {
    question: 'What are dynamic QR codes?',
    answer: 'Dynamic QR codes allow you to change their content after creation without needing to create a new QR code.',
  },
];

export function FAQ() {
  return (
    <section className="py-16 sm:py-24 bg-background-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-600">
              If you have other questions, contact us at support@qr-koala.com
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-background-200">
                  <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-text-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}