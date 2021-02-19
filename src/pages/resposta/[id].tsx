import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header, Loading } from "../../components";
import { apiQuestao } from "../../api/data";
import { IQuestao } from "../../interfaces/questao.interface";
import { apiAlternativa } from "../../api/data";
import { IAlternativa } from "../../interfaces/alternativa.interface";
import { Table } from "../../styles/pages";
import { toast } from "react-toastify";

export default function id() {
  const [isLoading, setIsLoading] = useState(true);
  const [resposta, setQuestao] = useState<IQuestao[]>([]);
  const [alternativa, setAlternativa] = useState<IAlternativa[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiQuestao.show(router.query.id as string);
        if (response.data.length === 0) {
          toast.error("Não há questão!");
        }
        setQuestao(response.data);
        const response2 = await apiAlternativa.show(router.query.id as string);
        if (response.data.length === 0) {
          toast.error("Não há questão!");
        }
        setAlternativa(response2.data);
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
                  <th>Questão</th>
                </tr>
              </thead>
              <tbody>
                {resposta&&
                  resposta.map((item) => (
                    <tr key={item.id}>
                      <td>{item.questao}</td>
                    </tr>
                  ))}
                  {alternativa&&
                  alternativa.map((item) => (
                    <tr key={item.id}>
                      <td>{item.alternativa}</td>
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