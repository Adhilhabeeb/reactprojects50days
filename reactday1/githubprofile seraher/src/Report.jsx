import React, { useEffect, useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
function Report( props) {

    const [repsdat, setrepsdat] = useState([])
    let {data,loading}=props


    useEffect(() => {
if ( data &&data.repos_url) {
   async function name(params) {

    try {
        let fetchd= await fetch(`${data.repos_url}`);
        let datass= await fetchd.json();
        console.log(datass,"pppp data fetchd")

        setrepsdat(pr=>{
            if (datass.length>9) {
              
               return  datass.slice(0,10)
            }
            return datass
        })
        // const fetchResponse = await fetch(`${data.repos_url}`);
        // const reposData = await fetchResponse.json();
        // console.log(reposData, "Fetched Repos Data");
    } catch (error) {
        console.error("Error fetching repositories:", error);
    }
  }
    
  name()
}
    
    
    }, [data])
    


    useEffect(() => {
     

        console.log(repsdat,"reposdatac")
    }, [repsdat])
    
   if (data && !data.message) {


    return (

        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
		<div className="grid grid-cols-3 gap-8">
			
			<div className="col-span-1">
				{/* <!-- Profile Section --> */}
				<div className="text-center mb-6">
					<h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
					<p className="text-lg text-gray-600">{data.bio?data.bio:"plz fill bio on github"}</p>
					<p className="text-gray-500 mt-2">janesmith@example.com | (321) 987-6540</p>
				</div>

				{/* <!-- Skills Section --> */}
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-4">Skills</h2>
					<ul className="list-disc pl-5 space-y-2 text-gray-600">
						<li>Figma, Adobe XD, Sketch</li>
						<li>Wireframing & Prototyping</li>
						<li>Responsive Web Design</li>
						<li>User Research, A/B Testing</li>
					</ul>
				</section>

				{/* <!-- Education Section --> */}
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-4">Education</h2>
					<p className="font-bold text-gray-800">Bachelor of Arts in Graphic Design</p>
					<p className="text-gray-600">Design University - 2014 to 2018</p>
				</section>

				{/* <!-- Languages --> */}
				<section>
					<h2 className="text-xl font-semibold text-gray-700 mb-4">Languages</h2>
					<p className="text-gray-600">English (Fluent), Spanish (Intermediate)</p>
				</section>
			</div>

			{/* <!-- Right Column --> */}
			<div className="col-span-2">
				{/* <!-- Summary Section --> */}
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-4">Profile</h2>
					<p className="text-gray-600">
						Creative developer with good    experience in developing
						user-centered digital interfaces for impressing clints
						Strong in translating client requirements into intuitive designs
						that improve user engagement and business outcomes.
					</p>
				</section>

				{/* <!-- Experience Section --> */}
				<section className="mb-8">
					<h2 className="text-xl font-semibold text-gray-700 mb-4"> My Projects</h2>
					
					<div className="mt-4">
						<h3 className="font-bold text-gray-800"> my  Awesome  work at :</h3><br/>
						<ul style={{listStyle:"inherit"}}>


                            {repsdat&& repsdat.map(rep=>{

                                return <li>{rep.name}</li>
                            })}
                        </ul>
					</div>
                    <div>
                         <br></br> 
						<h3 className="font-bold text-gray-800">Location:   {data.location?data.location:"plzz fll loction on github"}</h3>
                       
                    </div>
				</section>
			</div>
		</div>
	</div>
      )
   }else{
    return  <h1>notfound  </h1>
   }

 



}

export default Report