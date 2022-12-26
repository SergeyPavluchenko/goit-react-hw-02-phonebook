import { Component } from "react";


export class ContactForm extends Component{
    state = {
        contacts: [],
        name: ''
    }

    hendleNameCange = event => {
        const { name, value} = event.target
        this.setState({ [name]: value });
        // console.log(event.target.value);
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.hendleNameCange}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                </form>
            </div>
        )
    }
}