import React from "react";
import { useEffect } from "react";
import NavForOther from "../components/NavForOther";
import { Helmet } from "react-helmet-async";
const Career = () => {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      type: "Full Time",
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "New York, USA",
      type: "Full Time",
    },
    { id: 3, title: "UI/UX Designer", location: "Remote", type: "Contract" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Careers at Risezonic | Join Our Digital Marketing Team.</title>
        <meta
          name="description"
          content="Start your Digital Marketing career at Risezonic. Join the Risezonic group team in Delhi and work on exciting, high-impact campaigns."
        />
        <meta name="keywords" content="Risezonic " />
        <link rel="canonical" href="https://www.risezonic.com/career" />
      </Helmet>
      <NavForOther />
      <div className="min-h-screen bg-gray-50 py-12 px-4 pt-28">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Careers at Our Company
          </h2>
          <p className="text-gray-600 mb-10">
            Join our passionate team and help us build great things. Explore
            current openings below.
          </p>
          <div className="space-y-6">
            {/* {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {job.location} • {job.type}
                  </p>
                </div>
                <button className="mt-4 md:mt-0 bg-primary text-white px-4 py-2 rounded hover:bg-secondary ">
                  Apply Now
                </button>
              </div>
            ))} */}

            <h2 className="text-3xl  font-primary font-heading ">
              No Opening As per Now{" "}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
