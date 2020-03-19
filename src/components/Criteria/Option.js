import React from 'react'

const Option = ({ option, categories, setCategories, flags, setFlags }) => {

    console.log(categories, flags)

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
                if (event.target.classList.value === "") {
                    console.log(option)
                    const filteredCategories = categories.filter(category => category !== option)
                    setCategories([...filteredCategories])
                } else {
                    setCategories([...categories, option])
                }
                break;
            case 'NSFW':
            case 'Religious':
            case 'Political':
            case 'Racist':
            case 'Sexist':
                if (event.target.classList.value === "") {
                    console.log('flaggy flag')
                    const filteredFlags = flags.filter(flag => flag !== option)
                    console.log(filteredFlags)
                    setFlags([...filteredFlags])
                } else {
                    setFlags([...flags, option.toLowerCase()])
                }
                break;
            default:
                return 'Invalid option'
        }
    }

    return <button className="" onClick={onOptionSelect}>{option}</button>
}

export default Option