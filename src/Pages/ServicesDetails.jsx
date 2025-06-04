import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavForOther from "../components/NavForOther";

export default function ServiceDetail() {
  const { url } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch("https://risezonic2025backend.onrender.com/api/services/")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.url === url);
        setService(found);
      });
  }, [url]);

  if (!service) return <div className="p-8">Loading service details...</div>;

  return (
    <>
      <NavForOther />

      <article className="pt-28 bg-white min-h-screen">
        <section className="container mx-auto px-4 py-8">
          {/* Header section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                {service.title}
              </h1>
              <p className="text-xl italic text-gray-600 mb-4">
                {service.intro}
              </p>
              <p className="text-base text-gray-700 mb-4">{service.description}</p>
            </div>

            {/* Banner image */}
            <div className="md:w-1/3">
              <img
                src={service.bgImage}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Long Description */}
          <div className="mt-12 prose max-w-none prose-lg text-gray-800">
            <div dangerouslySetInnerHTML={{ __html: service.longdescription }} />
          </div>

          {/* SubServices */}
          {service.SubServices?.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-semibold mb-6 border-b pb-2">
                Related SubServices
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {service.SubServices.map((sub, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                    <img
                      src={sub.bgImage}
                      alt={sub.title}
                      className="w-full h-40 object-cover rounded mb-3"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">{sub.title}</h3>
                    <p className="text-sm text-gray-600 italic mb-2">{sub.intro}</p>
                    <p className="text-sm text-gray-700">{sub.shortdescription}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </article>
    </>
  );
}
