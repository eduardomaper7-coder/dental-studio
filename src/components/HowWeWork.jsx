import {
FaStethoscope,
FaMagic,
FaAward,
FaUsers,
} from "react-icons/fa";

const features = [
{
icon: <FaStethoscope />,
title: "Diagnóstico personalizado",
text: "Analizamos cada caso en profundidad para diseñar el tratamiento más adecuado para ti.",
},
{
icon: <FaMagic />,
title: "Tecnología avanzada",
text: "Trabajamos con herramientas digitales y técnicas modernas para lograr resultados precisos y predecibles.",
},
{
icon: <FaAward />,
title: "Excelencia clínica",
text: "Un equipo especializado comprometido con la calidad, la seguridad y el detalle en cada tratamiento.",
},
{
icon: <FaUsers />,
title: "Experiencia cercana",
text: "Queremos que te sientas acompañado, informado y cómodo en cada etapa del proceso.",
},
];

const HowWeWork = () => {
return ( <section className="bg-white py-24"> <div className="mx-auto max-w-7xl px-4">


    <div className="mb-16 text-center">
      <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
        Nuestra filosofía
      </span>

      <h2 className="mt-5 text-4xl font-light tracking-tight text-neutral-950 sm:text-5xl">
        Una forma diferente de entender la odontología
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
        Combinamos experiencia clínica, innovación y atención personalizada
        para ofrecer una experiencia dental cómoda, transparente y de máxima calidad.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {features.map((item, index) => (
        <div
          key={index}
          className="rounded-[2rem] border border-neutral-200 bg-[#FAF9F7] p-8 transition hover:border-neutral-300"
        >
          <div className="mb-6 text-2xl text-neutral-900">
            {item.icon}
          </div>

          <h3 className="text-2xl font-light text-neutral-950">
            {item.title}
          </h3>

          <p className="mt-4 leading-8 text-neutral-600">
            {item.text}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


);
};

export default HowWeWork;
