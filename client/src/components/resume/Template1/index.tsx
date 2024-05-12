import { useEffect, useState } from "react";
import { Template1Props } from "../../../types/Templates/Template1";
import EditableField from "../EditableField";

export default function Template1({
  template1Props,
  isEditable,
  divRef,
}: {
  template1Props: Template1Props;
  isEditable?: boolean;
  divRef?: React.MutableRefObject<null>;
}) {
  const [data, setdata] = useState<Template1Props>({
    ...template1Props,
    imageURL: localStorage.getItem("imageURL") || template1Props.imageURL,
  });
  const sideOptions = Object.keys(data.contacts);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-expect-error___
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setdata((prevData) => ({
          ...prevData,
          imageURL: reader.result as string,
        }));
        localStorage.setItem("imageURL", reader.result as string);
      };
    }
  };
  return (
    <div
      ref={divRef}
      className="bg-white w-[800px] h-[1122px] mx-auto grid grid-cols-12 grid-rows-12 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
    >
      {isEditable ? (
        <>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => isEditable && handleImageChange(event)}
            style={{ display: "none" }}
            id="imageInput"
          />
          <label
            htmlFor="imageInput"
            className={`col-span-4 row-span-3 object-cover w-full h-full cursor-pointer`}
          >
            <img
              src={data.imageURL}
              className="col-span-4 row-span-3 object-cover w-full h-full"
            />
          </label>
        </>
      ) : (
        <img
          src={data.imageURL}
          className="col-span-4 row-span-3 object-cover w-full h-full"
        />
      )}
      <div className="bg-[#000] text-white col-span-4 row-start-4 row-end-13">
        <div className="px-10 pt-5 pb=20">
          <p className="text-2xl">Education</p>
          <div className="my-2 h-0.5 w-full bg-yellow-300"></div>
          <div className="my-2 ml-5 w-full text-sm">
            <EditableField
              isEditable={isEditable}
              onchange={(val: string) =>
                setdata((prev) => ({
                  ...prev,
                  education: { ...prev.education, name: val },
                }))
              }
              value={data.education.name}
              color="white"
              className="text-lg w-full h-7"
            />
            <EditableField
              isEditable={isEditable}
              value={data.education.university}
              onchange={(val: string) =>
                setdata((prev) => ({
                  ...prev,
                  education: { ...prev.education, university: val },
                }))
              }
              color="white"
              className="text-md w-full h-10"
            />
          </div>
        </div>
        <div className="pt-5 pb-20">
          <div className="px-10 pb-1">
            <p className="text-2xl">Reference</p>
            <div className="my-2 h-0.5 w-full bg-yellow-300"></div>
          </div>
          {sideOptions.map((option, index) => {
            // @ts-expect-error___
            const val = data.contacts[`${option}`];
            return (
              <div className="my-2 mb-5 w-full text-sm" key={index}>
                <div className="text-lg flex items-center">
                  <div className="inline-block h-5 w-[70px] bg-yellow-500"></div>
                  <p className="inline-block w-[200px] h-7 px-2 bg-[#1b1b1b] capitalize">
                    {option}
                  </p>
                </div>
                <div className="text-lg flex items-center">
                  <div className="inline-block h-5 w-[70px]"></div>
                  <EditableField
                    isEditable={isEditable}
                    value={val}
                    onchange={(val: string) =>
                      setdata((prev) => ({
                        ...prev,
                        contacts: {
                          ...prev.contacts,
                          [option]: val,
                        },
                      }))
                    }
                    color="white"
                    className="inline-block w-[200px] px-2 text-sm"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-white col-span-8 row-span-full">
        <div className="w-full h-[150px] bg-yellow-500 mt-20 mb-5 pl-16 flex flex-col justify-center">
          <EditableField
            isEditable={isEditable}
            value={data.name}
            onchange={(val: string) =>
              setdata((prev) => ({
                ...prev,
                name: val,
              }))
            }
            color="black"
            className="text-4xl font-bold h-10"
          />
          <EditableField
            isEditable={isEditable}
            value={data.proffesionTitle}
            onchange={(val: string) =>
              setdata((prev) => ({
                ...prev,
                proffesionTitle: val,
              }))
            }
            color="black"
            className="text-2xl h-10"
          />
        </div>
        <div className="px-10 py-5">
          <p className="text-black text-2xl">About Me</p>
          <div className="h-0.5 w-full bg-black my-2"></div>
          <EditableField
            isEditable={isEditable}
            value={data.aboutMe}
            onchange={(val: string) =>
              setdata((prev) => ({
                ...prev,
                aboutMe: val,
              }))
            }
            color="black"
            className="text-lg h-[120px] w-full overflow-hidden"
          />
        </div>
        <div className="px-10 py-5">
          <p className="text-black text-2xl">Work Experience</p>
          <div className="h-0.5 w-full bg-black my-2"></div>
          {data.workExperience.map((work, index) => {
            return (
              <div key={index} className="flex my-1">
                <div className="flex w-[30%]">
                  <EditableField
                    isEditable={isEditable}
                    onchange={(val: string) =>
                      setdata((prev) => ({
                        ...prev,
                        workExperience: prev.workExperience.map((work, ind) =>
                          ind === index ? { ...work, startDate: val } : work
                        ),
                      }))
                    }
                    value={work.startDate}
                    color="black"
                    className={`text-lg ${
                      isEditable ? "w-[92px]" : "w-10"
                    } h-10 inline`}
                  />
                  <p className="text-black mx-1.5">-</p>
                  <EditableField
                    isEditable={isEditable}
                    value={work.endDate}
                    onchange={(val: string) =>
                      setdata((prev) => ({
                        ...prev,
                        workExperience: prev.workExperience.map((work, ind) =>
                          ind === index ? { ...work, endDate: val } : work
                        ),
                      }))
                    }
                    color="black"
                    className="text-lg"
                  />
                </div>
                <div className="text-black w-[70%]">
                  <EditableField
                    isEditable={isEditable}
                    value={work.position}
                    onchange={(val: string) => {
                      setdata((prev) => ({
                        ...prev,
                        workExperience: prev.workExperience.map((work, ind) =>
                          ind === index ? { ...work, position: val } : work
                        ),
                      }));
                    }}
                    className="text-xl w-full h-7"
                    color="black"
                  />
                  <EditableField
                    isEditable={isEditable}
                    value={work.company}
                    onchange={(val: string) => {
                      setdata((prev) => ({
                        ...prev,
                        workExperience: prev.workExperience.map((work, ind) =>
                          ind === index ? { ...work, company: val } : work
                        ),
                      }));
                    }}
                    className="text-md w-full h-5"
                    color="black"
                  />
                  <EditableField
                    isEditable={isEditable}
                    value={work.description}
                    onchange={(val: string) => {
                      setdata((prev) => ({
                        ...prev,
                        workExperience: prev.workExperience.map((work, ind) =>
                          ind === index ? { ...work, description: val } : work
                        ),
                      }));
                    }}
                    className={`text-sm my-2 w-full ${
                      isEditable ? "h-14" : "h-16"
                    }`}
                    color="black"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-10">
          <p className="text-black text-2xl">Skills</p>
          <div className="h-0.5 w-full bg-black my-2"></div>
          {data.skills.map((skill, index) => {
            return (
              <div
                key={index}
                className={`col-span-1 flex items-center ${
                  isEditable ? "h-8" : ""
                }`}
              >
                <svg
                  fill="#000"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  className="mr-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
                  />
                </svg>
                <EditableField
                  isEditable={isEditable}
                  onchange={(val: string) =>
                    setdata((prev) => ({
                      ...prev,
                      skills: prev.skills.map((skill, ind) =>
                        ind === index ? val : skill
                      ),
                    }))
                  }
                  value={skill}
                  color="black"
                  className="text-lg h-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
