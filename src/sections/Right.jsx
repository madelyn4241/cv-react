import { education, experience } from "./data";
import { experienceTitle, educationTitle } from "./data";


function Experience() {
  return (
    <div class="bg-primary text-white rounded-box flex flex-col items-start py-3 px-5">
      <h2 class="font-bold text-xl mb-2">{experienceTitle}</h2>
      {experience.map((item) => (
        <div class="flex flex-row gap-2 items-start mb-2">
          <img class="h-12 w-12 rounded-2xl" src={item.icon} />
          <div class="flex flex-col">
            <div class="flex flex-row justify-between items-center">
              <div class="text-lg font-bold">{item.company}</div>
              <div class="text-sm text-primary-content">{item.loc}</div>
            </div>

            <div class="flex flex-row justify-between items-center">
              <div class="text-md font-bold">{item.pos}</div>
              <div class="text-sm text-primary-content">{item.time}</div>
            </div>

            <div>
              {item.description.map((p) => (
                <p class='text-sm text-justify'>{p}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}





function Education() {
  return (
    <div class="bg-primary text-white rounded-box flex flex-col items-start py-3 px-5">
      <h2 class="font-bold text-xl mb-2">{educationTitle}</h2>
      {education.map((item) => (
        <div class="mb-1 flex flex-row gap-2 items-start">
          <img class="h-12 w-12" src={item.icon} />
          <div class="flex flex-col w-[28rem]">
            <div class="flex flex-row justify-between items-center">
              <div class="text-md font-bold">{item.school}</div>
              <div class="text-sm text-primary-content">{item.loc}</div>
            </div>

            <div class="flex flex-row justify-between items-center">
              <div class="text-md font-bold">{item.degree}</div>
              <div class="text-sm text-primary-content">{item.time}</div>
            </div>

            <div>
              {item.description.map((p) => (
                <p class="text-sm">{p}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Right() {
  return (
    <div class="flex flex-col gap-3 pt-3">
      <Experience />
      <Education />
    </div>
  );
}
