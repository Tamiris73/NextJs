import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header, Loading } from "../../components";
import { apiResposta } from "../../api/data";
import { IResposta } from "../../interfaces/resposta.interface";
import { Table } from "../../styles/pages";
import { toast } from "react-toastify";

export default function id() {
  const [isLoading, setIsLoading] = useState(true);
  const [resposta, setResposta] = useState<IResposta[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiResposta.index();
        if (response.data.length === 0) {
          toast.error("O usuário não respondeu nessa tentativa!");
        }
        setResposta(response.data);
      } catch (error) {
        toast.error("Ocorreu um erro na chamada do servidor!");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="container">
            <Table>
              <thead>
                <tr>
                  <th>Resposta</th>
                </tr>
              </thead>
              <tbody>
                {resposta&&
                  resposta.map((item) => (
                    <tr key={item.id}>
                      <td><link  key={item.resposta} href={`/${item.resposta}`}/></td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </>
      )}
    </>
  );
}