import { useEffect } from "react";
import Templates from "../components/Templates";
import { getResumesData } from "../lib/Resume";
import { useRecoilState } from "recoil";
import { myresumes } from "../state/myresumes";
import Template1 from "../components/resume/Template1";

export default function Home() {
  const [myResumes, setMyResumes] = useRecoilState(myresumes);
  useEffect(() => {
    getResumesData().then((res) => {
      setMyResumes(res);
    });
  }, [setMyResumes]);
  return (
    <div className="p-10">
      <h1 className="text-2xl mb-10">Browse the templates</h1>
      {/* <Templates /> */}
      <div className="w-full h-full flex justify-start items-start p-0">
        {myResumes.map((resume, idx) => {
          return <Template1 key={idx} template1Props={resume} forHomePage />;
        })}
      </div>
    </div>
  );
}
