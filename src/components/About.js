import React from "react";

const About = () => {
  return (
    <div name="about" className="h-screen bg-purple-600">
      <div className="max-w-screen-lg p-4 mx-auto h-full flex flex-col justify-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold inline border-b-2 border-gray-500 text-center sm:text-left">
          About
        </h2>

        <div className="mt-8 md:mt-16">
          <p className="text-lg md:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
            deserunt illum mollitia officiis qui exercitationem perferendis
            neque quasi a recusandae necessitatibus tempora iusto! Blanditiis
            error iste, totam fugiat recusandae rerum laborum perferendis
            molestiae aperiam asperiores nemo. Magni dolor maxime debitis
            vitae, eaque hic ab mollitia voluptatibus, a nostrum eveniet
            laborum!
          </p>

          <br />

          <p className="text-lg md:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            pariatur, vel similique sint, nobis aspernatur ut praesentium
            explicabo ipsam aliquid quasi laboriosam et culpa possimus
            repudiandae quisquam ullam maiores ab unde. Fugiat odio mollitia
            nemo alias. Commodi facilis atque nulla vero voluptatem explicabo.
            Quibusdam, magni quo! Eum cupiditate debitis labore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
