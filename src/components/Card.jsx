import React, { useState } from "react";

const Card = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [clicked, setClicked] = useState(false);

  const handleClick = (index) => {
    setSelectedIndex(index);
    setClicked(true);
  };

  const handleMouseEnter = (index) => {
    if (!clicked) {
      setSelectedIndex(index);
    }
  };

  const reset = () => {
    setSelectedIndex(-1);
    setClicked(false);
  };

  return (
    <main className="bg-white rounded-lg border border-[#E0E0E0] p-6 flex flex-col justify-center gap-4 max-w-96 w-5/12">
      <div className="w-full flex justify-end cursor-pointer">
        <svg
          onClick={() => reset()}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9V6.33333C1 5.62609 1.31607 4.94781 1.87868 4.44772C2.44129 3.94762 3.20435 3.66667 4 3.66667H17M17 3.66667L14 1M17 3.66667L14 6.33333M17 9V11.6667C17 12.3739 16.6839 13.0522 16.1213 13.5523C15.5587 14.0524 14.7956 14.3333 14 14.3333H1M1 14.3333L4 17M1 14.3333L4 11.6667"
            stroke="#828282"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="font-semibold text-2xl text-center">
        Quelle note donnerais-tu à ce challenge ?
      </p>
      <p className="font-normal text-base text-center">
        Bon j’espère que tu vas mettre 5 évidemment, si ce n’est pas le cas
        viens me dire pourquoi !
      </p>

      <div className="flex gap-2 justify-center cursor-pointer">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onClick={() => handleClick(index)}
            width="32"
            height="29"
            viewBox="0 0 32 29"
            fill={
              clicked
                ? index <= selectedIndex
                  ? "#7B61FF"
                  : "#FFFFFF"
                : index <= selectedIndex
                ? "#7B61FF"
                : "#FFFFFF"
            }
            xmlns="http://www.w3.org/2000/svg"
            className={`w-10 h-10 transition-colors duration-300 p-2 rounded-full ${
              selectedIndex >= index && !clicked ? "animation" : ""
            } ${
              !clicked ? (index >= selectedIndex ? "hover:bg-[#7B61FF33] hover:fill-[#7B61FF]" : "") : ""
            }`}
          >
            <path
              d="M16 2.14298L20.0059 9.73562L20.2354 10.1705L20.7199 10.2543L29.1788 11.7179L23.1957 17.8741L22.853 18.2267L22.923 18.7134L24.145 27.2106L16.4412 23.4226L16 23.2057L15.5588 23.4226L7.85505 27.2106L9.07703 18.7134L9.14702 18.2267L8.80432 17.8741L2.82119 11.7179L11.2801 10.2543L11.7646 10.1705L11.9941 9.73562L16 2.14298Z"
              stroke="#7B61FF"
              strokeWidth="2"
            />
          </svg>
        ))}
      </div>
    </main>
  );
};

export default Card;
