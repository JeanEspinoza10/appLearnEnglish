import React, { useState } from "react";
import { phrases,listTag } from "@const/listphrases.js";
import "./filterlist.css"

export const FilterList = ({ filterWord, setFilterWord, phrasesID }) => {
  const generateOptions = (listValue) => {
    return listValue.map((value) => {
      return (
        <option key={value.id} value={value.tag}>
          {value.tag}
        </option>
      );
    });
  };
  const handleChange = (e) => {
    const { target } = e;
    const { value } = target;
    setFilterWord(value);
  };
  const onClickPhrases = (event) => {
    const id = parseInt(event.target.id, 10);
    phrasesID(id);
  };

  const generateListWords = (listValue) => {
    if (filterWord === "All") {
      return listValue.map((value) => {
        return (
          <button
            id={value.id}
            key={value.id}
            onClick={(event) => {
              onClickPhrases(event);
            }}
          >
            {value.phrase}
          </button>
        );
      });
    } else {
      return listValue
        .filter((value) => value.tag === filterWord)
        .map((value) => (
          <button
            id={value.id}
            key={value.id}
            onClick={(event) => {
              onClickPhrases(event);
            }}
          >
            {value.phrase}
          </button>
        ));
    }
  };

  return (
    <>
      <section id="container-phrases-list">
        <select
          name="filters-list-select"
          id="filters-list"
          value={filterWord}
          onChange={handleChange}
        >
          {generateOptions(listTag)}
        </select>
        <ul>{generateListWords(phrases)}</ul>
      </section>
    </>
  );
};
