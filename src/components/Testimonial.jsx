import React from "react";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Customer",
    feedback:
      "Absolutely amazing service! The products arrived quickly and were exactly as described. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    role: "Regular Buyer",
    feedback:
      "Shopping here is always a pleasure. Great selection, smooth checkout, and fast delivery every time.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Lisa Brown",
    role: "Verified User",
    feedback:
      "Customer support was incredibly helpful when I had a question about my order. Will shop again!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonial = () => {
  return (
    <section
      className="bg-gray-100 py-12 bg-fixed bg-center bg-cover"
      //   style={{
      //     backgroundColor: "#f9f9f9",
      //     backgroundImage:
      //       "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%2300a19b' fill-opacity='0.4'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      //   }}
      style={{
        backgroundColor: "#00a19b",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 ">
        <h2 className="text-3xl  text-center text-white mb-10 font-heading">
          What Our Customers Say
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 italic font-body">
                "{testimonial.feedback}"
              </p>
              <h4 className="mt-4 font-semibold text-gray-800">
                {testimonial.name}
              </h4>
              <span className="text-sm text-gray-500">{testimonial.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
