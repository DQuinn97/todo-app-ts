import { type Person } from "../types.ts";
const Person = ({ name, age }: Person) => {
  return (
    <>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
    </>
  );
};
export default Person;
