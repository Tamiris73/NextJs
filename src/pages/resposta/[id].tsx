import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header, Loading } from "../../components";
import { apiQuestao } from "../../api/data";
import { IQuestao } from "../../interfaces/questao.interface";
import { Table } from "../../styles/pages";
import { toast } from "react-toastify";

export default function id() {
  const [isLoading, setIsLoading] = useState(true);
  const [resposta, setQuestao] = useState<IQuestao[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiQuestao.index();
        if (response.data.length === 0) {
          toast.error("Não há questão!");
        }
        setQuestao(response.data);
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
                  <th>Questão</th>
                </tr>
              </thead>
              <tbody>
                {resposta&&
                  resposta.map((item) => (
                    <tr key={item.id}>
                      <td><link  key={item.questao} href={`/${item.questao}`}/></td>
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