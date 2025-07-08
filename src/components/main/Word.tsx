import { useQuery } from "@tanstack/react-query";
import { fetchWords } from "../../api";
import ListItem from "../UI/ListItem";

const Word: React.FC<{ onListClick: (wordId: number) => void }> = ({
  onListClick,
}) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => fetchWords(),
    queryKey: ["words"],
    staleTime: Infinity,
  });

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  }

  if (isError) {
    content = <div>Failed to fetch words.</div>;
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
