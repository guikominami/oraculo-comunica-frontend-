import Container from "../components/UI/Container";
import Section from "../components/UI/Section";

import Language from "../components/main/Language";
import Word from "../components/main/Word";
import Translation from "../components/main/Translation";
import Title from "../components/UI/Title";
import { useState } from "react";

function Translations() {
  const [languageSelectedId, setLanguageSelectedId] = useState<number>();
  const [wordSelected, setWordSelected] = useState<number>();

  function handleLanguageClick(languageId: number) {
    console.log("languageClick", languageId);
    setLanguageSelectedId(languageId);
  }

  function handleWordClick(wordId: number) {
    console.log(wordId);
    setWordSelected(wordId);
  }

  console.log("languageSelected", languageSelectedId);

  return (
    <Section>
      <Container>
        <Title title='Languages' />
        <Language onListClick={handleLanguageClick} />
      </Container>
      <Container>
        <Title title='Words' />
        {languageSelectedId && (
          <Word onListClick={handleWordClick} languageId={languageSelectedId} />
        )}
        {/* {wordSelected && <Translation />} */}
      </Container>
    </Section>
  );
}

export default Translations;
