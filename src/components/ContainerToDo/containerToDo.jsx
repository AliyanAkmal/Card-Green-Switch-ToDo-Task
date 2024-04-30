import { useState } from "react";
import Button from "../button";
import CardToRender from "../cardToRender/CardToRender";
import CardToDo from "../cardToDo/CardToDo";
const ContainerToDo = ({
  firstList,
  setFirstList,
  handleNextClick,
  handleBackClick,
  handleDeleteButton,
  title,
  titleOne,
  titleThree,
}) => {
  const [Addnew, setNew] = useState(false);
  const [inputVal, setInputVal] = useState();

  const handleClick = () => {
    setNew(true);
  };
  const handleClose = () => {
    setNew(false);
  };
  const handleInputChange = (e) => {
    return setInputVal(e.target.value);
  };
  const handleAddTo = () => {
    setFirstList((preVal) => [...preVal, inputVal]);
    setInputVal("");
    setNew(false);
  };
  return (
    <>
      <div
        style={{
          background: "whiteSmoke",
          width: "400px",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1>{title}</h1>
        {firstList &&
          firstList.map((data, index) => {
            return (
              <CardToRender
                contentInCard={data}
                key={index}
                handleNextClick={handleNextClick}
                currentList={firstList}
                setCurrentList={setFirstList}
                CurrentListdata={data}
                currentIdex={index}
                handleBackClick={handleBackClick}
                handleDeleteButton={handleDeleteButton}
                titleOne={titleOne}
                titleThree={titleThree}
              />
            );
          })}
        {Addnew ? (
          <CardToDo
            handleClose={handleClose}
            handleInputChange={handleInputChange}
            handleAddTo={handleAddTo}
            inputVal={inputVal}
          />
        ) : null}
        <Button content="Create" handleClick={handleClick} />
      </div>
    </>
  );
};

export default ContainerToDo;
