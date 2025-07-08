import Container from "../components/UI/Container";
import Section from "../components/UI/Section";

import Language from "../components/main/Language";
import Word from "../components/main/Word";
import Translation from "../components/main/Translation";
import Title from "../components/UI/Title";
import { useState } from "react";

function Translations() {
  const [languageSelected, setLanguageSelected] = useState<number>();
  const [wordSelected, setWordSelected] = useState<number>();

  function handleLanguageClick(languageId: number) {
    console.log(languageId);
    setLanguageSelected(languageId);
  }

  function handleWordClick(wordId: number) {
    console.log(wordId);
    setWordSelected(wordId);
  }

  return (
    <Section>
      <Container>
        <Title title='Languages' />
        <Language onListClick={handleLanguageClick} />
      </Container>
      <Container>
        <Title title='Words' />
        {languageSelected && <Word onListClick={handleWordClick} />}
        {wordSelected && <Translation />}
      </Container>
    </Section>
  );
}

export default Translations;
