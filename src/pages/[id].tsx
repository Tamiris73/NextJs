import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header, Loading } from "../components";
import { apiTentativa } from "../api/data";
import { ITentativa } from "../interfaces/tentativa.interface";
import { apiArea} from "../api/data";
import { IArea } from "../interfaces/areaConhecimento.interface";
import { Table } from "../styles/pages";
import { toast } from "react-toastify";

export default function id() {
  const [isLoading, setIsLoading] = useState(true);
  const [tentativa, setTentativa] = useState<ITentativa[]>([]);
  const [areaConhecimento, setArea] = useState<IArea[]>([])
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiTentativa.show(router.query.id as string);
        if (response.data.length === 0) {
          toast.error("O usuário não possui tentativas!");
        }
        setTentativa(response.data);
        const response2 = await apiArea.show(router.query.id as string);
        if (response2.data.length === 0) {
          toast.error("Não há area de conhecimento!");
        }
        setArea(response2.data);
      } catch (error) {
        toast.error("Ocorreu um erro na chamada do servidor!");
      } finally {
        setIsLoading(false);
      }
    };
    if (router.query.id) {
      fetchData();
    }
  }, [router.query.id]);
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
                  <th>Tentativa</th>
                  <th>Area de Conhecimento</th>
                </tr>
              </thead>
              <tbody>
                {tentativa&&
                  tentativa.map((item) => (
                    <tr key={item.id}>
                      <td>{item.tentativa}</td>
                    </tr>
                  ))}
                  {areaConhecimento&&
                  areaConhecimento.map((item) => (
                    <tr key={item.id}>
                      <td>{item.nome}</td>
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