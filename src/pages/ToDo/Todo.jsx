import React, { useEffect, useState } from "react";
import axios from "axios";

import ContainerToDo from "../../components/ContainerToDo/containerToDo";

const Todo = () => {
  const [firstList, setFirstList] = useState([]);
  const [SecondList, setSecondList] = useState([]);
  const [thirdList, setThirdList] = useState([]);
  const [titleOne, setTitleOne] = useState("");
  const [titleTwo, setTitleTwo] = useState("");
  const [titleThree, setTitleThree] = useState("");

  useEffect(() => {
    axios
      .get("https://api.lumiplace.io/app.v1/api/getArticles")
      .then(function (response) {
        // handle success
        setFirstList(response.data);
        setSecondList(response.data);
        setThirdList(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  // console.log(data);
  ////////////////////next////////////////////
  const handleNextClick = (
    currentListData,
    currentList,
    setCurrentList,
    currentIndex
  ) => {
    const filteredData = currentList.filter(
      (data, index) => index !== currentIndex
    );
    setCurrentList(filteredData);

    if (currentList === firstList) {
      setSecondList((prevList) => [...prevList, currentListData]);
    } else if (currentList === SecondList) {
      setThirdList((prevList) => [...prevList, currentListData]);
    }
  };

  //////////////////back///////
  const handleBackClick = (
    currentListData,
    currentList,
    setCurrentList,
    currentIndex
  ) => {
    const filteredData = currentList.filter(
      (data, index) => index !== currentIndex
    );
    setCurrentList(filteredData);

    if (currentList === thirdList) {
      setSecondList((prevList) => [...prevList, currentListData]);
    } else if (currentList === SecondList) {
      setFirstList((prevList) => [...prevList, currentListData]);
    }
  };
  ///////////////////////handleDelete///////////////////
  const handleDeleteButton = (currentList, setCurrentList, currentIdex) => {
    const filterData = currentList.filter((data, index) => {
      return index !== currentIdex;
      // console.log(index);
    });
    setCurrentList(filterData);
  };

  ///////////////////title////////////
  useEffect(() => {
    setTitleOne("ux/ui");
    setTitleTwo("FrontEnd");
    setTitleThree("Backend");
  }, []);
  ////////////////////////////////////////////

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "self-start",
      }}
    >
      <ContainerToDo
        firstList={firstList}
        setFirstList={setFirstList}
        handleNextClick={handleNextClick}
        handleBackClick={() => []}
        handleDeleteButton={handleDeleteButton}
        title={titleOne}
        titleOne={titleOne}
      />
      <ContainerToDo
        firstList={SecondList}
        setFirstList={setSecondList}
        handleNextClick={handleNextClick}
        handleBackClick={handleBackClick}
        handleDeleteButton={handleDeleteButton}
        title={titleTwo}
      />
      <ContainerToDo
        firstList={thirdList}
        setFirstList={setThirdList}
        handleNextClick={() => []}
        handleBackClick={handleBackClick}
        handleDeleteButton={handleDeleteButton}
        title={titleThree}
        titleThree={titleThree}
      />
    </div>
  );
};

export default Todo;
