import { useQuery } from "@tanstack/react-query";
import { fetchLanguages } from "../../api";
import ListItem from "../UI/ListItem";

const Language: React.FC<{
  onListClick: (languageId: number) => void;
}> = ({ onListClick }) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => fetchLanguages(),
    queryKey: ["languages"],
    staleTime: Infinity,
  });

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  }

  if (isError) {
    content = <div>Failed to fetch languages.</div>;
  }

  if (data !== undefined && data !== null && data.length > 0) {
    content = (
      <ul>
        {data.map((item) => (
          <ListItem
            key={item._id}
            id={item._id}
            item={item.name}
            onListClick={() => onListClick(item._id)}
          />
        ))}
      </ul>
    );
    console.log(data);
  }

  return <div>{content}</div>;
};

export default Language;
