import React from "react";
import Workprocess1 from "../assets/images/Home/Workprocess1.jpg";
import Workprocess2 from "../assets/images/Home/Workprocess2.jpg";
import Workprocess3 from "../assets/images/Home/Workprocess3.jpg";
export default function Workprocess() {
  return (
    <div>
      <div className="flex-block text-center justify-center pt-10 relative container mx-auto">
        <h2 className="text-4xl font-heading ">Work Process</h2>

        <span className="text-amber-600 text-4xl font-semibold absolute top-12 left-0 right-0 bottom-0 inset-0 ">
          ______________
        </span>
        <p className="text-xl pt-6 text-gray-600 font-body pb-8">
          To achieve our results, we are creative, plan well and make teamwork
          run smoothly. The main purpose of our strategy is to support your
          business’s growth by finding out what you require and creating
          solutions that help.
        </p>
        <div className="sm:flex sm:justify-between justify-center bg-gray-200 ">
          <div className="h-100 w-full flex justify-center text-center bg-gray-200  pr-0 pl-0 pt-6 pb-0   ">
            <article>
              <section className="bg-white h-[35rem] flex justify-center text-center items-center ">
                <div className="relative p-4">
                  <h2 className="text-4xl font-heading text-primary">
                    Plan & Create
                  </h2>
                  <span className="text-amber-600 text-4xl font-semibold absolute top-4 left-0 right-0 bottom-0 inset-0 ">
                    ______________
                  </span>
                  <p className="pt-8">
                    By using the skills of a top social media marketing agency
                    and expert website designers, Risezonic helps brands become
                    strong digital presences. Grow and improve your business
                    with carefully made digital tools.
                  </p>
                </div>
              </section>
            </article>
          </div>
          <div className="h-100 w-full bg-gray-300 overflow-hidden ">
            <img
              className="bg-contain bg-center h-full w-full "
              src="https://cdn.tophatch.com/media/filer_public_thumbnails/filer_public/04/e3/04e32b3d-d563-4bdf-9513-1df4abeffb85/floorplan_v61_cover4_2100.png__2100.0x1181.0_subsampling-2.png"
              alt="Plan & Create"
            />
          </div>
        </div>
        <div className="sm:flex sm:justify-between justify-center bg-gray-200 ">
          <div className="h-100 w-full bg-gray-300 overflow-hidden ">
            <img
              className="bg-contain bg-center h-full w-full "
              // src="https://plus.unsplash.com/premium_photo-1661430753296-11d1fde8b7dd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwZGVza3xlbnwwfHwwfHx8MA%3D%3D"
              src={Workprocess2}
              alt="Plan & Create"
            />
          </div>
          <div className="h-100 w-full flex justify-center text-center bg-gray-200  pl-0 pr-0 pt-0 pb-0  ">
            <article>
              <section className="bg-white h-[35rem] flex justify-center text-center items-center ">
                <div className="relative p-4">
                  <h2 className="text-4xl font-heading text-primary">
                    Develop & testing
                  </h2>
                  <span className="text-amber-600 text-4xl font-semibold absolute top-4 left-0 right-0 bottom-0 inset-0 ">
                    ______________
                  </span>
                  <p className="pt-8">
                    Risezonic makes certain that no mistakes are made by
                    performing detailed develop & testing in all our website
                    design and development work. Provides the best website
                    design services, we supply platforms that work quickly, are
                    safe and perform well on everything from websites to apps.
                  </p>
                </div>
              </section>
            </article>
          </div>
        </div>
        <div className="sm:flex sm:justify-between justify-center bg-gray-200 ">
          <div className="h-100 w-full flex justify-center text-center bg-gray-200  pr-0 pl-0 pt-6 pb-0   ">
            <article>
              <section className="bg-white h-[35rem] flex justify-center text-center items-center ">
                <div className="relative">
                  <h2 className="text-4xl font-heading text-primary">
                    Make Live
                  </h2>
                  <span className="text-amber-600 text-4xl font-semibold absolute top-4 left-0 right-0 bottom-0 inset-0 ">
                    ______________
                  </span>
                  <p className="pt-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur eum assumenda nisi nesciunt, obcaecati facilis
                    placeat fugit. Consectetur, harum magni. Nemo voluptate eos,
                    repellendus voluptas velit consequuntur! Aspernatur quasi
                    autem accusamus est beatae perferendis eligendi quos?
                  </p>
                </div>
              </section>
            </article>
          </div>
          <div className="h-100 w-full bg-gray-300 overflow-hidden ">
            <img
              className="bg-cover bg-center h-full w-full "
              // src="https://media.istockphoto.com/id/1222160402/photo/women-using-laptop-computer.jpg?s=612x612&w=0&k=20&c=pE4fJnDVx3fr8FWZru30rwQgrPolpupbVBf83Us7MwM="
              src={Workprocess3}
              alt="Plan & Create"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
