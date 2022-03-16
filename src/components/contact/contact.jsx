import './contact.css'

export const Contact = () => {
    
    return (
        <div className='contact'>
            <h3>CONTACT ME</h3>
            <section>
                <div className="categoryContact">
                    <h4 className="categoryContactTitle">Name</h4>
                    <input type="text" placeholder="Name" className="categoryContactInput"/>
                </div>
                <div className="categoryContact">
                    <h4 className="categoryContactTitle">Email</h4>
                    <input type="text" placeholder="Email" className="categoryContactInput"/>
                </div>
                <div className="categoryContactText">
                    <h4 className="categoryContactTitle">Message</h4>
                    <input type="textarea" className="categoryContactTextArea"/>
                </div>  

                <button className="contactButton">SEND</button>
            </section>
        </div>
    )
}