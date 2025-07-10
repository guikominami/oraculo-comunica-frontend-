import Container from "../components/UI/Container";
import Section from "../components/UI/Section";

import Languages from "../components/main/Languages";
import Words from "../components/main/Word";
import Translations from "../components/main/Translations";
import Title from "../components/UI/Title";
import { useState } from "react";

function Main() {
  const [languageSelectedId, setLanguageSelectedId] = useState<number>(0);
  const [wordSelectedId, setWordSelectedId] = useState<number>(0);

  function handleLanguageClick(languageId: number) {
    setLanguageSelectedId(languageId);
    setWordSelectedId(0);
  }

  function handleWordClick(wordId: number) {
    console.log(wordId);
    setWordSelectedId(wordId);
  }

  return (
    <Section>
      <Container>
        <Title title='Languages' />
        <Languages
          onListClick={handleLanguageClick}
          languageSelectedId={languageSelectedId}
        />
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
