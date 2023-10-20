export default function ContactMe(){
    return(
        <section id="contact" className="Contact--section">
        <div>
        <p className="sub--tittle">
        Get In Touch
        </p>
        <h2>
        contact Me
        </h2>
        
        </div>
        <form className="contact--form--container">
            <div className="container">
                <label htmlFor="firstname"className="contact--label">
                    <span className="text-md">First Name</span>
                    <input
                    type="text" 
                    className="contact--input--text--md"
                    name="first-name"
                    id="first-name"
                    required
                    />
                    

                </label>
                <label htmlFor="lastname" className="contact--label">
                    <span className="text--md"> Last Name</span>
                    <input
                     type="text"
                     className="contact--input--text--md"
                     name="Last--name"
                     id="Last--name"
                     required
                    />

                </label>
                <label htmlFor="Email" className="Contact--label">
                    <span className="text--md">Email</span>
                    <input
                    type="email"
                    className="contact--input--text--md"
                    name="email"
                    id="email"
                    required
                    />

                </label>
                <label htmlFor="Phone number" className="contact--label">
                    <span className="text--md">Phone Number</span>
                    <input
                    type="Number"
                    className="contact--input--text--md"
                    name="Phone number"
                    id="Phone number"
                    required
                    />

                </label>
                <label htmlFor="choose--topic" className="contact--label">
                    <span className="text--md">Choose A Topic</span>
                    <select id="choose topic" className="contact--input--text--md">
                        <option>select one</option>
                        <option>Item one</option>
                        <option>Item two</option>
                        <option>Item three</option>
                    </select>

                </label>
                <label htmlFor="Message" className="contact--label">
                    <span className="text--md"> Message</span>
                    <textarea
                     className="contact--input--text--md"
                     id="message"
                     rows={8}
                     placeholder="type your message"
                    />

                </label>
                <label htmlFor="Checkbox" className="checkbox--label">
                    <input type="checkbox" reuired name="checkbox" id="checkbox"></input>
                    <span className="text--sm"> I Accept the terms</span>

                </label>
                <div>
                <button className="contact--button">Submit</button>
                </div>
                

            </div>

        </form>
        
        
        </section>
    );

}