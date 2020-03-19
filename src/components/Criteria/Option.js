import React from 'react'

const Option = ({ option, setType, setCategories, setFlags }) => {

    const onOptionSelect = event => {
        event.preventDefault()
        if (event.target.classList.value === "") {
            event.target.classList.add('selected')
        } else if (event.target.classList.value === "selected") {
            event.target.classList.remove('selected')
        }

        switch(option) {
            case 'Programming':
            case 'Miscellaneous':
            case 'Dark':
                setCategories(option.toLowerCase())
                break;
            case 'NSFW':
            case 'Religious':
            case 'Political':
            case 'Racist':
            case 'Sexist':
                setFlags(option.toLowerCase())
                break;
            case 'Single':
            case 'Two Part':
                setType(option.toLowerCase())
                break;
            default:
                return 'Invalid option'
        }
    }

    return <button className="" onClick={onOptionSelect}>{option}</button>
}

export default Option