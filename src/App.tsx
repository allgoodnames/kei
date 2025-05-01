import { useState } from 'react';
import './App.css';

function App() {
  const [searchName, setSearchName] = useState("");
  const [searchGender, setSearchGender] = useState("");
  const [searchHairColor, setSearchHairColor] = useState("");
  const [minHeight, setMinHeight] = useState(130);
  const [maxHeight, setMaxHeight] = useState(220);

  const talent = [
    {
        id: 0,
        name: "John Smith",
        gender: "male",
        height: 180,
        hair_color: "brown",
    },
    {
        id: 1,
        name: "Maggie Smith",
        gender: "female",
        height: 170,
        hair_color: "blonde",
    },
    {
        id: 2,
        name: "Carlos Rivera",
        gender: "male",
        height: 175,
        hair_color: "black",
    },
    {
        id: 3,
        name: "Emily Davis",
        gender: "female",
        height: 165,
        hair_color: "red",
    },
    {
        id: 4,
        name: "James Lee",
        gender: "male",
        height: 182,
        hair_color: "dark brown",
    },
    {
        id: 5,
        name: "Sophia Patel",
        gender: "female",
        height: 160,
        hair_color: "black",
    },
    {
        id: 6,
        name: "Michael Nguyen",
        gender: "male",
        height: 178,
        hair_color: "dark blonde",
    },
    {
        id: 7,
        name: "Chloe Thompson",
        gender: "female",
        height: 168,
        hair_color: "auburn",
    },
    {
        id: 8,
        name: "Liam Brown",
        gender: "male",
        height: 185,
        hair_color: "blonde",
    },
    {
        id: 9,
        name: "Zara Khan",
        gender: "female",
        height: 162,
        hair_color: "brown",
    }
    ];

  const filteredList = talent.filter((person) => {
    return (
      person.name.toLowerCase().includes(searchName.toLowerCase()) &&
      (searchGender === "" || person.gender === searchGender) &&
      (person.height >= minHeight && person.height <= maxHeight) &&
      (searchHairColor === "" || person.hair_color.toLowerCase().includes(searchHairColor.toLowerCase()))
    );
  });

  const genders = [...new Set(talent.map(p => p.gender))];
  const hairColors = [...new Set(talent.map(p => p.hair_color))];

  return (
    <>
      <form>
        <input
          type="text"
          value={searchName}
          onChange={(event) => setSearchName(event.target.value)}
          placeholder="Search by name"
        />
        <select value={searchGender} onChange={(e) => setSearchGender(e.target.value)}>
          <option value="">All Genders</option>
          {genders.map((g, i) => (
            <option key={i} value={g}>{g}</option>
          ))}
        </select>

        <select value={searchHairColor} onChange={(e) => setSearchHairColor(e.target.value)}>
          <option value="">All Hair Colors</option>
          {hairColors.map((color, i) => (
            <option key={i} value={color}>{color}</option>
          ))}
        </select>
        <label>
          Min Height: {minHeight} cm
          <input
            type="range"
            min="150"
            max="200"
            value={minHeight}
            onChange={(e) => setMinHeight(Number(e.target.value))}
          />
        </label>

        <label>
          Max Height: {maxHeight} cm
          <input
            type="range"
            min="150"
            max="200"
            value={maxHeight}
            onChange={(e) => setMaxHeight(Number(e.target.value))}
          />
        </label>
      </form>
      <ul>
        {filteredList.map(person => (
          <li className="card" key={person.id}>
            <img src={`/kei/img/${person.id}.jpg`} alt={person.name} />
            <div className='info'>
              {person.name}<br />
              Gender: {`${person.gender.charAt(0).toUpperCase()}${person.gender.slice(1)}`}<br />
              Height: {person.height}<br />
              Hair color: {`${person.hair_color.charAt(0).toUpperCase()}${person.hair_color.slice(1)}`}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App