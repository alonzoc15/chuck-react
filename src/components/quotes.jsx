import React, {Component} from 'react';
import { loadData } from '../utils/loadData'

class Quote extends Component {
    state = {
        quote: 'Fetching quotes...'
    };

    async componentDidMount() {
        this.getQuote();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.category !== this.props.category) {
            this.getQuote()
        }
    }

    getQuote = async () => {
        const { category } = this.props

        const data = await loadData(
            `https://api.chucknorris.io/jokes/random?category=${category}`
        );
        const quote = data.value;

        this.setState({
            quote
        })
    }

    handleClick = e => {
        e.preventDefault()
        this.getQuote();
    };

    render() {
        console.log(this.props)
        const { quote } = this.state;
        const { category } = this.props;
        return (
            <>
                <p>{quote}</p>
                <button onClick={e => this.handleClick(e)}>
                    Get Another Quote from the {category} Category
                </button>
            </>
        );
    }
}

export default Quote;