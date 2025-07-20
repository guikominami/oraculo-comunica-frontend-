import { useState } from "react";
import * as XLSX from "xlsx";
import { sendDataJson } from "../api";

import Container from "../components/UI/Container";
import Section from "../components/UI/Section";
import Profiles from "../components/main/Profiles";
import Title from "../components/UI/Title";
import Paragraph from "../components/UI/Paragraph";

const LoadData = () => {
  const [profileSelectedId, setProfileSelectedId] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusLoadData, setStatusLoadData] = useState<boolean>(false);
  const [data, setData] = useState<unknown[]>();

  function handleProfileClick(profileId: number) {
    setProfileSelectedId(profileId);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = async (event) => {
        if (event.target) {
          const workbook = XLSX.read(event.target.result, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const sheetData = XLSX.utils.sheet_to_json(sheet, { raw: true });

          setData(sheetData);
        }
      };

      reader.readAsBinaryString(file);
    }
  };

  async function handleButtonClick() {
    if (!profileSelectedId) {
      alert("Select the profile before load data.");
      return;
    }

    setIsLoading(true);

    console.log(data);

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
        <Title title='Profiles' />
        <Profiles
          onListClick={handleProfileClick}
          profileSelectedId={profileSelectedId}
        />
      </Container>

      <Container>
        {!isLoading && (
          <div>
            <input
              className='ml-2 p-1 m-2 
                         bg-black/10 text-sm'
              type='file'
              onChange={handleFileChange}
            />
            <button
              className='rounded-xl p-2 m-2 shadow 
            outline outline-black/10 bg-black/10'
              type='submit'
              onClick={handleButtonClick}
            >
              Load data
            </button>
          </div>
        )}
        <Paragraph>
          {isLoading && <>Loading data...</>}
          {statusLoadData && <>Load data complete.</>}
        </Paragraph>
      </Container>
    </Section>
  );
};

export default LoadData;
