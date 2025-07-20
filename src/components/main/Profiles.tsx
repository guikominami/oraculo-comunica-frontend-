import { useEffect, useState } from "react";
import { fetchProfiles } from "../../api";
import ListItem from "../UI/ListItem";
import type { Language } from "../../entities/Language";
import Paragraph from "../UI/Paragraph";

const Profiles: React.FC<{
  onListClick: (profileSelectedId: number) => void;
  profileSelectedId: number;
}> = ({ onListClick, profileSelectedId }) => {
  const [data, setData] = useState<Language[]>();
  const [error, setError] = useState<string | unknown>(null);
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await fetchProfiles();
        setData(response);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [profileSelectedId]);

  let content;

  if (isLoading) {
    content = <Paragraph>Loading...</Paragraph>;
  }

  if (error) {
    content = <Paragraph>Failed to fetch profiles.</Paragraph>;
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
            listItemSelectedId={profileSelectedId}
          />
        ))}
      </ul>
    );
  }

  return <div>{content}</div>;
};

export default Profiles;
