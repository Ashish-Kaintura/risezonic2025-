import React, { useEffect } from "react";
import NavForOther from "../components/NavForOther";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FQA";
import Aboutusimg from "../../src/assets/images/Aboutus/Aboutus.webp";
import whatwedo from "../assets/images/Aboutus/AboutUsWhatwedo.png";
import { Helmet } from "react-helmet-async";
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <div className="application">
          <title>
            About Risezonic | Trusted Digital Marketing services Company in Delhi.
          </title>
          <meta
            name="description"
            content="Learn more about Risezonic—Delhi’s leading digital marketing services company. how we help businesses thrive online."
          />
          <meta name="keywords" content="home, risezonic, tech, services" />
          <meta
            property="og:title"
            content=" About Risezonic | Trusted Digital Marketing services Company in
              Delhi."
          />
          <meta
            property="og:description"
            content="Discover our latest offerings at Risezonic."
          />
          <link rel="canonical" href="https://www.risezonic.com/about-us" />
      </div> */}
      <Helmet>
        <title>Digital Marketing Blog | Risezonic.</title>
        <meta
          name="description"
          content="Explore the Risezonic blog for expert tips on SEO, social media, performance marketing,website design, and the latest digital marketing trends."
        />
        <meta name="keywords" content="Digital Marketing Blog" />
        <meta
          property="og:title"
          content="Digital Marketing Blog | Risezonic."
        />
        <meta
          property="og:description"
          content="Explore the Risezonic blog for expert tips on SEO, social media, performance marketing,website design, and the latest digital marketing trends."
        />
        <link rel="canonical" href="https://www.risezonic.com/about-us" />
      </Helmet>

      <NavForOther />

      <div className="block justify-center">
        <section className="container mx-auto">
          <div className="sm:flex sm:justify-between justify-center mt-20 h-screen items-center">
            <div className="h-100 w-full flex justify-center text-center ">
              <article>
                <section className="b md:h-[35rem] flex justify-center text-start items-center p-6">
                  <div className="relative">
                    <h2 className="text-6xl font-heading text-primary">
                      <span className="text-black md:text-8xl"> ABOUT </span>{" "}
                      Us.
                    </h2>
                    <span className="text-amber-600 text-4xl font-semibold absolute md:top-16 top-8 left-0 right-0 bottom-0 inset-0">
                      _____________________
                    </span>
                    <h3 className="md:pt-8 pt-6 font-body text-sm italic font-semibold">
                      At Risezonic, we believe in refreshing the idea of growth
                      in the digital age. Risezonic was established with the aim
                      of giving brands clarity, creativity and confidence which
                      has made its name strong and linked it to success and
                      honesty.
                    </h3>
                    <p className="md:pt-8 pt-2 font-body">
                      Our agency is based on the belief that having an online
                      presence is important, but being remembered is even more
                      so. Because we are eager to evolve and spot innovative
                      opportunities, we succeed in linking ideas with results.
                      Our team members all feel a strong passion: to achieve
                      something remarkable and steer brands into success.
                      Essentially, we stand for not just a business, but also a
                      way of thinking, a collective group and a helper of
                      progress.
                    </p>
                  </div>
                </section>
              </article>
            </div>
            <div className="md:h-100 w-full  overflow-hidden">
              <img
                loading="lazy"
                className="bg-contain bg-center h-full w-full"
                // src="https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE="
                src={Aboutusimg}
                alt="Plan & Create"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto">
          <div className="sm:flex sm:justify-between justify-centerp-6 ">
            <div className="md:h-100 w-full  overflow-hidden ">
              <img
                loading="lazy"
                className="bg-contain bg-center h-full w-full"
                // src="https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE="
                src={whatwedo}
                alt="Plan & Create"
              />
            </div>
            <div className="h-100 w-full flex justify-center text-center  ">
              <article>
                <section className=" md:h-[35rem] flex justify-center text-start items-center p-6">
                  <div className="relative">
                    <h2 className="text-6xl font-heading text-primary">
                      <span className="text-black md:text-8xl"> What</span> We
                      Do
                    </h2>
                    <span className="text-amber-600 text-4xl font-semibold absolute md:top-16 top-8 left-0 right-0 bottom-0 inset-0">
                      _____________________
                    </span>
                    <h3 className="md:pt-8 pt-6 font-body text-sm italic font-semibold">
                      We create winning digital solutions using our strategy,
                      creative thinking and precise methods. Because we are a
                      forward-thinking digital marketing agency, our job is to
                      strengthen businesses’ presence online and achieve
                      successful measurable results.
                    </h3>
                    <p className="md:pt-8 pt-2 font-body">
                      Everything we do in brand positioning, performance
                      marketing, SEO, content creation and data-driven campaigns
                      is focused on what your business aims to achieve. We are
                      not limited to marketing, as we also connect with users,
                      engage them and turn them into customers. We make sure the
                      work we do is aligned, adaptable and grows according to
                      digital changes. Startups and enterprises can benefit from
                      our services which help your company’s voice be noticed
                      online. At Risezonic, our team ensures that new concepts
                      are put into action for success.
                    </p>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </section>

        <article className="container mx-auto">
          <section>
            <div className="sm:flex sm:justify-between justify-center py-12">
              <div>
                {" "}
                <div className="relative text-center bg">
                  <h2 className="text-3xl font-heading text-primary">
                    <span className="text-black md:text-5xl">
                      {" "}
                      Driven by Purpose,{" "}
                    </span>{" "}
                    Defined by Values
                  </h2>
                  <span className="text-amber-600 text-4xl font-semibold absolute md:top-8 top-8 left-0 right-0 bottom-0 inset-0">
                    _____________________
                  </span>
                  <h3 className="md:pt-8 pt-6 font-body text-sm italic font-semibold">
                    As a team, we rely on our strong principles of integrity,
                    creativity and planning. What we believe drives our actions,
                    reaching from how we relate to clients to how we run every
                    campaign. We think that growth should fit your brand’s
                    future objectives.
                  </h3>
                  <p className="md:pt-8 pt-2 font-body">
                    together creative thinking and numbers, we make solutions
                    that can be measured for success. Every team is based on
                    trust, openness and working together towards the best
                    results. When you choose us, you get the support of a team
                    that believes in your achievements.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>

        <Testimonial />
        <article>
          <section>
            <div className="flex justify-center py-12 bg-secondary text-white font-heading text-4xl">
              <h2>Fueling Digital Growth with Creativity and Precision</h2>
            </div>
          </section>
        </article>
        <div className="bg-gradient-to-b from-blue-100 to-white">
          <FAQ />
        </div>
      </div>
    </>
  );
}
