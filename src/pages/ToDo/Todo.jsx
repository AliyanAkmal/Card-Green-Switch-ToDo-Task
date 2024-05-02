import React, { useCallback, useEffect, useState } from "react";

import ContainerToDo from "../../components/ContainerToDo/containerToDo";

const Todo = () => {
  const [firstList, setFirstList] = useState([]);
  const [SecondList, setSecondList] = useState([]);
  const [thirdList, setThirdList] = useState([]);
  const [titleOne, setTitleOne] = useState("");
  const [titleTwo, setTitleTwo] = useState("");
  const [titleThree, setTitleThree] = useState("");

  ////////////////////////title///////////////
  useEffect(() => {
    setTitleOne("ux/ui");
    setTitleTwo("FrontEnd");
    setTitleThree("Backend");
  }, [titleOne, titleTwo, titleThree]);

  ////////////////////next////////////////////
  const handleNextClick = (
    CurrentListdata,
    currentList,
    setCurrentList,
    currentIdex
  ) => {
    const filterData = currentList.filter((data, index) => {
      console.log(data);
      return index !== currentIdex;
    });
    setCurrentList(filterData);
    if (currentList === firstList) {
      setSecondList((preVal) => [...preVal, CurrentListdata]);
    } else if (currentList === SecondList) {
      setThirdList((preVal) => [...preVal, CurrentListdata]);
    }
  };
  //////////////////back///////
  const handleBackClick = (
    CurrentListdata,
    currentList,
    setCurrentList,
    currentIdex
  ) => {
    const filterData = currentList.filter((data, index) => {
      return index !== currentIdex;
    });

    setCurrentList(filterData);
    if (currentList === thirdList) {
      setSecondList((preVal) => [...preVal, CurrentListdata]);
    } else if (currentList === SecondList) {
      setFirstList((preVal) => [...preVal, CurrentListdata]);
    }

    // console.log(currentList);
  };
  ///////////////////////handleDelete///////////////////
  const handleDeleteButton = (
    CurrentListdata,
    currentList,
    setCurrentList,
    currentIdex
  ) => {
    const filterData = currentList.filter((data, index) => {
      return index !== currentIdex;
    });
    setCurrentList(filterData);
  };

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
