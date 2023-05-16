import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg";

const Home = () => {
  return (
    <section>
      <div className="bg-gray-100">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center text-gray-900 lg:pb-56 md:py-32 md:px-10 lg:px-32">
          <h1 className="text-5xl font-bold leading-none text-gray-800 sm:text-6xl xl:max-w-3xl">
            Welcome To Smart Home
          </h1>
          <p className="mt-6 mb-8 text-lg text-gray-900 sm:mb-12 xl:max-w-3xl">
            Best E-commerce platform for buying high quality Smart Home
            Appliances at extremely affordable Price.
          </p>
          <div className="flex flex-wrap justify-center">
            <Link to="/shop">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold text-gray-900 transition-colors duration-200 rounded-full hover:bg-cyan-400 bg-cyan-200"
              >
                Shop Now
              </button>
            </Link>
            <Link to="/about">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg text-gray-900 border rounded-full border-cyan-400"
              >
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
      <img
        src={heroImg}
        alt=""
        className="w-5/6 mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-40"
      />
    </section>
  );
};

export default Home;
