const Input: React.FC<{
  id: string;
}> = ({ id }) => {
  return (
    <input
      id={id}
      className='w-[87%] p-2 shadow outline outline-black/10 rounded-xl'
      placeholder='Digite o nome do perfil'
    />
  );
};

export default Input;
