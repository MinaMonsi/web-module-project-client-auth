import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
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
        axios.post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            console.log("happy path!", res.data.payload);
            localStorage.setItem('token', res.data.payload);
            this.props.history.push("/protected");
        })
    
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
                />
                <input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.credentials.password}
                />
                <button>Log In</button>
            </form>
        </div>
        )
    }
}
 
export default Login;