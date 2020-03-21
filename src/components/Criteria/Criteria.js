import React from 'react';
import Option from './Option';

const Criteria = ({ categories, setCategories, flags, setFlags, setType }) => {

    const availableCategories = ['Programming', 'Miscellaneous', 'Dark']
    const availableFlags = ['NSFW', 'Religious', 'Political', 'Racist', 'Sexist']

    const onTypeSelect = event => {
        event.preventDefault()
        const typeSelected = event.target.dataset.id
        const buttons = document.getElementsByClassName('typeSelectButton')
        
        if (typeSelected === '1') {
            if (!buttons[0].classList.contains('selected')) {
                buttons[0].classList.add('selected')
                if (buttons[1].classList.contains('selected')) {
                    buttons[1].classList.remove('selected')
                }
            } else {
                buttons[0].classList.remove('selected')
            }
            setType('single')
        } else if (typeSelected === '2') {
            if (!buttons[1].classList.contains('selected')) {
                buttons[1].classList.add('selected')
                if (buttons[0].classList.contains('selected')) {
                    buttons[0].classList.remove('selected')
                }
            } else {
                buttons[1].classList.remove('selected')
            }
            setType('twopart')
        }
    }

    return (
        <section className="criteria">
            <form>
                <article className="categorySelect">
                    <h4>Category</h4>
                    <article>
                        {
                            availableCategories.map(category => <Option key={category} 
                                                                option={category}
                                                                categories={categories}
                                                                setCategories={setCategories}
                                                        />)
                        }
                    </article>
                </article>
                <article className="flagSelect">
                    <h4>Flag</h4>
                    <article>
                        {
                            availableFlags.map(flag => <Option key={flag} 
                                                option={flag}
                                                flags={flags}
                                                setFlags={setFlags}/>)
                        }
                    </article>
                </article>
                <br />
                <article className="typeSelect">
                    <h4>Type</h4>
                    <article>
                        <button className="typeSelectButton" data-id="1" onClick={onTypeSelect}>Single</button>
                        <button className="typeSelectButton" data-id="2" onClick={onTypeSelect}>Two Part</button>
                    </article>
                </article>
            </form>
        </section>
    )
}

export default Criteria;