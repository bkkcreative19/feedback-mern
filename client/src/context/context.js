import React, { useState, useEffect } from "react";
import * as ROUTES from "../constants/routes";
import axios from "axios";

const Context = React.createContext("");

const MyContext = ({ children }) => {
  const [user, setUser] = useState();
  const [feedbacks, setFeedbacks] = useState([]);
  const [filteredFeedbacks, setFilteredFeedbacks] = useState([]);
  const [selected, setSelected] = useState("all");
  const [sortSelected, setSortSelected] = useState("most upvotes");
  const [currentFeedback, setCurrentFeedback] = useState({});

  const login = async (obj, history) => {
    const { data } = await axios.post(
      "http://localhost:4000/api/auth/signin",
      obj,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(data);
    localStorage.setItem("auth-token", JSON.stringify(data.accessToken));
    setUser(data);
    history.push("/");
  };

  const logout = () => {
    localStorage.clear("auth-token");
  };

  const fetchSuggestions = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/feedbacks");

      setFeedbacks(data.sort((a, b) => b.upvotes - a.upvotes));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (feedbacks) {
      const filteredFeedbacks = feedbacks.filter(
        (feedback) => feedback.category === selected
      );

      setFilteredFeedbacks(filteredFeedbacks);
    }
  }, [selected]);

  // const sortFeedbacks = (s) => {
  //   let sortArray;

  //   if (s === "most upvotes") {
  //     sortArray = feedbacks.sort((a, b) => b.upvotes - a.upvotes);
  //   } else if (s === "least upvotes") {
  //     sortArray = feedbacks.sort((a, b) => a.upvotes - b.upvotes);
  //   } else if (s === "most comments") {
  //     sortArray = feedbacks.sort(
  //       (a, b) => b.comments.length - a.comments.length
  //     );
  //   } else {
  //     sortArray = feedbacks.sort(
  //       (a, b) => a.comments.length - b.comments.length
  //     );
  //   }

  //   setFeedbacks(sortArray);
  // };

  // useEffect(() => {
  //   sortFeedbacks(sortSelected);
  // }, [sortSelected]);

  return (
    <Context.Provider
      value={{
        user,
        login,
        logout,
        fetchSuggestions,
        setFeedbacks,
        feedbacks,
        setFilteredFeedbacks,
        filteredFeedbacks,
        setSelected,
        selected,
        sortSelected,
        setSortSelected,
        currentFeedback,
        setCurrentFeedback,
        // sortFeedbacks,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { MyContext, Context };
