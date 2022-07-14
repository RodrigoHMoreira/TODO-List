import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Head, TableWrap, Tittle, Wrap } from "./styles";

export const Users = () => {
  const { data, setId, setName } = useContext(UserContext);

  return (
    <Wrap>
      <Head>
        <Tittle>Lista de usuários</Tittle>
      </Head>
      <TableWrap>
        {data.map((item, index) => (
          <Link
            key={index}
            id="link"
            to={"/assignment"}
            onClick={() => {
              setId(item.id);
              setName(item.name);
            }}
          >
            {item.name}
          </Link>
        ))}
      </TableWrap>
    </Wrap>
  );
};
