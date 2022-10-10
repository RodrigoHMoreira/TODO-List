import { EnvelopeSimple, MapPin, Phone } from "phosphor-react";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../services/api/api";
import { Wrap } from "./styles";

export const DataUsers = () => {
  const [user, setUser] = useState([
    {
      userId: 0,
      id: 0,
      title: "",
      completed: false,
    },
  ]);
  const [photo, setPhoto] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [dataUser, setDataUser] = useState({
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const id = window.location.hash.split("#")[1];
  const idInt = parseInt(id);

  const handleNameUser = () => {
    var name =
      window.location.pathname.split("/datausers/")[1].split("%20")[0] +
      " " +
      window.location.pathname.split("/datausers/")[1].split("%20")[1];
    setNameUser(name);
  };

  const getDataUsers = async () => {
    await api.get("/users").then((response) => {
      const res = response.data;
      setDataUser(res[id]);
      console.log(dataUser);
    });
  };

  const getUser = async () => {
    await api.get(`/todos/${id}`).then((response) => {
      const res = response.data;
      const newUser = [res];
      setUser(newUser);
    });
  };

  const getPhoto = async () => {
    await api.get(`/photos/${id}`).then((response) => {
      const res = response.data.url;
      setPhoto(res);
    });
  };

  useEffect(() => {
    getUser();
    getPhoto();
    getDataUsers();
    handleNameUser();
  }, []);

  return (
    <>
      <Header />
      <Wrap>
        <>
          {user.map((item) => {
            return (
              <>
                <header>
                  <section>
                    <img src={photo} />
                  </section>
                  <section>
                    <h1>{nameUser}</h1>
                    <h2>{dataUser.company.name}</h2>
                    <p>{item.title}</p>
                    <div>
                      <a href="#">
                        <Phone size={20} />
                        {dataUser.phone}
                      </a>
                      <a href="#">
                        <EnvelopeSimple size={20} />
                        {dataUser.email}
                      </a>
                      <a href="#">
                        <MapPin size={20} />
                        {dataUser.address.street},
                        {dataUser.address.suite.split("Suite" || "Apt.")} -
                        {dataUser.address.city}
                      </a>
                    </div>
                  </section>
                </header>
                <main></main>
              </>
            );
          })}
        </>
        {/* <main>
              {user.map((item, index) => {
                return (
                  <div key={index}>
                    <section>
                      
                    </section>
                    <td data-label="EMPRESA">{dataUser.company.name}</td>
                    <td data-label="FUNÇÃO">{item.title}</td>
                    <td data-label="COORDENADOR">{dataUser.username}</td>
                    </td>
                  </div>
                );
              })}
          </main> */}
      </Wrap>
    </>
  );
};
