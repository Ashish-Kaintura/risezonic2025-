import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavForOther from "../components/NavForOther";
import Loader from "../components/Loader";
import { Helmet } from "react-helmet-async";

export default function ServiceDetail() {
  const { url } = useParams();
  const [service, setService] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchService = async () => {
      const res = await fetch(
        "https://risezonic2025backend.onrender.com/api/services/"
      );
      const data = await res.json();
      const found = data.find((item) => item.url === url);
      setService(found);
    };
    fetchService();
  }, [url]);

  if (!service)
    return (
      <div className="p-8 flex h-screen items-center justify-center text-center ">
        <Loader />
      </div>
    );

  return (
    <>
      <Helmet>
        <title>{service.metatitle}</title>
        <meta name="description" content={service.metadescription} />
        <meta name="keywords" content={service.metakeywords} />
        <meta property="og:title" content={service.metatitle} />
        <meta property="og:description" content={service.metadescription} />
        <link rel="canonical" href={service.metacanonical} />
      </Helmet>

      <NavForOther />

      <article className="pt-28 bg-white min-h-screen">
        <section className="container mx-auto px-4 py-8">
          {/* Header section */}
          {/* <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                {service.title}
              </h1>
              <p className="text-xl italic  mb-4">{service.intro}</p>
              <p className="text-base  mb-4">{service.shortdescription}</p>
              <p className="text-base  mb-4">{service.description}</p>
            </div>

            <div className="md:w-1/3">
              <img
              loading="lazy"
                src={service.bgImage}
                alt={service.title}
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
            </div>
          </div> */}
          <section className="font-body">
            <div className="sm:flex sm:justify-between justify-center mt-10 items-center">
              <div className=" w-full flex justify-center text-center ">
                <article>
                  <section className=" flex justify-center text-start items-center p-6">
                    <div className="relative">
                      <h2 className="text-5xl font-heading text-primary font-heading">
                        {service.title}
                      </h2>
                      <span className="text-amber-600 text-4xl font-semibold absolute md:top-6 top-8 left-0 right-0 bottom-0 inset-0">
                        _____________________
                      </span>
                      <h3 className="md:pt-8 pt-6 font-body text-sm italic font-semibold">
                        {service.intro}
                      </h3>
                      <p className="md:pt-8 pt-2 font-body">
                        {service.shortdescription}
                      </p>
                    </div>
                  </section>
                </article>
              </div>
              <div className=" w-full  overflow-hidden">
                <img
                  loading="lazy"
                  className="bg-contain bg-center h-full w-full"
                  // src="https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE="
                  src={service.img}
                  alt="Plan & Create"
                />
              </div>
            </div>
          </section>
          {/* Long Description */}
          <div className="mt-12 prose max-w-none prose-lg ">
            <p>{service.description}</p>
          </div>
          {/* Long Description */}
          <div className="mt-12 prose max-w-none prose-lg ">
            <div
              dangerouslySetInnerHTML={{ __html: service.longdescription }}
            />
          </div>

          {/* subservices  */}
          {service.SubServices?.length > 0 && (
            <div className="mt-16">
              <section className="container mx-auto">
                {/* SubService 1 - Local SEO */}
                {service.SubServices[0] && (
                  <div className="sm:flex sm:justify-between justify-center  items-center font-heading">
                    <div className=" w-full flex justify-center text-center ">
                      <article>
                        <section className=" flex justify-center text-start items-center p-6">
                          <div className="relative">
                            <h2 className="text-6xl font-heading text-primary">
                              {service.SubServices[0].title}
                            </h2>

                            <h3 className="md:pt-8 pt-6 font-body text-sm italic font-semibold">
                              {service.SubServices[0].intro}
                            </h3>

                            <p className="md:pt-8 pt-2 font-body">
                              {service.SubServices[0].shortdescription}
                            </p>
                            <p className="md:pt-8 pt-2 font-body">
                              {service.SubServices[0].description}
                            </p>
                          </div>
                        </section>
                      </article>
                    </div>
                    <div className="md:h-100 w-full bg-gray-300 overflow-hidden">
                      <img
                        loading="lazy"
                        className="bg-contain bg-center h-full w-full"
                        src={service.SubServices[0].img}
                        alt="Plan & Create"
                      />
                    </div>
                  </div>
                )}
              </section>
            </div>
          )}

          {/* subservices  */}
          {service.SubServices?.length > 0 && (
            <div className="mt-16">
              <section className="container mx-auto">
                {/* SubService 1 - Local SEO */}
                {service.SubServices[1] && (
                  <div className="sm:flex sm:justify-between justify-center  items-center">
                    <div className="md:h-100 w-full bg-gray-300 overflow-hidden">
                      <img
                        loading="lazy"
                        className="bg-contain bg-center h-full w-full"
                        src={service.SubServices[1].img}
                        alt="Plan & Create"
                      />
                    </div>
                    <div className=" w-full flex justify-center text-center ">
                      <article>
                        <section className=" flex justify-center text-start items-center p-6">
                          <div className="relative">
                            <h2 className="text-6xl font-heading text-primary">
                              {service.SubServices[1].title}
                            </h2>

                            <h3 className="md:pt-8 pt-6 font-body text-sm italic font-semibold">
                              {service.SubServices[1].intro}
                            </h3>

                            <p className="md:pt-8 pt-2 font-body">
                              {service.SubServices[1].shortdescription}
                            </p>
                            <p className="md:pt-8 pt-2 font-body">
                              {service.SubServices[1].description}
                            </p>
                          </div>
                        </section>
                      </article>
                    </div>
                  </div>
                )}
              </section>
            </div>
          )}

          {/* subservices  */}
          {service.SubServices?.length > 0 && (
            <div className="mt-16">
              <section className="container mx-auto">
                {/* SubService 1 - Local SEO */}
                {service.SubServices[2] && (
                  <div className="sm:flex sm:justify-between justify-center  items-center">
                    <div className=" w-full flex justify-center text-center ">
                      <article>
                        <section className=" flex justify-center text-start items-center p-6">
                          <div className="relative">
                            <h2 className="text-6xl font-heading text-primary">
                              {service.SubServices[2].title}
                            </h2>

                            <h3 className="md:pt-8 pt-6 font-body text-sm italic font-semibold">
                              {service.SubServices[2].intro}
                            </h3>

                            <p className="md:pt-8 pt-2 font-body">
                              {service.SubServices[2].shortdescription}
                            </p>
                            <p className="md:pt-8 pt-2 font-body">
                              {service.SubServices[2].description}
                            </p>
                          </div>
                        </section>
                      </article>
                    </div>
                    <div className="md:h-100 w-full bg-gray-300 overflow-hidden">
                      <img
                        loading="lazy"
                        className="bg-contain bg-center h-full w-full"
                        src={service.SubServices[2].img}
                        alt="Plan & Create"
                      />
                    </div>
                  </div>
                )}
              </section>
            </div>
          )}
          {/* subservices  */}
          {service.SubServices?.length > 0 && (
            <div className="mt-16">
              <section className="container mx-auto">
                {/* SubService 1 - Local SEO */}
                {service.SubServices[3] && (
                  <div className="sm:flex sm:justify-between justify-center  items-center">
                    <div className="md:h-100 w-full bg-gray-300 overflow-hidden">
                      <img
                        loading="lazy"
                        className="bg-contain bg-center h-full w-full"
                        src={service.SubServices[3].img}
                        alt="Plan & Create"
                      />
                    </div>
                    <div className=" w-full flex justify-center text-center ">
                      <article>
                        <section className=" flex justify-center text-start items-center p-6">
                          <div className="relative">
                            <h2 className="text-6xl font-heading text-primary">
                              {service.SubServices[3].title}
                            </h2>

                            <h3 className="md:pt-8 pt-6 font-body text-sm italic font-semibold">
                              {service.SubServices[3].intro}
                            </h3>

                            <p className="md:pt-8 pt-2 font-body">
                              {service.SubServices[3].shortdescription}
                            </p>
                            <p className="md:pt-8 pt-2 font-body">
                              {service.SubServices[3].description}
                            </p>
                          </div>
                        </section>
                      </article>
                    </div>
                  </div>
                )}
              </section>
            </div>
          )}

          {/* SubServices */}
          {/* {service.SubServices?.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-semibold mb-6 border-b pb-2">
                Related SubServices
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {service.SubServices.map((sub, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <img
                    loading="lazy"
                      src={sub.bgImage}
                      alt={sub.title}
                      className="w-full h-40 object-cover rounded mb-3"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {sub.title}
                    </h3>
                    <p className="text-sm text-gray-600 italic mb-2">
                      {sub.intro}
                    </p>
                    <p className="text-sm text-gray-700">
                      {sub.shortdescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )} */}
        </section>
      </article>
    </>
  );
}
