import React from 'react';
import Option from './Option';

const Criteria = ({ setCategories, setFlags, setType }) => {

    const buttons = Array.from(document.getElementsByTagName('button'));

    const categories = ['Programming', 'Miscellaneous', 'Dark']
    const flags = ['NSFW', 'Religious', 'Political', 'Racist', 'Sexist']
    const types = ['Single', 'Two Part']

    return (
        <section className="criteria">
            <h2>Joke Filter</h2>
            <form>
                <article className="categorySelect">
                    <h3>Category</h3>
                    <article>
                        {
                            categories.map(category => <Option key={category} 
                                                                option={category} 
                                                                setCategories={setCategories}
                                                        />)
                        }
                    </article>
                </article>
                <article className="flagSelect">
                    <h3>Flag</h3>
                    <article>
                        {
                            flags.map(flag => <Option key={flag} option={flag} setFlags={setFlags}/>)
                        }
                    </article>
                </article>
                <br />
                <article className="typeSelect">
                    <h3>Type</h3>
                    <article>
                        {
                            types.map(type => <Option key={type} option={type} setType={setType} />)
                        }
                    </article>
                </article>
            </form>
        </section>
    )
}

export default Criteria;