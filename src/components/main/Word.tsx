import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchWords } from "../../api";
import ListItem from "../UI/ListItem";
import { useEffect, useState } from "react";
import type { Word } from "../../entities/Word";

const Word: React.FC<{
  onListClick: (wordId: number) => void;
  languageId: number;
}> = ({ onListClick, languageId }) => {
  const [data, setData] = useState<Word[] | undefined>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchWords(languageId);
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [languageId]);

  console.log("wordData", data);

  let content;

  // if (isLoading) {
  //   content = <div>Loading...</div>;
  // }

  // if (isError) {
  //   content = <div>Failed to fetch words.</div>;
  // }

  if (data?.length === 0) {
    content = <div>There is no words with this language.</div>;
  }

  if (data !== undefined && data !== null && data.length > 0) {
    content = (
      <ul>
        {data.map((item) => (
          <ListItem
            key={item._id}
            id={item._id}
            item={item.word}
            onListClick={() => onListClick(item._id)}
          />
        ))}
      </ul>
    );
    console.log(data);
  }

  return <div>{content}</div>;
};

export default Word;
