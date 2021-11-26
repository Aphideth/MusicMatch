import MockData from "../MOCK_DATA.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Banniere from "./Banniere";

const Teachers = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Navbar />
      <Banniere title="Premier Hackathon avec la team plop !" />
      <div className="teacherContainer">
        <div className="teacherCards">
          <input
            type="text"
            placeholder="search.."
            className="form-control"
            style={{ marginTop: 50, marginBottom: 20, width: "40%" }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {MockData.filter((val) => {
            if (search === "") {
              return val;
            } else if (
              val.first_name?.toLowerCase().includes(search.toLowerCase()) ||
              val.last_name?.toLowerCase().includes(search.toLowerCase()) ||
              val.music?.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          }).map((user) => (
            <div className="teacherCard">
              <div className="teacherContent">
                <div>
                  <img className="teacherImage" src={user.image} alt="" />
                </div>
                <div className="infos">
                  <p>Prénom : {user.first_name}</p>
                  <p>Nom : {user.last_name}</p>
                  <p>Professeur : {user.music}</p>
                  <p>Description : {user.description}</p>
                  <p>Créneau : {user.creneau}</p>
                </div>
              </div>
              <div className="contactButton">
                <Link to={`/inscription`}>
                  <button className="teacherButton">S'inscrire</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teachers;
