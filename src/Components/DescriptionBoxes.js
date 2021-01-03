import React, {useEffect} from 'react';

//because of this, don't need to import from url
//don't need to create a new object, just a new variable
const DescriptionBox = ({title,description}) => {

    return (
            <div className = "description">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
    );
};

// useEffect(() => {
//     console.log("Request to SWAPI");
//     let url = 'https://loripsum.net/api'
//     fetch(url).then(
// 			result => console.log(result)
// 		)
//   }, []);


function DescriptionBoxes(){
    const contentBoxes = [
    {title:"OSA." , description: "Our premier summer internship for underclassmen, mentorship, impactful projects, and more can be found in the open source accelerator: the first program of its kind in the United States"},
    {title:"Launchpad.", description: "Our premier fall program for new web developers, launchpad is where impact begins and learning ends: the first program of its kind in the United States"},
    {title:"Social Good.", description: "This is the heart of riceapps. If there is no impact, there is no project. We’re always looking for new opportunities to create good through our digital solutions so please reach out if your organization needs dedicated problem-solvers to tackle an issue!"}


    ]
    return(
        <div className = "descriptionContainer">

            {contentBoxes.map((contentBox) => (
                <DescriptionBox title={contentBox.title} 
                                description={contentBox.description}
                                />
            ))} 
        </div>
    )
}

export default DescriptionBoxes