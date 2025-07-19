import { useEffect, useState } from "react";
import { fetchLanguages } from "../../api";
import ListItem from "../UI/ListItem";
import type { Language } from "../../entities/Language";
import Paragraph from "../UI/Paragraph";

const Languages: React.FC<{
  onListClick: (languageSelectedId: number) => void;
  languageSelectedId: number;
  profileId: number;
}> = ({ onListClick, languageSelectedId, profileId }) => {
  const [data, setData] = useState<Language[]>();
  const [error, setError] = useState<string | unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await fetchLanguages(profileId);
        setData(response);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [profileId, languageSelectedId]);

  let content;

  if (isLoading) {
    content = <Paragraph>Loading...</Paragraph>;
  }

  if (error) {
    content = <Paragraph>Failed to fetch languages.</Paragraph>;
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
