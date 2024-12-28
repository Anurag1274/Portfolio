import React from 'react'

function ProjectCard() {
  return (
    <div className='flex justify-center items-center text-white h-[250px] bg-black'>
        
        <div>
            <img src="/Chat-App.PNG" className='h-[500px] bg-red-50 w-[500px] object-contain '  alt="" />
        </div>


        <div>

            <h1> 
              {/* Project name   */}
              Chat APP

            </h1>

            <span>
              {/* Technologies  */}
              HTml 
            </span>

            <p>
              {/* paras  */}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione harum velit est, quisquam dignissimos nam totam ad dolorem ipsam tempora facere eligendi delectus quod ea vero, labore rerum asperiores laudantium.
            </p>

            <div>
              <button>Live Demo</button><button>Open Repository</button>
            </div>

        </div>  



    </div>
  )
}

export default ProjectCard