import React from 'react'


const Edu = ({desc}) => {
    return (
        <article className='education_Card'>            
            <div className='education_border'> </div>            
            <div className='Education_container'>
                <h2 className='Education_heading'>{desc.Education_heading}</h2>
                <h3 className='college_name'>{desc.college_name}</h3>
                <h3 className='sgpa'>{desc.sgpa}</h3>
                <p> {desc.desc}
                </p>
            </div>
            <div className='orangebox'></div>
            



        </article>
    )
}

export default Edu