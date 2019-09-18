import React from 'react';

function NameList(){
    const persons=[
        {
            id:1,
            name:'rohan',
            age:31,
            skill:'nodejs'
        },
        {
            id:2,
            name:'sonu',
            age:25,
            skill:'php'
        },
        {
            id:3,
            name:'om',
            age:15,
            skill:'css'
        },
        {
            id:4,
            name:'aditya',
            age:22,
            skill:'html'
        }
    ]
    const personList =persons.map(person =>(
         <h2>
              I am {person.name}.I am {person.age} years old.I know {person.skill}
         </h2>
        ))
    return (
        <div>
            {
               personList
            }   
        </div>
    )
}
export default NameList