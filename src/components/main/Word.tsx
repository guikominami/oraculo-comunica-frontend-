import { fetchWords } from "../../api";
import ListContainer from "../UI/ListContainer";
import ListItem from "../UI/ListItem";
import { useEffect, useState } from "react";
import type { Word } from "../../entities/Word";

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
    content = <div>Loading...</div>;
  }

  if (error) {
    content = <div>Failed to fetch words.</div>;
  }

  if (data?.length === 0) {
    content = <div>There is no words with this language.</div>;
  }

  if (data !== undefined && data !== null && data.length > 0) {
    content = (
      <ListContainer>
        {data.map((item) => (
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
