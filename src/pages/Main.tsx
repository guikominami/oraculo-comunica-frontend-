import Container from "../components/UI/Container";
import Section from "../components/UI/Section";

import Profiles from "../components/main/Profiles";
import Languages from "../components/main/Languages";
import Words from "../components/main/Word";
import Translations from "../components/main/Translations";
import Title from "../components/UI/Title";
import { useState } from "react";

function Main() {
  const [profileSelectedId, setProfileSelectedId] = useState<number>(0);
  const [languageSelectedId, setLanguageSelectedId] = useState<number>(0);
  const [wordSelectedId, setWordSelectedId] = useState<number>(0);

  function handleProfileClick(profileId: number) {
    console.log(profileId);

    setProfileSelectedId(profileId);
    setLanguageSelectedId(0);
    setWordSelectedId(0);
  }

  function handleLanguageClick(languageId: number) {
    setLanguageSelectedId(languageId);
    setWordSelectedId(0);
  }

  function handleWordClick(wordId: number) {
    setWordSelectedId(wordId);
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
        {profileSelectedId !== 0 && (
          <>
            <Title title='Languages' />
            <Languages
              onListClick={handleLanguageClick}
              languageSelectedId={languageSelectedId}
              profileId={profileSelectedId}
            />
          </>
        )}
      </Container>
      <Container>
        {languageSelectedId !== 0 && (
          <>
            <Title title='Words' />
            <Words
              onListClick={handleWordClick}
              languageId={languageSelectedId}
            />
          </>
        )}
      </Container>
      <Container>
        {wordSelectedId !== 0 && (
          <>
            <Title title='Translations' />
            <Translations wordId={wordSelectedId} />
          </>
        )}
      </Container>
    </Section>
  );
}

export default Main;
