import {skills} from "@/constants"

const MainSkills = () => {
    
  return (
    <div className="container mt-[210px] flex justify-between">
        {
        skills.map((s) => 
        <div 
        className='flex items-center'
        >
          <p className="text-6xl font-bold text-primary">{s.count}</p>
          <p className="max-w-[110px] ml-6 mt-2 text-left text-sans text-base text-white">{s.skill}</p>
        </div>
        )
        }
    </div>
  )
}

export default MainSkills