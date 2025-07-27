import { useEffect, useState } from "react";
import { fetchTranslations } from "../../api";
import type { Translation } from "../../entities/Translation";
import ListItem from "../UI/ListItem";

const Translations: React.FC<{ wordId: string }> = ({ wordId }) => {
  const [data, setData] = useState<Translation[]>();
  const [error, setError] = useState<string | unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    setIsLoading(true);

    fetchTranslations(wordId)
      .then((response) => {
        if (response) {
          setData(response);
        } else {
          console.error("Failed to fetch translations.");
        }
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching translations:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [wordId]);

  function handleListClick(id: string) {
    console.log(id);
  }

  let content;

  if (isLoading) {
    content = <div>Carregando...</div>;
  }

  if (error) {
    content = <div>Falha ao carregar palavras.</div>;
  }

  if (data?.length === 0) {
    content = <div>Não há traduções cadastradas para essa palavra.</div>;
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
