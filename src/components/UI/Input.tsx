const Input: React.FC<{
  id: string;
}> = ({ id }) => {
  return (
    <input
      id={id}
      className='w-[100%] mr-1 p-2 shadow outline outline-black/10 rounded-xl'
      placeholder='Digite o nome do perfil'
    />
  );
};

export default Input;
