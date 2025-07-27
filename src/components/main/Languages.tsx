import { useEffect, useState } from "react";
import { fetchLanguages } from "../../api";
import ListItem from "../UI/ListItem";
import type { Language } from "../../entities/Language";
import Paragraph from "../UI/Paragraph";

const Languages: React.FC<{
  onListClick: (languageSelectedId: string) => void;
  languageSelectedId: string;
  profileId: string;
}> = ({ onListClick, languageSelectedId, profileId }) => {
  const [data, setData] = useState<Language[]>();
  const [error, setError] = useState<string | unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    setIsLoading(true);

    fetchLanguages(profileId)
      .then((response) => {
        if (response) {
          setData(response);
        } else {
          console.error("Failed to fetch languages.");
        }
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching languages:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [profileId, languageSelectedId]);

  let content;

  if (isLoading) {
    content = <Paragraph>Carregando...</Paragraph>;
  }

  if (error) {
    content = <Paragraph>Falha ao carregar línguas.</Paragraph>;
  }

  if (data !== undefined && data !== null && data.length > 0) {
    content = (
      <ul>
        {data.map((item) => (
          <ListItem
            key={item._id}
            itemId={item._id}
            item={item.name}
            onListClick={() => onListClick(item._id)}
            listItemSelectedId={languageSelectedId}
          />
        ))}
      </ul>
    );
  } else {
    content = <Paragraph>There is no languages in this profile.</Paragraph>;
  }

  return <>{content}</>;
};

export default Languages;
