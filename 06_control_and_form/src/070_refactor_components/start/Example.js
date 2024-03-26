import { useState } from "react";
import Animallist from "./components/Animallist";
import AnimalFilter from "./components/AnimalFilter";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");
  const filteredanimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  });

  return (
    <>
      <AnimalFilter filterstate={[filterVal, setFilterVal]} />
      <Animallist animals={filteredanimals} />
    </>
  );
};

export default Example;
