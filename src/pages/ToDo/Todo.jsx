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

  // useEffect(() => {
  //   axios
  //     .get("https://api.lumiplace.io/app.v1/api/getArticles")
  //     .then(function (response) {
  //       // handle success
  //       setFirstList(response.data);
  //       setSecondList(response.data);
  //       setThirdList(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // }, []);

  // console.log(data);
  ////////////////////next////////////////////
  const handleNextClick = (
    CurrentListdata,
    currentList,
    setCurrentList,
    currentIdex
  ) => {
    const filteredData = currentList.filter(
      (CurrentListdata, index) => index !== currentIdex
    );

    if (currentList === firstList) {
      setFirstList(filteredData);
      setSecondList((prevList) => [...prevList, CurrentListdata]);
    } else if (currentList === SecondList) {
      setSecondList(filteredData);
      setThirdList((prevList) => [...prevList, CurrentListdata]);
    }
  };

  //////////////////back///////
  const handleBackClick = (
    CurrentListdata,
    currentList,
    setCurrentList,
    currentIdex
  ) => {
    const filteredData = currentList.filter(
      (CurrentListdata, index) => index !== currentIdex
    );

    if (currentList === thirdList) {
      setSecondList((prevList) => [...prevList, CurrentListdata]);
      setThirdList(filteredData);
    } else if (currentList === SecondList) {
      setFirstList((prevList) => [...prevList, CurrentListdata]);
      setSecondList(filteredData);
    }
  };
  ///////////////////////handleDelete///////////////////
  const handleDeleteButton = (
    CurrentListdata,
    currentList,
    setCurrentList,
    currentIdex,
    onClose
  ) => {
    const filterData = currentList.filter((CurrentListdata, index) => {
      return index !== currentIdex;
    });
    if (currentList === firstList) {
      setFirstList(filterData);
      onClose();
    } else if (currentList === SecondList) {
      setSecondList(filterData);
      onClose();
    } else if (currentList === thirdList) {
      setThirdList(filterData);
      onClose();
    }
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
