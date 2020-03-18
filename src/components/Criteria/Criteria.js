import React, { useState } from 'react';

const Criteria = props => {

    const [isSelected, setIsSelected] = useState(false);

    return (
        <section className="criteria">
            <h2>Joke Filter</h2>
            <form>
                <article className="flagSelect">
                    <h3>Category</h3>
                    <article>
                        <button>Any</button>
                        <button>NSFW</button>
                        <button>Religious</button>
                        <button>Political</button>
                        <button>Racist</button>
                        <button>Sexist</button>
                    </article>
                </article>
                <br />
                <article className="typeSelect">
                    <h3>Type</h3>
                    <article>
                        <button>Single</button>
                        <button>Two Part</button>
                    </article>
                </article>
            </form>
        </section>
    )
}

export default Criteria;