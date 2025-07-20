import { fetchWords } from "../../api";
import ListContainer from "../UI/ListContainer";
import ListItem from "../UI/ListItem";
import { useEffect, useState } from "react";
import type { Word } from "../../entities/Word";
import Paragraph from "../UI/Paragraph";

const Words: React.FC<{
  onListClick: (wordId: number) => void;
  wordSelectedId: number;
  languageId: number;
}> = ({ onListClick, wordSelectedId, languageId }) => {
  const [data, setData] = useState<Word[]>();
  const [error, setError] = useState<string | unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await fetchWords(languageId);
        setData(response);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [languageId]);

  let content;

  if (isLoading) {
    content = <Paragraph>Loading...</Paragraph>;
  }

  if (error) {
    content = <Paragraph>Failed to fetch words.</Paragraph>;
  }

  if (data?.length === 0) {
    content = <Paragraph>There is no words with this language.</Paragraph>;
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
