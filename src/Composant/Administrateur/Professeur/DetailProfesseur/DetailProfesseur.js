import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

const DetailProfesseur = (route) => {
  let history = useHistory();

  const { employees, editEmployee } = useContext(GlobalContext);

  const [selectedUser, setSelectedUser] = useState({
    id: null,
    name: "",
    designation: "",
    location: "",
  });

  const currentUserId = route.match.params.id;

  useEffect(() => {
    const employeeId = currentUserId;
    const selectedUser = employees.find(
      (currentEmployeeTraversal) => currentEmployeeTraversal.id === parseInt(employeeId)
    );
    setSelectedUser(selectedUser);
  }, [currentUserId, employees]);

  const onSubmit = (e) => {
    e.preventDefault();
    editEmployee(selectedUser);
    history.push("/ajout_prof");
  };

  const handleOnChange = (userKey, newValue) =>
    setSelectedUser({ ...selectedUser, [userKey]: newValue });

  if (!selectedUser || !selectedUser.id) {
    return <div>Pas de données.</div>;
  }

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Nom du professeur
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 
              text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.name}
              onChange={(e) => handleOnChange("name", e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="location"
            >
              Ecole de formation
            </label>
            <input
              className="shadow appearance-none border rounded w-full 
              py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.location}
              onChange={(e) => handleOnChange("location", e.target.value)}
              type="text"
              placeholder="Enter location"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="designation"
            >
               Matiere enseigné
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 
              text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.designation}
              onChange={(e) => handleOnChange("designation", e.target.value)}
              type="text"
              placeholder="Enter designation"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-green-400 w-full hover:bg-green-500
             text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
            Appliquer les modifications
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/liste_prof">Retour</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default DetailProfesseur