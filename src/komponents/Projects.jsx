import React from "react";

export default function Projects({ projects }) {
  return (
    <div
      id="projects"
      className="bg-background flex flex-col items-center justify-center px-4 -mt-4 py-10"
    >
      <h3 className="text-white text-2xl font-bold text-headline p-2 ">
        Projekts
      </h3>
      <p className="text-sm text-paragraph text-center ">
        Ta en titt på några av de projekt jag har gjort!
      </p>
      <div className="flex flex-wrap w-full  max-w-screen-xl mx-auto   ">
        {projects?.map((project, i) => (
          //   <FadeIn key={i}>
          // <a href={`/project/${project?.id}`}>
          <div
            key={i}
            className=" w-full sm:w-1/3 md:w-1/2 lg:w-1/3 p-2 rounded-xl bg-lightBackground p-3 duration-200 hover:brightness-125 h-full mb-8"
          >
            <div className="relative">
              <img
                className=" shadow-xl object-cover rounded-xl"
                src={project?.poster}
                // src={'/bild1.png'}
                alt={project?.name}
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h3 className="text-headline text-white text-xl font-semibold py-2">
                  {project?.name}
                </h3>
                <p className="text-paragraph pb-2 text-sm">
                  {project?.summery
                    ? project?.summery
                    : "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Optio, reiciendis."}
                </p>
              </div>
              <div className="flex gap-2 flex-end">
                {project?.tools.slice(0, 2).map((item, i) => (
                  <p
                    key={i}
                    className="text-paragraph font-semibold text-xs border-greenText shadow-md px-2 py-1 border-2 rounded-full"
                  >
                    {item}
                  </p>
                ))}
                <p className="text-paragraph font-bold text-xs border-greenText shadow-md px-2 py-1 border-2 rounded-full">
                  {"+ " + String(project?.tools.length - 2)}
                </p>
              </div>
            </div>
          </div>
          // </a>
          //   </FadeIn>
        ))}
      </div>
    </div>
  );
}
