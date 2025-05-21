// components/StatsSection.jsx
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    id: 1,
    label: "Year",
    value: 8,
    icon: "👤",
    color: "bg-white",
  },
  {
    id: 2,
    label: "Global Reach",
    value: 750,
    icon: "⭐",
    color: "bg-white",
  },
  {
    id: 3,
    label: "KPI's",
    value: 1500,
    icon: "✏️",
    color: "bg-white",
  },
  {
    id: 4,
    label: "Clients",
    value: 200,
    icon: "💼",
    color: "bg-white",
  },
];

export default function StrengthInNumber() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="flex flex-wrap justify-center items-center gap-6 py-16 px-4 bg-cover bg-center bg-fixed "
      style={{
        backgroundColor: "#00a19b",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`${stat.color} text-black hover:bg-secondary hover:text-white w-64 h-64 flex flex-col items-center justify-center rounded-xl shadow-lg`}
        >
          {/* <div className="text-4xl mb-2">{stat.icon}</div> */}
          <div className="text-4xl  font-heading">
            {inView && <CountUp end={stat.value} duration={2} />}+
          </div>
          <div className="text-lg font-light mt-2 font-body">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
