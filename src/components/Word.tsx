import { useQuery } from "@tanstack/react-query";
import { fetchWords } from "../api";

function Word() {
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
          <li key={item._id}>{item.word}</li>
        ))}
      </ul>
    );
    console.log(data);
  }

  return <div>{content}</div>;
}

export default Word;
