import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavForOther from "../components/NavForOther";
import Loader from "../components/Loader";
import { Helmet } from "react-helmet-async";
import BackButton from "../components/BackButton";

export default function ServiceDetail() {
  const { url } = useParams();
  const [service, setService] = useState(null);
  const fetchdata = "/data/services.json";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchService = async () => {
      const res = await fetch(
        // "https://risezonic2025backend.onrender.com/api/services/"
        fetchdata
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

      <article className="pt-28 bg-white ">
        <section className="max-w-7xl mx-auto px-4 py-8">
          {/* /* Header section */}
          <section className="font-body">
            <BackButton />
            <div className="sm:flex sm:justify-between justify-center  mt-10 items-center">
              <div className=" w-full flex justify-center text-center ">
                <article>
                  <section className=" flex justify-center text-start items-center">
                    <div className="relative">
                      <h2 className="text-4xl  text-primary font-heading">
                        {service.h1title ? service.h1title : service.title}
                      </h2>
                      {/* <span className="text-amber-600 text-4xl font-semibold absolute md:top-6 top-3 left-0 right-0 bottom-0 inset-0">
                      _____________________
                      </span> */}
                      <h3 className="md:pt-8 pt-6 font-body ">
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
          {/* subservices  */}
          {service.SubServices?.length > 0 && (
            <div className="mt-16">
              <section className=" mx-auto">
                {/* SubService 1 - Local SEO */}
                {service.SubServices[0] && (
                  <div className="sm:flex sm:justify-between justify-center sm:space-x-3 items-center font-heading">
                    <div className=" sm:w-1/2 w-full flex justify-center text-center ">
                      <article>
                        <section className="flex justify-center text-start items-center">
                          <div className="relative">
                            <h2 className="sm:text-6xl text-2xl font-heading text-primary">
                              {service.SubServices[0].title}
                            </h2>

                            <h3 className="md:pt-8 pt-6 font-body ">
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
                    <div className="md:h-100 w-full  md:w-1/2  overflow-hidden">
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
              <section className=" mx-auto">
                {/* SubService 1 - Local SEO */}
                {service.SubServices[1] && (
                  <div className="sm:flex sm:justify-between justify-center sm:space-x-3  items-center">
                    <div className="md:h-100 w-full  md:w-1/2  overflow-hidden md:flex hidden">
                      <img
                        loading="lazy"
                        className="bg-contain bg-center h-full w-full"
                        src={service.SubServices[1].img}
                        alt="Plan & Create"
                      />
                    </div>
                    <div className=" sm:w-1/2 w-full flex justify-center text-center ">
                      <article>
                        <section className=" flex justify-center text-start items-center">
                          <div className="relative">
                            <h2 className="sm:text-6xl text-2xl font-heading text-primary">
                              {service.SubServices[1].title}
                            </h2>

                            <h3 className="md:pt-8 pt-6 font-body ">
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
                    <div className="md:h-100 w-full  md:w-1/2  overflow-hidden flex md:hidden">
                      <img
                        loading="lazy"
                        className="bg-contain bg-center h-full w-full"
                        src={service.SubServices[1].img}
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
              <section className=" mx-auto">
                {/* SubService 1 - Local SEO */}
                {service.SubServices[2] && (
                  <div className="sm:flex sm:justify-between justify-center sm:space-x-3  items-center">
                    <div className=" sm:w-1/2 w-full flex justify-center text-center ">
                      <article>
                        <section className=" flex justify-center text-start items-center ">
                          <div className="relative">
                            <h2 className="sm:text-6xl text-2xl font-heading text-primary">
                              {service.SubServices[2].title}
                            </h2>

                            <h3 className="md:pt-8 pt-6 font-body ">
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
                    <div className="md:h-100 w-full  md:w-1/2  overflow-hidden">
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
              <section className=" mx-auto">
                {/* SubService 1 - Local SEO */}
                {service.SubServices[3] && (
                  <div className="sm:flex sm:justify-between justify-center sm:space-x-3  items-center">
                    <div className="md:h-100 w-full  md:w-1/2  overflow-hidden">
                      <img
                        loading="lazy"
                        className="bg-contain bg-center h-full w-full"
                        src={service.SubServices[3].img}
                        alt="Plan & Create"
                      />
                    </div>
                    <div className=" sm:w-1/2 w-full flex justify-center text-center ">
                      <article>
                        <section className=" flex justify-center text-start items-center">
                          <div className="relative">
                            <h2 className="sm:text-6xl text-2xl font-heading text-primary">
                              {service.SubServices[3].title}
                            </h2>

                            <h3 className="md:pt-8 pt-6 font-body ">
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
          {/* subservices  */}
          {service.SubServices?.length > 0 && (
            <div className="mt-16">
              <section className=" mx-auto">
                {/* SubService 1 - Local SEO */}
                {service.SubServices[4] && (
                  <div className="sm:flex sm:justify-between justify-center sm:space-x-3  items-center">
                    <div className=" sm:w-1/2 w-full flex justify-center text-center ">
                      <article>
                        <section className=" flex justify-center text-start items-center">
                          <div className="relative">
                            <h2 className="sm:text-6xl text-2xl font-heading text-primary">
                              {service.SubServices[4].title}
                            </h2>

                            <h3 className="md:pt-8 pt-6 font-body ">
                              {service.SubServices[4].intro}
                            </h3>

                            <p className="md:pt-8 pt-2 font-body">
                              {service.SubServices[4].shortdescription}
                            </p>
                            <p className="md:pt-8 pt-2 font-body">
                              {service.SubServices[4].description}
                            </p>
                          </div>
                        </section>
                      </article>
                    </div>

                    <div className="md:h-100 w-full  md:w-1/2  overflow-hidden">
                      <img
                        loading="lazy"
                        className="bg-contain bg-center h-full w-full"
                        src={service.SubServices[4].img}
                        alt="Plan & Create"
                      />
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
          {/* Long Description */}
          <div className="mt-12 prose max-w-none prose-lg ">
            <div
              dangerouslySetInnerHTML={{ __html: service.longdescription }}
            />
          </div>
        </section>
      </article>
    </>
  );
}

// // import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import NavForOther from "../components/NavForOther";
// import Loader from "../components/Loader";
// import { Helmet } from "react-helmet-async";
// import BackButton from "../components/BackButton";

// export default function ServiceDetail() {
//   const { url } = useParams();
//   const [service, setService] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const fetchdata = "/data/services.json";

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     const fetchService = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(fetchdata);

//         if (!res.ok) {
//           throw new Error("Failed to fetch services");
//         }

//         const data = await res.json();
//         const found = data.find((item) => item.url === url);

//         if (!found) {
//           throw new Error("Service not found");
//         }

//         setService(found);
//       } catch (err) {
//         setError(err.message);
//         console.error("Error fetching service:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchService();
//   }, [url]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <Loader />
//       </div>
//     );
//   }

//   if (error || !service) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center p-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">
//             Service Not Found
//           </h2>
//           <p className="text-gray-600 mb-6">
//             {error || "The requested service could not be found."}
//           </p>
//           <BackButton />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>{service.metatitle}</title>
//         <meta name="description" content={service.metadescription} />
//         <meta name="keywords" content={service.metakeywords} />
//         <meta property="og:title" content={service.metatitle} />
//         <meta property="og:description" content={service.metadescription} />
//         <meta property="og:image" content={service.img} />
//         <meta property="og:type" content="article" />
//         <link rel="canonical" href={service.metacanonical} />
//       </Helmet>

//       <NavForOther />

//       <main className="pt-16 sm:pt-20 lg:pt-28 bg-gray-50 min-h-screen">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
//           {/* Back Button */}
//           <div className="mb-6 sm:mb-8">
//             <BackButton />
//           </div>

//           {/* Hero Section */}
//           <section className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 sm:mb-12 lg:mb-16">
//             <div className="flex flex-col lg:flex-row items-center">
//               {/* Content Side */}
//               <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 order-2 lg:order-1">
//                 <div className="max-w-xl mx-auto lg:mx-0">
//                   <div className="relative mb-6 sm:mb-8">
//                     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary font-heading leading-tight">
//                       {service.title}
//                     </h1>

//                     {/* Decorative underline - responsive */}
//                     <div className="mt-3 sm:mt-4">
//                       <span className="block w-20 sm:w-32 md:w-40 lg:w-48 h-1 bg-amber-600 rounded-full"></span>
//                     </div>
//                   </div>

//                   {service.intro && (
//                     <h2 className="text-sm sm:text-base md:text-lg italic font-semibold text-gray-700 mb-4 sm:mb-6 font-body">
//                       {service.intro}
//                     </h2>
//                   )}

//                   <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-body">
//                     {service.shortdescription}
//                   </p>
//                 </div>
//               </div>

//               {/* Image Side */}
//               <div className="w-full lg:w-1/2 order-1 lg:order-2">
//                 <div className="aspect-video lg:aspect-square overflow-hidden">
//                   <img
//                     loading="lazy"
//                     className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                     src={service.img}
//                     alt={service.title}
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Main Description */}
//           {service.description && (
//             <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12 lg:mb-16">
//               <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
//                 <p className="text-gray-700 leading-relaxed">
//                   {service.description}
//                 </p>
//               </div>
//             </section>
//           )}

//           {/* Long Description */}
//           {service.longdescription && (
//             <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12 lg:mb-16">
//               <div
//                 className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:text-primary prose-headings:font-heading prose-p:text-gray-700 prose-p:leading-relaxed"
//                 dangerouslySetInnerHTML={{ __html: service.longdescription }}
//               />
//             </section>
//           )}

//           {/* SubServices */}
//           {service.SubServices?.length > 0 && (
//             <section className="space-y-8 sm:space-y-12 lg:space-y-16">
//               <div className="text-center mb-8 sm:mb-12">
//                 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 font-heading mb-4">
//                   Our Services Include
//                 </h2>
//                 <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
//               </div>

//               {service.SubServices.map((subService, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-xl shadow-lg overflow-hidden"
//                 >
//                   <div
//                     className={`flex flex-col ${
//                       index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
//                     } items-center`}
//                   >
//                     {/* Content */}
//                     <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12">
//                       <div className="max-w-xl mx-auto lg:mx-0">
//                         <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary font-heading mb-4 sm:mb-6 leading-tight">
//                           {subService.title}
//                         </h3>

//                         {subService.intro && (
//                           <p className="text-sm sm:text-base italic font-semibold text-gray-700 mb-4 sm:mb-6 font-body">
//                             {subService.intro}
//                           </p>
//                         )}

//                         {subService.shortdescription && (
//                           <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed font-body">
//                             {subService.shortdescription}
//                           </p>
//                         )}

//                         {subService.description && (
//                           <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-body">
//                             {subService.description}
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     {/* Image */}
//                     <div className="w-full lg:w-1/2">
//                       <div className="aspect-video lg:aspect-square overflow-hidden">
//                         <img
//                           loading="lazy"
//                           className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                           src={subService.img}
//                           alt={subService.title}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </section>
//           )}

//           {/* Call to Action */}
//           <section className="bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg p-6 sm:p-8 lg:p-12 text-center text-white mt-12 sm:mt-16 lg:mt-20">
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading mb-4 sm:mb-6">
//               Ready to Get Started?
//             </h2>
//             <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
//               Let's discuss how we can help your business grow with our expert{" "}
//               {service.title.toLowerCase()} services.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <a
//                 href="/contact-us"
//                 className="inline-block bg-white text-primary font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
//               >
//                 Contact Us Today
//               </a>
//               <a
//                 href="tel:+91-9999999999"
//                 className="inline-block border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-primary transition-all duration-200 transform hover:scale-105"
//               >
//                 Call Now
//               </a>
//             </div>
//           </section>
//         </div>
//       </main>
//     </>
//   );
// }
