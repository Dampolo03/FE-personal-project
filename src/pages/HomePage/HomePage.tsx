import React, { useState, useEffect, useCallback } from "react";
import { Header } from "../../components/Header";
import { Body } from "../../components/Body";
import { axiosInstance } from "../../services/axiosServices";

export const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("search/photos?query=african")
      .then((data: any) => {
        let results = data.data.results;
        results = results.slice(0, 9);
        setLoading(false);
        setItems(results);
      })
      .catch(() => {
        setLoading(false);
        setError("Something went wrong...");
      });
  }, []);

  const enterPressed = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter") {
        setSearch(true);
        setLoading(true);
        axiosInstance
          .get(`search/photos?query=${searchTerm}`)
          .then((data: any) => {
            let results = data.data.results;
            results = results.slice(0, 9);
            setLoading(false);
            setItems(results);
          })
          .catch(() => {
            setLoading(false);
            setError("Error. Couldn't fetch results...");
          });
      }
    },
    [searchTerm]
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        keyPressed={enterPressed}
        search={search}
        loading={loading}
      />
      <Body items={items} error={error} loading={loading} />
    </div>
  );
};
