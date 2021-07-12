import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            isLoading: false,
            username: '',
            password: ''        
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        //use axios to do post request
        axios.post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            //if request is successful, console.log token
            console.log("happy path", res.data.payload);
            localStorage.setItem('token', res.data.payload);
            this.props.history.push("/protected");
        })
        //if request is unsuccessful, show error
        .catch(err => console.log("sad path", err))

    }

    render(){
        return (
            <div>
            <form onSubmit={this.login}>
                <input
                type="text"
                name="username"
                placeholder="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
                />
                <input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
                />
                <button>Log In</button>
            </form>
        </div>
        )
    }
}
 
export default Login;