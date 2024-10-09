import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const TeacherDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-blue-800 h-screen">
      <div className="p-8">
      <h1 className="text-3xl text-white font-bold mb-4">
        Welcome to Teacher Dashboard, {user.name}!
      </h1>
      <p className="text-lg text-white">
        Use the sidebar to manage your courses and view students.
      </p>
    </div>
    </div>
  );
};

export default TeacherDashboard;
