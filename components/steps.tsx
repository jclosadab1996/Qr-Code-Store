const steps = [
  {
    title: "Elige el tipo",
    description: "Seleccione el tipo de código QR que necesita",
    icon: "🎯",
  },
  {
    title: "Diseña",
    description: "Personaliza y diseña tu código QR",
    icon: "🎨",
  },
  {
    title: "Descarga",
    description: "Descarga y comparte tu nuevo código QR",
    icon: "⬇️",
  },
];

export function Steps() {
  return (
    <section className="py-16 sm:py-24 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-900 mb-4">
            Tu código QR en 3 pasos
          </h2>
          <p className="text-lg text-text-600 mb-12">
            Crear códigos QR nunca ha sido tan fácil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center relative"
            >
              <div className="text-4xl sm:text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-text-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-primary-300 text-4xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
