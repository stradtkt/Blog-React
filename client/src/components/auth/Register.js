import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Register = ({setAlert}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const {name, email, password, password2} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            setAlert('SUCCESS', 'success');
        }
    }
    return (
        <Grid>
            <div className="page-title">
                <h1 className="title">Register</h1>
            </div>
            <form onSubmit={e => onSubmit(e)}>
                <Grid item xs={12} md={12}>
                <TextField
                    id="filled-full-width"
                    label="Name"
                    style={{ margin: 8 }}
                    fullWidth
                    name="name"
                    margin="normal"
                    variant="filled"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={name}
                    onChange={e => onChange(e)}
                />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField
                        id="filled-full-width"
                        label="Email"
                        style={{ margin: 8 }}
                        placeholder="Enter Your Email"
                        fullWidth
                        name="email"
                        margin="normal"
                        variant="filled"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        value={email}
                        onChange={e => onChange(e)}
                    />
                </Grid>
                <Grid xs={12} md={12} lg={12}>
                    <TextField
                        type="password"
                        id="filled"
                        fullWidth
                        label="Password"
                        style={{ margin: 8 }}
                        name="name"
                        margin="normal"
                        variant="filled"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        value={password}
                        onChange={e => onChange(e)}
                    />
                </Grid>
                <Grid xs={12} md={12} lg={12}>
                    <TextField
                        type="password"
                        id="filled"
                        fullWidth
                        label="Confirm Password"
                        style={{ margin: 8 }}
                        name="password2"
                        margin="normal"
                        variant="filled"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        value={password2}
                        onChange={e => onChange(e)}
                    />
                </Grid>
                <Button variant="contained" color="primary">Register</Button>
            </form>
            <Grid container>
                <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}></Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                    <Link to="/"><Button variant="contained" color="secondary">Go Back</Button></Link>
                </Grid>
            </Grid>
      </Grid>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired
}

export default connect(null, {setAlert})(Register);
