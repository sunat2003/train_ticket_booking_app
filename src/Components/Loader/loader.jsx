import React from "react";

const Loader = () => (
  <div className="flex flex-col items-center h-screen w-screen justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500"></div>
    <p className="mt-4 text-orange-500">Loading...</p>
  </div>
);

export default Loader;