import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Los códigos QR tienen un límite de escaneo?",
    answer:
      "No, nuestros códigos QR se pueden escanear un número ilimitado de veces.",
  },
  {
    question: "¿Puedo utilizarlos con fines comerciales?",
    answer:
      "Sí, puedes utilizar nuestros códigos QR para cualquier propósito, incluido el uso comercial.",
  },
  {
    question: "¿Puedo editar códigos QR después de imprimirlos?",
    answer:
      "Sí, puedes editar el contenido de los códigos QR dinámicos incluso después de imprimirlos.",
  },
  {
    question: "¿Qué son los códigos QR dinámicos?",
    answer:
      "Los códigos QR dinámicos le permiten cambiar su contenido después de su creación sin necesidad de crear un nuevo código QR.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 sm:py-24 bg-background-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-text-600">
              Si tiene otras preguntas, contáctenos en support@qr-store.com
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-background-200"
                >
                  <AccordionTrigger className="text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
