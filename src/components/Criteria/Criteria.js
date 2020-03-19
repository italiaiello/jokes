import React from 'react';
import Option from './Option';

const Criteria = () => {

    const buttons = Array.from(document.getElementsByTagName('button'));
    console.log(buttons[0])

    const onButtonSelect = event => {
        event.preventDefault()

        const id = parseInt(event.target.dataset.id)
        console.log(id)
        switch(id) {
            case 0:
                if (!buttons[0].classList.contains('selected')) {
                    buttons[0].classList.add('selected')
                } else {
                    buttons[0].classList.remove('selected')
                }

                for (let i = 1; i < buttons.length - 2; i++) {
                    if (buttons[0].classList.contains('selected')) {
                        
                        buttons[i].classList.add('selected')
                        console.log(buttons[i].classList)
                    } else {
                        buttons[i].classList.remove('selected')
                    }
                }
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                
                for (let i = 0; i < buttons.length - 2; i++) {
                    if (buttons[0].classList.contains('selected')) {
                        if (buttons[i].dataset.id !== id && !buttons[i].classList.contains('selected')) {
                            buttons[i].classList.add('selected')
                        } else if (buttons[i].dataset.id !== id && buttons[i].classList.contains('selected')) {
                            buttons[i].classList.add('selected')
                        }
                    }    
                    
                }

                console.log(event.target)
                if (!buttons[parseInt(id)].classList.contains('selected')) {
                    buttons[parseInt(id)].classList.add('selected')
                } else {
                    buttons[parseInt(id)].classList.remove('selected')
                }
                
              
                
                
            case 6:
            case 7:
                const lastButton = buttons.length - 1
                const secondLastButton = buttons.length - 2
                if (!event.target.classList.contains('selected')) {
                    event.target.classList.add('selected')
                } else {
                    event.target.classList.remove('selected')
                }

                if (id === 6 && buttons[lastButton].classList.contains('selected')) {
                    buttons[lastButton].classList.remove('selected')
                } else if (id === 7 && buttons[secondLastButton].classList.contains('selected')) {
                    buttons[secondLastButton].classList.remove('selected')
                }
        }
    }

    return (
        <section className="criteria">
            <h2>Joke Filter</h2>
            <form>
                <article className="flagSelect">
                    <h3>Category</h3>
                    <article>
                        <button data-id="0" onClick={onButtonSelect}>Any</button>
                        <button data-id="1" onClick={onButtonSelect}>NSFW</button>
                        <button data-id="2" onClick={onButtonSelect}>Religious</button>
                        <button data-id="3" onClick={onButtonSelect}>Political</button>
                        <button data-id="4" onClick={onButtonSelect}>Racist</button>
                        <button data-id="5" onClick={onButtonSelect}>Sexist</button>
                    </article>
                </article>
                <br />
                <article className="typeSelect">
                    <h3>Type</h3>
                    <article>
                        <button data-id="6" onClick={onButtonSelect}>Single</button>
                        <button data-id="7" onClick={onButtonSelect}>Two Part</button>
                        <Option />
                    </article>
                </article>
            </form>
        </section>
    )
}

export default Criteria;