import React from 'react';

const Criteria = props => {
    return (
        <section className="criteria">
            <form>
                <article className="flagSelect">
                    <button>Any</button>
                    <button>NSFW</button>
                    <button>Religious</button>
                    <button>Political</button>
                    <button>Racist</button>
                    <button>Sexist</button>
                </article>
                <article className="typeSelect">
                    <button>Single</button>
                    <button>Two Part</button>
                </article>
            </form>
        </section>
    )
}

export default Criteria;