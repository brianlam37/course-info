import React from 'react'

const Header = ({name}) =>{
    return(
       <h1>{name}</h1>
    )
}

const Content = ({parts}) =>{
    return(
        <>
            {parts.map(part =><Part key = {part.id} name = {part.name} exercises = {part.exercises}/>)}
        </>
    )
}

const Part = ({name,exercises}) =>{
    return(
        <p>
            {name} {exercises}
        </p>
    )
}

const Total = ({parts}) =>{
    return(
        <>
            <b>total of {parts.reduce(((s, p) => s+=p.exercises),0)} exercises</b>
        </>
    )
}
const Course = ({courses}) =>{
    return (
        <div>
           {courses.map(course =>{
               return(
                    <>
                        <Header name = {course.name}/>
                        <Content parts = {course.parts}/> 
                        <Total parts ={course.parts}/>
                    </>
               )
           })}
        </div>
      )
}

export default Course