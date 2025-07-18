import { useEffect, useState } from "react";
import { fetchTranslations } from "../../api";
import type { Translation } from "../../entities/Translation";
import ListItem from "../UI/ListItem";

const Translations: React.FC<{ wordId: number }> = ({ wordId }) => {
  const [data, setData] = useState<Translation[]>();
  const [error, setError] = useState<string | unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await fetchTranslations(wordId);
        setData(response);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [wordId]);

  function handleListClick(id: number) {
    console.log(id);
  }

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
      <ul>
        {data.map((item) => (
          <div key={item._id}>
            <p className='ml-3 font-bold text-lg'>{item.word.word}</p>
            {item.translations.map((itemTranslations) => (
              <ListItem
                key={itemTranslations._id}
                itemId={itemTranslations._id}
                item={`${itemTranslations.word} - ${itemTranslations.language.name}`}
                onListClick={() => handleListClick(itemTranslations._id)}
              />
            ))}
          </div>
        ))}
      </ul>
    );
  }

  return <div>{content}</div>;
};

export default Translations;
