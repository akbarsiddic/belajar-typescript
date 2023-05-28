import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="">
        {/* hero section */}
        <section className="h-screen mx-auto flex justify-center items-center">
          <div className="">
            <h1 className="text-4xl text-black font-bold">Akbarsiddiq</h1>
          </div>
        </section>

        {/* about section */}
        <section>
          <div className="container-fluid">
            <h1 className="text-4xl font-semibold text-gray-700 p-4">Cardes</h1>
            <div className="flex flex-wrap justify-between p-4">
              <div className="max-w-sm rounded overflow-hidden bg-teal-200 shadow-lg">
                <Image
                  src="/poto.jpg"
                  width={500}
                  height={500}
                  alt="akbarsidddiq"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden bg-teal-200 shadow-lg">
                <Image
                  src="/poto.jpg"
                  width={500}
                  height={500}
                  alt="akbarsidddiq"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden bg-teal-200 shadow-lg">
                <Image
                  src="/poto.jpg"
                  width={500}
                  height={500}
                  alt="akbarsidddiq"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
