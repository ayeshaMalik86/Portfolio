import React from "react";

const Skills = () => {
  const DividerWithText = ({ text }) => {
    return (
        <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-xl">{text}</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
        );
  };
  return (
    <div className="font-mona text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <h1 className="text-7xl font-bold mb-8 text-center">Skills</h1>
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Programming Languages */}
        <div className="mb-[50px]">
          <DividerWithText text="Programming Languages" />
          <div className="flex gap-10">
            <div
              className="flex items-center md:w-64 md:h-16 rounded-lg shadow-md px-4"
              style={{
                background: `
                  linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)),
                  url('/assets/js.png')
                `,
                backgroundSize: "cover",
                backgroundPosition: "center right",
                backgroundRepeat: "no-repeat",
              }}
            >
              <span className="font-medium text-gray-800">Javascript</span>
            </div>
            <div
              className="flex items-center w-64 h-16 rounded-lg shadow-md px-4"
              style={{
                background: `
                  linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)),
                  url('/assets/ts.png')
                `,
                backgroundSize: "cover",
                backgroundPosition: "center right",
                backgroundRepeat: "no-repeat",
              }}
            >
              <span className="font-medium text-gray-800">Typescript</span>
            </div>
          </div>
        </div>

        {/* Markup & Style */}
        <div className="mb-[50px]">
        <DividerWithText text="Markup and Style" />
          <div className="flex gap-10">
            <div
              className="flex items-center w-64 h-16 rounded-lg shadow-md px-4"
              style={{
                background: `
                  linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)),
                  url('/assets/css.svg')
                `,
                backgroundSize: "cover",
                backgroundPosition: "center right",
                backgroundRepeat: "no-repeat",
              }}
            >
              <span className="font-medium text-gray-800">CSS</span>
            </div>
            <div
              className="flex items-center w-64 h-16 rounded-lg shadow-md px-4"
              style={{
                background: `
                  linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)),
                  url('/assets/html.svg')
                `,
                backgroundSize: "cover",
                backgroundPosition: "center right",
                backgroundRepeat: "no-repeat",
              }}
            >
              <span className="font-medium text-gray-800">HTML</span>
            </div>
          </div>
        </div>

        {/* Libraries */}
        <div>
            <DividerWithText text="Libraries" />
          <div
            className="flex items-center w-64 h-16 rounded-lg shadow-md px-4"
            style={{
              background: `
                linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)),
                url('/assets/react.svg')
              `,
              backgroundSize: "cover",
              backgroundPosition: "center right",
              backgroundRepeat: "no-repeat",
            }}
          >
            <span className="font-medium text-gray-800">React</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
