import { fetchWords } from "../../api";
import ListContainer from "../UI/ListContainer";
import ListItem from "../UI/ListItem";
import { useEffect, useState } from "react";
import type { Word } from "../../entities/Word";
import Paragraph from "../UI/Paragraph";

const Words: React.FC<{
  onListClick: (wordId: string) => void;
  wordSelectedId: string;
  languageId: string;
}> = ({ onListClick, wordSelectedId, languageId }) => {
  const [data, setData] = useState<Word[]>();
  const [error, setError] = useState<string | unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    setIsLoading(true);

    fetchWords(languageId)
      .then((response) => {
        if (response) {
          setData(response);
        } else {
          console.error("Failed to fetch words.");
        }
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching words:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [languageId]);

  let content;

  if (isLoading) {
    content = <Paragraph>Carregando...</Paragraph>;
  }

  if (error) {
    content = <Paragraph>Falha ao carregar palavras.</Paragraph>;
  }

  if (data?.length === 0) {
    content = (
      <Paragraph>Não há palavras cadastradas para essa língua.</Paragraph>
    );
  }

  if (data !== undefined && data !== null && data.length > 0) {
    content = (
      <ListContainer>
        {data
          .sort((a, b) => a.word.localeCompare(b.word))
          .map((item) => (
            <ListItem
              key={item._id}
              itemId={item._id}
              item={item.word}
              onListClick={() => onListClick(item._id)}
              listItemSelectedId={wordSelectedId}
            />
          ))}
      </ListContainer>
    );
  }

  return <div>{content}</div>;
};

export default Words;
