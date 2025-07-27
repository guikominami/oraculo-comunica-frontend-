import { useState } from "react";
import * as XLSX from "xlsx";
import { sendDataJson } from "../api";

import Container from "../components/UI/Container";
import Section from "../components/UI/Section";
import Profiles from "../components/main/Profiles/Profiles";
import Title from "../components/UI/Title";
import Paragraph from "../components/UI/Paragraph";
import AddProfile from "../components/main/Profiles/AddProfile";

const LoadData = () => {
  const [profileSelectedId, setProfileSelectedId] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusLoadData, setStatusLoadData] = useState<boolean>(false);
  const [data, setData] = useState<unknown[]>();

  function handleProfileClick(profileId: string) {
    setProfileSelectedId(profileId);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = async (event) => {
        if (event.target) {
          const workbook = XLSX.read(event.target.result, {
            type: "string",
          });

          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          console.log("Sheet data:", sheet);
          const sheetData = XLSX.utils.sheet_to_json(sheet, { raw: true });

          setData(sheetData);
        }
      };

      reader.readAsBinaryString(file);
      //reader.readAsArrayBuffer(file);
    }
  };

  async function handleButtonRemoveClick() {
    if (profileSelectedId === "") {
      alert("Selecione um perfil para carregar os dados.");
      return;
    }

    if (!data || data.length === 0) {
      alert("Não há dados para carregar.");
      return;
    }

    setIsLoading(true);

    if (data) {
      const response = await sendDataJson(data, profileSelectedId);
      if (response) {
        setIsLoading(false);
        setStatusLoadData(true);
      }

      if (response.error) {
        console.log(response.error);
      }
    }
  }

  return (
    <Section>
      <Container>
        <Title title='Perfis' />
        <AddProfile onAddProfile={handleProfileClick} />
        <Profiles
          onListClick={handleProfileClick}
          profileSelectedId={profileSelectedId}
          hasButtonRemove={true}
        />
      </Container>

      <Container>
        {!isLoading && (
          <div>
            <input
              className='mb-4 block w-[88%] text-xs md:text-sm md:w-[70%] border border-gray-200 shadow-sm rounded-lg focus:z-10 disabled:opacity-50  dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
              file:bg-black/10
              file:me-2
              file:py-2 file:px-2
              dark:file:bg-neutral-700 dark:file:text-neutral-400'
              type='file'
              aria-describedby='file_input_help'
              onChange={handleFileChange}
            />
            <button
              className='rounded-xl p-2 md:text-[1rem] shadow 
                        outline outline-black/10 bg-black/10 text-sm'
              type='submit'
              onClick={handleButtonRemoveClick}
            >
              Carregar dados
            </button>
          </div>
        )}
        <Paragraph>
          {isLoading && <>Carregando dados...</>}
          {statusLoadData && (
            <>
              Carga de dados completa. Vá em "Listas" para visualizar os dados.
            </>
          )}
        </Paragraph>
      </Container>
    </Section>
  );
};

export default LoadData;
