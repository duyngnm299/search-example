import { useState, useEffect } from "react";
import { CloseIcon, LoadingIcon } from "@/assets/Icons";
import { NationalItem } from "@/types";

const listItems: NationalItem[] = [
  {
    id: 1,
    name: "Afghanistan",
    isChecked: false,
  },
  {
    id: 2,
    name: "Algeria",
    isChecked: false,
  },
  {
    id: 3,
    name: "Angola",
    isChecked: false,
  },
  {
    id: 4,
    name: "Andorra",
    isChecked: false,
  },
  {
    id: 5,
    name: "Albania",
    isChecked: false,
  },
  {
    id: 6,
    name: "Argentina",
    isChecked: false,
  },
  {
    id: 7,
    name: "Argentina2",
    isChecked: false,
  },
  {
    id: 8,
    name: "Argentina3",
    isChecked: false,
  },
];

const Search = () => {
  const [nationalList, setNationalList] = useState<NationalItem[]>(listItems);
  const [tempList, setTempList] = useState<NationalItem[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    const searchResult = listItems.filter((item) => {
      const nameLowerCase = item.name.toLowerCase();
      const searchLowerCase = searchValue.toLowerCase();
      return nameLowerCase.includes(searchLowerCase);
    });
    if (searchResult) {
      setNationalList(searchResult);
    } else {
      setNationalList([]);
    }
  };

  const onChangeSearchValue = (e: any) => {
    const { value } = e.target;
    setSearchValue(value);
    value && setIsLoading(true);
  };

  const handleCheckedInput = (index: number) => {
    const tempArray = Array.from(nationalList);
    const currentInput = tempArray.find((item, i) => i === index);
    if (currentInput) {
      currentInput.isChecked = !currentInput.isChecked;
      tempArray[index] = currentInput;
      setNationalList(tempArray);
    }
  };

  const handleUncheckedAll = () => {
    const tempArray = Array.from(nationalList);
    tempArray.map((item) => (item.isChecked = false));
    setNationalList(tempArray);
  };

  const handleShowSelected = (e: any) => {
    setTempList(nationalList);
    const { checked } = e.target;
    const tempArray = Array.from(nationalList);
    if (checked) {
      setNationalList(tempArray.filter((item) => item.isChecked));
    } else {
      setNationalList(tempList);
    }
  };

  useEffect(() => {    
    const timerId = setTimeout(() => {
      if (searchValue) {
        handleSearch();
      } else {
        setNationalList(listItems);
      }
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timerId);
  }, [searchValue]);

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[494px] h-[446px] border-[1px] border-solid border-color_gray rounded-[14px] bg-white shadow">
      <div className="flex flex-col w-full h-full p-5">
        <div className="relative items-center flex w-full">
          <input
            value={searchValue}
            type="text"
            onChange={onChangeSearchValue}
            placeholder="enter something..."
            className="w-full outline-none text-base leading-5 font-normal rounded tracking-tighter text-color_gray-2 pr-8"
          />
          <div
            className="absolute top-[50%] translate-y-[-50%] right-3 cursor-pointer hover:opacity-70"
            onClick={() => setSearchValue("")}
          >
            {isLoading ? (
              <LoadingIcon className="text-color_gray-2 animate-spin" />
            ) : (
              searchValue && <CloseIcon className="text-color_gray-2" />
            )}
          </div>
        </div>
        <div className="w-full h-[1px] bg-color_gray mt-3"></div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={handleShowSelected}
              />
              <div className="w-11 h-6 bg-color_gray peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-color_blue-2 dark:peer-focus:ring-color_blue rounded-full peer dark:bg-color_gray peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-color_blue"></div>
              <span className="ml-3 text-base leading-[22px] font-[550] text-color_gray-3 select-none tracking-tighter hover:opacity-80">
                Show selected only
              </span>
            </label>
          </div>
          <div className="flex items-center">
            <span
              className="text-base leading-[22px] font-[550] text-color_gray-3 select-none cursor-pointer tracking-tighter hover:opacity-80"
              onClick={handleUncheckedAll}
            >
              Clear all
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full mt-6 h-[230px] max-h-[230px] overflow-y-auto small-scroll">
          {nationalList.map((item: any, i: number) => (
            <div
              key={i}
              className="flex items-center mb-[26px] first:mt-1.5 last:mb-0"
            >
              <input
                id={`checkbox-${i}`}
                type="checkbox"
                value=""
                className="w-5 h-5 ml-1 text-color_blue bg-color_gray border-color_gray-1 rounded-lg focus:ring-color_blue dark:focus:ring-color_blue focus:ring-2 "
                checked={item.isChecked}
                onChange={() => handleCheckedInput(i)}
              />
              <label
                htmlFor={`checkbox-${i}`}
                className="ml-[15px] text-sm font-medium text-color_gray-2 select-none cursor-pointer"
              >
                {item.name}
              </label>
            </div>
          ))}
        </div>
        <div className="w-full h-[1px] bg-color_gray mt-4"></div>
        <div className="flex justify-end mt-5">
          <button className="bg-color_green rounded-[50px] px-7 py-[7px] hover:opacity-70">
            <span className="text-base font-normal text-white">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
