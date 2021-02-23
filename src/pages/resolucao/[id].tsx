import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header, Loading } from "../../components";
import { apiResolucao } from "../../api/data";
import { IResolucao } from "../../interfaces/resolucao.interface";
import { Table } from "../../styles/pages";
import { toast } from "react-toastify";

export default function id() {
  const [isLoading, setIsLoading] = useState(true);
  const [resolucao, setResolucao] = useState<IResolucao[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiResolucao.index();
        if (response.data.length === 0) {
          toast.error("Não há resolução!");
        }
        setResolucao(response.data);
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
                  <th>Resolução</th>
                  <th>Gabarito</th>
                </tr>
              </thead>
              <tbody>
                {resolucao&&
                  resolucao.map((item) => (
                    <tr key={item.id}>
                      <td><link  key={item.resolucao} href={`/${item.resolucao}`}/></td>
                      <td><link  key={item.gabarito} href={`/${item.gabarito}`}/></td>
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