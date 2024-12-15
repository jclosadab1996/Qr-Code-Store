import Image from "next/image";

const benefits = [
  {
    title: "Seguimiento y análisis",
    description:
      "Obtén información detallada con el seguimiento en tiempo real del rendimiento de tus códigos QR. Monitorea los escaneos, las ubicaciones y el comportamiento de los usuarios para optimizar tus campañas.",
    icon: "/assets/analytics-icon.svg",
  },
  {
    title: "Editar después de imprimir",
    description:
      "No se preocupe nunca por los códigos QR obsoletos. Actualice su contenido en cualquier momento, incluso después de que los códigos QR se hayan impreso y distribuido.",
    icon: "/assets/edit-icon.svg",
  },
  {
    title: "Personalización completa",
    description:
      "Haga que sus códigos QR sean únicos con colores, logotipos y diseños personalizados. Combine perfectamente su identidad de marca con nuestras herramientas de personalización avanzadas.",
    icon: "/assets/customize-icon.svg",
  },
];

export function Benefits() {
  return (
    <section className="py-16 sm:py-24 bg-background-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-900 mb-4 sm:mb-6">
            ¿Por qué elegir nuestra plataforma?
          </h2>
          <p className="text-lg sm:text-xl text-text-600">
            Equípese con potentes funciones para la gestión profesional de
            códigos QR
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-6 left-8">
                <div className="w-16 h-16 rounded-2xl bg-primary-600 p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
              </div>
              <div className="mt-12">
                <h3 className="text-xl sm:text-2xl font-bold text-text-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-text-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
