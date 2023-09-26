import "./Project.css"
function Project() {
  return (
    <div className="  bg-gray-900">
      <div className='  font-bold pl-10 pt-4 text-pink-600 text-4xl'>Latest Projects</div>
      <div className="Card  pl-11 overflow-hidden flex flex-col md:grid md:grid-cols-3">
        <Card ProjectTech={"html css java Script"} ProjectName={" Crud App "}
          ProjectDesc={"We will build a step-by-step React CRUD (Create, Read, Update, Delete) Application"} />
        <Card ProjectTech={"React js,Redux,Chakra UI,Node js,express js,MongoDB"} ProjectName={"online course "}
          Code={"https://github.com/anil4use/Course_Frondend"} LiveDemo={"https://rr-course.vercel.app/"} />
        <Card ProjectName={"Old Portfolio"} LiveDemo={"https://anil-resume.web.app/"} Code={"Disable"} ProjectTech={"HTML CSS JAVASCRIPT BOOTSTRAP"} ProjectDesc={"Its my first portfolio website "} />
       
       
        <Card ProjectName={"To do note Backed"} ProjectTech={"Node js,Express js,MongoDB"} Code={"https://github.com/anil4use/TODO_NODE_BACKEND"} />
        <Card ProjectName={"Text editer"} Code={"https://github.com/anil4use/text-analytics"} ProjectTech={"React js,Css,bootstrap"} />
        <Card ProjectName={"to do website"} ProjectTech={"html css javascript"} Code={"https://github.com/anil4use/Oasis-Infobyte_to-do-app"} LiveDemo={"https://anil4use.github.io/Oasis-Infobyte_to-do-app/"} />
      </div>

   

    </div>
  )
}

export default Project

const Card = ({ ProjectName, ProjectTech, ProjectDesc, Code, LiveDemo }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <div className=" text-4xl pb-4 font-bold text-center ">{ProjectName}</div>
            <div className=" text-2xl  font-serif text-center ">{ProjectTech}</div>
            <div className=" text-sm  text-center ">{ProjectDesc}</div>

          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <a target="_blank" href={LiveDemo}>
              <button type="button"
                className=" w-full text-white bg-gradient-to-r from-pink-500 to-pink-800 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg   text-2xl  py-2.5 text-center mr-2 mb-2">Live Demo
              </button> </a>
            <a target="_blank" href={Code} >
              <button disable type="button"
                className=" w-full  text-white bg-gradient-to-r from-pink-500 to-pink-800 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg   text-2xl  py-2.5 text-center mr-2 mb-2">get Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

