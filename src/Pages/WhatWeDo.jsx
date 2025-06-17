import React from "react";
import NavForOther from "../components/NavForOther";
import Testimonial from "../components/Testimonial";
import Aboutusimg from "../../src/assets/images/Aboutus/Aboutus.webp";
import whatwedo from "../assets/images/Aboutus/whatwedo.webp";
import OurServices from "../components/OurServices";
export default function WhatWeDo() {
  return (
    <>
      <Helmet>
        <title>Explore Marketing Solutions | Risezonic</title>
        <meta
          name="description"
          content="Rizeonic provides results-driven digital marketing strategies, including SEO, social media, performance marketing, and paid ad management."
        />
        <meta name="keywords" content="Marketing Solutions" />
        <link
          rel="canonical "
          href="https://www.risezonic.com/what-we-do"
        />
      </Helmet>
      <NavForOther />
      <section>
        <div
          className="md:h-[720px] h-[400px]  bg-cover bg-no-repeat bg-fixed "
          style={{
            backgroundImage: `url(${"https://i.postimg.cc/G2nbVSbQ/Banner-1-green.jpg"})`,
          }}
        ></div>
      </section>
      <section className="container mx-auto">
        <div className="sm:flex sm:justify-between justify-center  h-screen items-center">
          <div className="h-100 w-full flex justify-center text-center ">
            <article>
              <section className="md:h-[35rem] flex justify-center text-start items-center p-6">
                <div className="relative">
                  <h2 className="text-6xl font-heading text-primary">
                    <span className="text-black md:text-8xl"> What</span> We Do
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
                    is focused on what your business aims to achieve. We are not
                    limited to marketing, as we also connect with users, engage
                    them and turn them into customers. We make sure the work we
                    do is aligned, adaptable and grows according to digital
                    changes. Startups and enterprises can benefit from our
                    services which help your company’s voice be noticed online.
                    At Risezonic, our team ensures that new concepts are put
                    into action for success.
                  </p>
                  <p className="md:pt-8 pt-2 font-body">
                    Today, where every online connection is important, we help
                    you achieve this by creating advantageous online
                    experiences. Whether it is the site design or every single
                    ad, we are here to ensure all our efforts have a meaning and
                    lead to conversions. Considering the recent changes in the
                    market and on the internet, we create complete digital
                    systems that help attract new users, garner interest, and
                    boost sales. Ensuring that your brand’s value is visible
                    online is the main task we aim to achieve.
                  </p>
                </div>
              </section>
            </article>
          </div>
          <div className="md:h-100 w-full  overflow-hidden">
            <img
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
                  <h2 className="text-4xl font-heading text-primary">
                    <span className="text-black md:text-6xl"> Our </span>{" "}
                    Digital Philosophy
                  </h2>
                  <span className="text-amber-600 text-4xl font-semibold absolute md:top-10 top-8 left-0 right-0 bottom-0 inset-0">
                    _____________________
                  </span>
                  <h3 className="md:pt-8 pt-6 font-body text-sm italic font-semibold">
                    Our aim is to show the idea that digital is human in all we
                    do. This is why our goals are to alter people’s moods,
                    encourage them through hard times, and allow them to connect
                    with others instead of only being treated as figures. We
                    find out what your brand is working towards and who you wish
                    to address. So this process makes it possible for us to
                    pinpoint what makes your brand unique, regardless of being a
                    business or lifestyle brand.
                  </h3>
                  <p className="md:pt-8 pt-2 font-body">
                    Making the product expand is an important aspect we consider
                    from the beginning. The process of launching a business or
                    expanding your share in the market becomes simple with the
                    help of our frameworks. We collect and sort all the data, so
                    that the complicated things are made easier and the simple
                    ones are made simpler. Whether it’s bringing together your
                    messaging or boosting how you are seen, everything we do
                    results in real outcomes, such as top rankings, more views
                    on your ads, loyal customers, and a strong brand reputation.
                    The most important thing about our country is our
                    perseverance to do better every day. All these changes in
                    technology call for us to go forward. While campaigning, the
                    communication process goes on, being constantly checked and
                    improved. We remain alert for new changes, so your brand
                    stays ahead of the rivals.
                  </p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="sm:block sm:justify-center justify-center  items-center">
          <div className="w-full flex justify-center text-center ">
            <article>
              <section className="md:h-[35rem] flex justify-center text-center items-center p-6">
                <div className="relative">
                  <h2 className="text-6xl font-heading text-primary">
                    <span className="text-black md:text-8xl"> Why Choose</span>{" "}
                    Risezonic?
                  </h2>
                  <span className="text-amber-600 text-4xl font-semibold absolute md:top-16 top-8 left-0 right-0 bottom-0 inset-0">
                    _____________________
                  </span>
                  <h3 className="md:pt-8 pt-6 font-body text-sm italic font-semibold">
                    Our success is based on your business success. Selecting
                    Risezonic gives you clear information among all today's data
                    noise. Being open, keeping everyone updated, and using a
                    smart approach that covers both quick gains and future
                    achievements are our goals. We make our strategies unique by
                    researching the market well, studying user actions, and
                    paying attention to our competitors. It’s clear that trust
                    develops over time and only real achievements can prove it.
                  </h3>
                  <p className="md:pt-8 pt-2 font-body">
                    We are dedicated to helping you accomplish your aims. We see
                    each project from the point of view of a team member, not as
                    a simple contractor. That is why we join you in your
                    victories, face your obstacles, and share your vision. We
                    can easily complete your work and also give you advice,
                    point out new marketing trends, and keep improving your
                    performance. What we do covers more areas than just
                    marketing. We develop brands that communicate, offer
                    products, and grow in business. We make sure you are noticed
                    by your audience in places that matter the most. In
                    everything from telling the story to deciding on the
                    strategy, we concentrate on making the brand experience
                    resonate and do well. While sharing our thoughts, measuring
                    our progress, and trusting each other, we continue to work
                    as partners.
                  </p>
                  <p className="md:pt-8 pt-2 font-body">
                    By looking forward, we let you build results-based business
                    strategies. Our mission is to help digital skills improve
                    your results in real life. We can do more than campaign
                    marketing, as we help you build systems that grow and bring
                    better results for your business. That is how we function.
                  </p>
                </div>
              </section>
            </article>
          </div>
          <div className="flex justify-center items-center ">
            <div className="overflow-hidden h-[40rem] w-[40rem]">
              <img
                className="bg-contain bg-center h-full w-full"
                // src="https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE="
                src={Aboutusimg}
                alt="Plan & Create"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
