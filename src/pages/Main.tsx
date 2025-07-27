import Container from "../components/UI/Container";
import Section from "../components/UI/Section";

import Profiles from "../components/main/Profiles";
import Languages from "../components/main/Languages";
import Words from "../components/main/Word";
import Translations from "../components/main/Translations";
import Title from "../components/UI/Title";

import { useState } from "react";

function Main() {
  const [profileSelectedId, setProfileSelectedId] = useState<string>("");
  const [languageSelectedId, setLanguageSelectedId] = useState<string>("");
  const [wordSelectedId, setWordSelectedId] = useState<string>("");

  function handleProfileClick(profileId: string) {
    setProfileSelectedId(profileId);
    setLanguageSelectedId("");
    setWordSelectedId("");
  }

  function handleLanguageClick(languageId: string) {
    setLanguageSelectedId(languageId);
    setWordSelectedId("");
  }

  function handleWordClick(wordId: string) {
    setWordSelectedId(wordId);
  }

  return (
    <Section>
      <Container>
        <Title title='Perfis' />
        <Profiles
          onListClick={handleProfileClick}
          profileSelectedId={profileSelectedId}
        />
      </Container>
      <Container>
        {profileSelectedId && (
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
        {languageSelectedId && (
          <>
            <Title title='Words' />
            <Words
              onListClick={handleWordClick}
              wordSelectedId={wordSelectedId}
              languageId={languageSelectedId}
            />
          </>
        )}
      </Container>
      <Container>
        {wordSelectedId && (
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
