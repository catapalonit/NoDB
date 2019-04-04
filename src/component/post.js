class Post extends React.Component {
    constructor(props) {
        super(props)

this.state = {
    img: "",
    brand: "",
    model: "",
    size: ""
}
this.handleChange = this.handleChange.bind(this)
    }

const handleChange = (name, value) => {
    this.setState({[name]: value})
}

(e)=>this.handleChange(e.target.name, e.target.value)

}