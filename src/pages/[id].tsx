import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header, Loading } from "../components";
import { apiArea } from "../api/data";
import { IArea } from "../interfaces/areaConhecimento.interface";
import areaConhecimento from "../api/data/areaConhecimento";
import { Table } from "../styles/pages";

export default function Id() {
  const [isLoading, setIsLoading] = useState(true);
  const [areaConhecimento, setArea] = useState<IArea[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiArea.show(router.query.id as string);
        if (response.data.length === 0) {
          toast.error("Não existe aluno neste curso!");
        }
        setArea(response.data);
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
                  <th>Nome</th>
                </tr>
              </thead>
              <tbody>
                {areaConhecimento &&
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