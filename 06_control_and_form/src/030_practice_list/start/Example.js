import Profile from "./components/Profile"
const humans = [
  {
    name : "Geo",
    age : 18,
    hobbies : ["sports", "music"]
  },
  {
    name : "Tom",
    age : 25,
    hobbies : ["movie", "music"]
  },
  {
    name : "Lisa",
    age : 21,
    hobbies : ["sports", "travel", "game"]
  },
];
const Example = () => {
  return (
    <>
      <ul>
        {humans.map((human) => (
          <li key= {human.name}>
            <Profile {...human}/>
          </li>
        ))};
      </ul>
    </>
  );
};

Example(humans)

export default Example;
