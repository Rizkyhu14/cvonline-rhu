export default function(){
    //ini adalah skill saya
    const skills= ["HTML","CSS","JavaScript","TypeScript","React"];
    return(
        <div>
            <h2 className="mt-40 text-2xl text-blue-900 font-bold">My Skills</h2>
            <ul>
              {skills.map((skill) => (
                <li 
                className="p-2 border-2 border-white m-2 rounded-md bg-yellow-300"
                key={skill}>
                    {skill}
                </li> 
            ))}  
            </ul>
        </div>
    )
}