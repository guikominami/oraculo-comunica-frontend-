import { useState } from "react";

import Container from "../components/UI/Container";
import Section from "../components/UI/Section";
import Profiles from "../components/main/Profiles";
import Title from "../components/UI/Title";

import { loadDataExcel } from "../data/loadData";

const LoadData = () => {
  const [profileSelectedId, setProfileSelectedId] = useState<number>(0);
  const [status, setStatus] = useState<boolean>(false);

  function handleProfileClick(profileId: number) {
    setProfileSelectedId(profileId);
  }

  function handleButtonClick() {
    if (!profileSelectedId) {
      alert("Select the profile before load data.");
      return;
    }

    const response = loadDataExcel(profileSelectedId);
    // setStatus(false);
    // if (response) {
    //   setStatus(true);
    // }
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
        <div>
          <button
            className='rounded-xl p-2 m-2 shadow 
            outline outline-black/10 bg-black/10'
            type='submit'
            onClick={handleButtonClick}
          >
            Load data
          </button>
        </div>
      </Container>
    </Section>
  );
};

export default LoadData;
