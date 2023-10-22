import { mainProjects } from "@/data/data";
import { ProjectCard } from "../ProkectCard/ProjectCard";
import ButtonLink from "../ButtonLink";

const MainProjects = () => {

  const vertical = mainProjects.slice(0,1)
  const square = mainProjects.slice(1,3)
  const horizontal = mainProjects.slice(3,4)

  return (
  <section className="mt-[300px]">
      <div className="my-[144px] flex justify-between">
        <h2 className="text-left text-5xl text-mulish text-main font-bold">Latest projects</h2>
      </div>
    <div className="grid-container">
          {
            mainProjects.map((p) => 
              <ProjectCard project={p}/>
            )
          }
    </div>
    <div >
    </div>
    <div className="mt-[60px] mr-[60px] flex justify-end">
      <ButtonLink slug={'/projects'} text={"View all projects"}/>
    </div>
    </section>
  );
};

export default MainProjects;





// {vertical && (
//   vertical.map((project) =>
//   <div className="hover-project-block relative mr-[30px]" key={project.id}>
//     <Image
//     className="hover-project-img absolute"
//       src={project?.verticalImage?.src || ""}
//       alt="project"
//       width={project?.verticalImage?.width}
//       height={project?.verticalImage?.height}
//     />
//    <div className="hover-project-text pl-[50px] pt-[100px] h-[1190px] w-[580px] bg-mainBg  border border-primary">
//         <h3 className="pt-6 w-[115px] text-3xl text-left text-mulish text-main font-bold">{project.name}</h3>
//         <p className="pt-12 w-[338px] text-base text-sans text-textGray font-normal">{project.description}</p>
//         <Link href={project.slug} className="main-link  flex justify-between mt-[700px] w-[140px]">
//           <p className="font-bold whitespace-nowrap text-sans text-main text-base ">See project</p>
//           <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M12.322 11.0245L1.00001 0.999995" stroke="white"/>
//             <path d="M1 21L12.322 10.9755" stroke="white"/>
//           </svg>
//         </Link>
//       </div>
//   </div>
//   )
// )}
// <div className="flex flex-col">
// <div className="flex mb-[30px] justify-between">
//   {square && (
//     square.map((project) =>
//     <div key={project.id} className="hover-project-block relative flex-wrap">
//       <Image
//       className="hover-project-img absolute top-0 w-[580px] h-[580px]"
//         src={project?.squareImages?.src || ""}
//         alt="project"
//         width={project?.squareImages?.width}
//         height={project?.squareImages?.height} 
//       />
//       <div className="hover-project-text pl-[50px] pt-[50px] w-[580px] h-[580px] bg-mainBg  border border-primary">
//         <h3 className="pt-6 w-[115px] text-3xl text-left text-mulish text-main font-bold">{project.name}</h3>
//         <p className="pt-12 w-[338px] text-base text-sans text-textGray font-normal">{project.description}</p>
//         <Link href={project.slug} className="main-link  flex justify-between mt-[140px] w-[140px]">
//           <p className="font-bold whitespace-nowrap text-sans text-main text-base ">See project</p>
//           <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M12.322 11.0245L1.00001 0.999995" stroke="white"/>
//             <path d="M1 21L12.322 10.9755" stroke="white"/>
//           </svg>
//         </Link>
//       </div>
//     </div>
//      )
//   )}
//   </div>
//   {horizontal && (
//     horizontal.map((project) =>
//     <div className="hover-project-block relative" key={project.id}>
//       <Image
//       className="hover-project-img absolute"
//         src={project?.horizontalImage?.src || ""}
//         alt="project"
//         width={project?.horizontalImage?.width}
//         height={project?.horizontalImage?.height}
//       />
//        <div className="hover-project-text pl-[50px] pt-[50px] w-[1190px] h-[580px] bg-mainBg  border border-primary">
//         <h3 className="pt-6 w-[115px] text-3xl text-left text-mulish text-main font-bold">{project.name}</h3>
//         <p className="pt-12 w-[338px] text-base text-sans text-textGray font-normal">{project.description}</p>
//         <Link href={project.slug} className="main-link  flex justify-between mt-[140px] w-[140px]">
//           <p className="font-bold whitespace-nowrap text-sans text-main text-base ">See project</p>
//           <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M12.322 11.0245L1.00001 0.999995" stroke="white"/>
//             <path d="M1 21L12.322 10.9755" stroke="white"/>
//           </svg>
//         </Link>
//       </div>
//     </div>
//     )
//   )}
// </div>