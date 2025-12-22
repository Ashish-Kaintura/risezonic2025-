import React from "react";
import NavForOther from "../components/NavForOther";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
export default function PrivacyPolicy() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <Helmet>
        <title>Our Company Privacy and Policy | Risezonic</title>
        <meta
          name="description"
          content="Review Risezonic's Privacy Policy. Providing online security and compliance in Digital Marketing services."
        />
        <meta
          name="keywords"
          content="Risezonic, Privacy Policy, Digital Marketing"
        />
        <link rel="canonical" href="https://www.risezonic.com/privacy-policy" />
      </Helmet>
      <NavForOther />
      <div className="pt-32 pb-16 min-h-screen bg-gray-50 font-body">
        <div className=" mx-auto px-4 max-w-6xl bg-white rounded-lg shadow-lg py-10 ">
          <h1 className="text-3xl font-bold text-primary mb-6 text-center">
            Privacy Policy for Risezonic
          </h1>
          <p className="mb-4 text-gray-700">
            Welcome to{" "}
            <span className="font-semibold font-heading">Risezonic</span>! We
            are an online marketing company dedicated to helping businesses
            thrive in the digital world. Your privacy is important to us, and we
            are committed to protecting your personal information.
          </p>

          <p className="mb-6 text-gray-700">
            This Privacy Policy explains how Risezonic ("we," "us," or "our")
            collects, uses, shares, and safeguards your information when you
            visit our website (
            <a
              href="https://www.risezonic.com"
              className="text-blue-600 underline"
            >
              www.risezonic.com
            </a>
            )or use our services or communicate with us. By using or visiting
            our website, using our services, you accept that you have read,
            understood and are ready to accept the conditions of the Privacy
            Policy. Do not use our services or our site in case you disagree
            with it.
          </p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary font-heading mb-3">
              1. Information We Collect
            </h2>
            <p className="mb-3 text-gray-700">
              The different kinds of information that we gather include personal
              information, which we use in order to deliver our services and
              enhance our services to you, communicate with you, and further
              conduct our business in an efficient manner. One can divide this
              information as follows:
            </p>
            <h3 className="text-lg font-semibold text-secondary font-heading mb-2">
              1.1. Information You Provide at Your Own Choosing:
            </h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
              These are the data you directly provided to us when using our
              services and web-site.
              <li>
                <span className="font-semibold font-heading">
                  Contact Information:
                </span>{" "}
                Name, email, phone number, company name, and job title via forms
                (Contact Us, Request a Quote, etc.).
              </li>
              <li>
                <span className="font-semibold font-heading">
                  Communication Data:
                </span>{" "}
                When you communicate with us by email, phone, live chat, social
                media, we may store the record of those communications, together
                with any other contact or other information you provide.
              </li>
              <li>
                <span className="font-semibold font-heading">
                  Account Information:
                </span>{" "}
                In case we provide client services-portals or dashboards, we may
                obtain user names, passwords, and other sensitive data necessary
                to gain access to secure pages of our platforms.
              </li>
              <li>
                <span className="font-semibold font-heading">
                  Service-Related Information:
                </span>{" "}
                n case of availing of any Digital Marketing services by our
                Company on your behalf, then you can share details relating to
                your business and marketing purposes, including information
                about your target audience, products/services, web-analytics,
                CRM data and advertising accounts, etc., consequently. We are
                storing such client specific data in a highly clinical manner
                and are managing it based on particular service agreement.
              </li>
              <li>
                <span className="font-semibold font-heading">
                  Webinar Information:
                </span>{" "}
                In case you sign up to our webinars, events, or workshops, we
                may process your name, email, company, and other registration
                information.
              </li>
            </ul>
            <h3 className="text-lg font-semibold text-secondary font-heading mb-2">
              1.2. Information Automatically Collected (using Cookies and other
              Tracking Technologies):
            </h3>
            Some of the information is automatically gathered by the cookies,
            web beacons, and other tracking technologies when you visit our
            site. This will enable us to know how users are using our site, and
            hence it will enable us to understand how we can improve the user
            experience of our marketing to users.
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
              <li>
                <span className="font-semibold font-heading">
                  Device Information:
                </span>{" "}
                IP IP-address, the type, and version of browsers, operating
                system, the type of device, resolution of the screen. Usage
                Data: Pages visited, length in viewing a page, link followed
                upon, Referring URL, visited date and time, navigating patterns.
                * Location Data: Your location depending on the approximate
                geographical position using your IP address.
              </li>
            </ul>
            <h3 className="text-lg font-semibold text-secondary font-heading mb-2">
              1.3. Third-Party Source Information:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              Third parties may provide us with information about you and such
              information may include:
              <li>
                <span className="font-semibold font-heading">
                  Social Media Platforms:
                </span>{" "}
                In case you communicate with us through the social media
                accounts, we might obtain information (e.g. information on the
                public profile) according to your privacy settings on those
                accounts.
              </li>
              <li>
                <span className="font-semibold font-heading">
                  Service Providers &amp; Business Partners:
                </span>{" "}
                We might have business partners and service providers such as
                analytics providers, advertising networks, and they provide us
                with information that allows us to improve our services or
                perform marketing activities.
              </li>
              <li>
                <span className="font-semibold font-heading">
                  Public Sources:
                </span>{" "}
                We can gather information in publicly available sources to aid
                in the verification or revisions of information that we already
                possess.
              </li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary font-heading mb-3">
              2. The Way We Use your Information
            </h2>
            <p>
              We aggregate our information and use it in different ways, mostly
              to provide our service, to enhance user experience, to communicate
              effectively and to conduct our business:
            </p>
            <br />
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                <span className="font-semibold font-heading">
                  To Give and Cancel Services:
                </span>{" "}
                To supply and administer the Digital Marketing services that you
                have contracted us to furnish, to govern your client account,
                payment processing, and any other obligations we can have with
                you in light of a contract.
              </li>
              <li>
                <span className="font-semibold font-heading">
                  To Personalize User Experience:
                </span>{" "}
                To customise our website content and offerings of the services
                to your interests and preferences, to make your user interaction
                with Risezonic of more applicable nature.
              </li>
              <li>
                <span className="font-semibold font-heading">
                  To Inform You:
                </span>{" "}
                To inform you of our products and services, to send you
                marketing and promotional information (in case you have chosen
                to do so), administrative changes (e.g., service changes, policy
                changes), respond to your inquiries and give you customer
                support.
              </li>
              <li>
                <span className="font-semibold font-heading">
                  Marketing &amp; Advertising:
                </span>{" "}
                To launch targeted advertising campaigns, track the results of
                the campaigns, learn more about the target demographics of our
                followers and inform our general marketing plans. This also
                consists of remarketing.
              </li>
              <li>
                <span className="font-semibold font-heading">
                  In the case of Analytics and Improvement:
                </span>{" "}
                In order to track and analyze how the visitors use the web
                sites, track trends, make improvements in the functionality of
                the web sites, and in the overall quality of our services. This
                usually means de-identifying data and pooling data.
              </li>
              <li>
                <span className="font-semibold font-heading">
                  To Prevent Security and Fraud:
                </span>{" "}
                To guard our systems and our websites against hacking, fraud and
                other harmful practices and keep our operations secure and
                fraud-free.
              </li>
              <li>
                <span className="font-semibold font-heading">
                  Legal Compliance:
                </span>{" "}
                For the sake of being in the law: to act in accordance with
                legal requirements, laws, legal procedures and a request of the
                government.
              </li>
              <li>
                <span className="font-semibold font-heading">
                  Business Operations:
                </span>{" "}
                As an internal record-keeping and procedure that is used to
                audit as well as other general business administration
                operations.
              </li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary font-heading mb-3">
              3. The way We Disclose Your Information
            </h2>
            <p className="mb-3 text-gray-700">
              Risezonic is responsible for maintaining your personal information
              as a secret. Your personal information is not sold or leased by us
              to third parties. There are the following situations under which
              we could share your information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                <span className="font-semibold font-heading">
                  With Service Providers:
                </span>{" "}
                We can provide information to outsider business partners to
                jointly market in some services or to provide common services,
                to co-sponsor events or services, but only with your consent, or
                where needed to form the agreed-upon collaborations.
              </li>
              <li>
                <span className="font-semibold font-heading">
                  With Business Partners:
                </span>{" "}
                For joint marketing or co-sponsored events (with your consent).
              </li>
              <li>
                <span className="font-semibold font-heading">
                  Legal Compliance:
                </span>{" "}
                To comply with laws, court orders, or protect rights and safety.
              </li>
              <li>
                <span className="font-semibold font-heading">
                  Business Transfers:
                </span>{" "}
                There are other third parties, whose access to your information
                our company may provide with your explicit permission.
              </li>
              <li>
                <span className="font-semibold font-heading">
                  With Your Consent:
                </span>
                There are other third parties, whose access to your information
                our company may provide with your explicit permission.
              </li>
              <li>
                <span className="font-semibold font-heading">
                  Aggregated/Anonymized Data:
                </span>{" "}
                we may disclose aggregated or anonymized data that do not
                personally identify you to third parties to be used, among other
                things, in analysis, research, marketing, and industry analysis.
              </li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary font-heading mb-3">
              4. Tracking Technologies and Cookies
            </h2>
            <p>
              As noted in 1.2 we employ cookies and other tracking technology to
              monitor usage of our web site and retain some information.
            </p>
            <br />
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                <span className="font-semibold font-heading">Cookies:</span> are
                tiny files stored in your computer. They enable us to know your
                tastes, your way of interacting with our site and show
                advertisements corresponding to your interests.
              </li>
              <li>
                <span className="font-semibold font-heading">Web Beacons:</span>{" "}
                Web pages or email may contain a small graphic image called a
                Web Beacon which enables us to determine whether a page has been
                seen or an email has been opened.
              </li>
            </ul>
            <p className="mt-2 text-gray-700">
              You can either decline or consent to cookies. Your web browser
              might automatically accept cookies but you can usually change your
              browser setting and refute cookies at the same time. This however,
              can deprive you of making full use of the site.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-primary font-heading mb-3">
              5. Data Security
            </h2>
            <p className="text-gray-700">
              Risezonic uses a mix of physical, technical and administrative
              controls that are supposed to guard against such unauthorized
              accesses, use, alteration and disclosures of the information we
              gather. These will be encryptions, firewall, secure server
              environment, access controls, and frequent security audits, among
              others.
            </p>
            <br />
            <p className="text-gray-700">
              Even though we do our very best to safeguard your personal data
              using commercially accepted measures, neither information transfer
              over the Internet nor electronic storage methods is 100 percent
              secure. As such we cannot assure its total security.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
