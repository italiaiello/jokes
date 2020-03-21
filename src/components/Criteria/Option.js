import React from 'react'

const Option = ({ option, categories, setCategories, flags, setFlags }) => {

    const onOptionSelect = event => {
        event.preventDefault()
        if (!event.target.classList.contains('selected')) {
            event.target.classList.add('selected')
        } else {
            event.target.classList.remove('selected')
        }

        switch(option) {
            case 'Programming':
            case 'Miscellaneous':
            case 'Dark':
                if (!event.target.classList.contains('selected')) {
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
                if (!event.target.classList.contains('selected')) {
                    const filteredFlags = flags.filter(flag => flag !== option.toLowerCase())
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