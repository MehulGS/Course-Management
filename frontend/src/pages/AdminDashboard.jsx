import React from "react";

const AdminDashboard = () => {
  return (
    <div className="p-8 bg-blue-800 min-h-screen">
      <div className="bg-sky-950 p-8 rounded-lg shadow-md mb-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-white">
          Welcome to Our School
        </h1>
        <p className="text-center text-lg text-white mb-6">
          A place where learning meets innovation.
        </p>
      </div>

      {/* Vision Section without Card */}
      <div className="p-8">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Our Vision
        </h2>
        <p className="text-white text-justify">
          Our vision is to be a beacon of excellence in education, nurturing
          young minds to become future leaders. We strive to create a nurturing
          environment that fosters curiosity, creativity, and critical thinking.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
