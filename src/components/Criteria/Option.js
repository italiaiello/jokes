import React from 'react'

const Option = props => {

    const onOptionSelect = event => {
        event.preventDefault()
        if (event.target.classList.value === "") {
            event.target.classList.add('selected')
        } else if (event.target.classList.value === "selection") {
            event.target.classList.remove('selected')
        }
        
    }

    return <button className="chicken" onClick={onOptionSelect}>Cheese</button>
}

export default Option