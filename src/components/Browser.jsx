import React, { useContext, useEffect, useState } from "react";
import styles from "./Browser.module.css";
import { DataContext } from "../context/DataContext";
import { helpHttp } from "../services/helpHttp";

export default function Browser() {
  const [search, setSearch] = useState("");
  const [autocomplete, setAutocomplete] = useState([]);

  const { API_KEY, setCity } = useContext(DataContext);

  const searchURL = `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${search}&lang=es`;

  useEffect(() => {
    if (search.trim() === "") return;
    helpHttp()
      .get(searchURL)
      .then((data) => setAutocomplete(data));
    console.log(search.length);
    console.log(autocomplete);
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSelectCity = (name, id) => {
    console.log(name);
    setSearch(name);
    setCity(id);
    setAutocomplete([]);
  };

  return (
    <header className={styles.header}>
      <input
        type="text"
        className={styles.inputText}
        value={search}
        onChange={handleChange}
        list="ciudades"
      />
      <div className={styles.ciudades}>
        {search.trim() !== "" &&
          autocomplete.map((value) => (
            <p
              key={value.id}
              onClick={() => handleSelectCity(value.name, value.id)}
            >
              {value.name} {value.region}
            </p>
          ))}
      </div>
    </header>
  );
}
