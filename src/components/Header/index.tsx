import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaHome } from "react-icons/fa";
import { apiUser } from "../../api/data";
import { IUser } from "../../interfaces/user.interface";
import { Link } from "../../styles";
import { Container } from "./styles";

const Header= () => {
  const router = useRouter();
  const [user, setUser] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiUser.index();
      setUser(response.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <div className="container">
        <FaHome onClick={() => router.push("/")} />
        {user&&
          user.map((item) => (
            <Link key={item.id} href={`/${item.id}`}>
              {item.username}
            </Link>
          ))}
      </div>
    </Container>
  );
};
export default Header;