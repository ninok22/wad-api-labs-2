import React from "react";
import CastCard from "../components/castCard";
import SampleCast from "./sampleCastData";
import { MemoryRouter } from "react-router";


export default {
  title: "Home Page/CastCard",
  component: CastCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  return (
    <CastCard
      cast={SampleCast}
      taging={(cast) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleCast, profile_path: undefined };
  return (
    <CastCard
      movie={sampleNoPoster}
      taging={(movie) => null}
    />
  );
};
Exceptional.storyName = "exception";
export const Exceptional1 = () => {
    const sampleNoCharacter = {...SampleCast, character: "N/A" };
    return (
        <CastCard
        cast={sampleNoCharacter}
        tagging={(movie) => null}
        />
    );
};
Exceptional1.storyName = "exception1";

export const Exceptional2 = () => {
    const sampleNoCharacter = {...SampleCast, character: "N/A", profile_path: undefined };
    return (
        <CastCard
        cast={sampleNoCharacter}
        tagging={(movie) => null}
        />
    );
};
Exceptional2.storyName = "exception2";
