import React from 'react'
import Library from './Library'
import './content.scss'

const Content = () => {
    return(
        <main>
            <h2>- Add a Book -</h2>
            {/* <BookForm /> */}
            <h2>- My Books -</h2>
            <Library />
        </main>
    )
}

export default Content