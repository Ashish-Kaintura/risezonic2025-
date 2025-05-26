import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavForOther from "../components/NavForOther";

export default function ServiceDetail() {
  const { title } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const decodedTitle = decodeURIComponent(title); // 👈 decode it
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.title === decodedTitle);
        setService(found);
      });
  }, [title]);

  if (!service) return <div className="p-8">Loading service details...</div>;

  return (
    <>
      <NavForOther />

      <article className="pt-28">
        <section>
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center ">
              <div className="w-2/3">
                <h1 className="text-7xl font-heading mb-4">{service.title}</h1>
                <div className="font-body">
                  <p className="text-xl pt-6 italic">{service.intro}</p>
                  <br />
                  <p > {service.description} </p>
                </div>
              </div>
              <div>
                <img
                  src={service.bgImage}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
              </div>
            </div>
            <div className="mt-8 font-body ">
              <p>{service.longdescription}</p>
            </div>
            <div className="mt-8 font-body ">
              <p>{service.longdescription}</p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
