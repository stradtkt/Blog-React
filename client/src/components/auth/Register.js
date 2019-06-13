import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const Register = ({setAlert}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const {name, email, password, password2} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    const onSubmit = e => {
        e.preventDefault();
        if(password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            setAlert('SUCCESS', 'success');
        }
    }
    const useStyles = makeStyles(theme => ({
        container: {
          display: 'inline-block',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: '100%',
        },
        dense: {
          marginTop: 19,
        },
        menu: {
          width: 200,
        },
      }));
      const classes = useStyles();
    return (
        <Grid>
            <div className="page-title">
                <h1 className="title">Register</h1>
            </div>
            <form onSubmit={e => onSubmit(e)}>
                <TextField
                    type="text"
                    label="Name"
                    name="name"
                    className={classes.textField}
                    value={name}
                    onChange={e => onChange(e)}
                    margin="normal"
                />
                <TextField
                    type="email"
                    label="Email"
                    name="email"
                    className={classes.textField}
                    value={email}
                    onChange={e => onChange(e)}
                    margin="normal"
                />
                <TextField
                    type="password"
                    label="Password"
                    name="password"
                    className={classes.textField}
                    value={password}
                    onChange={e => onChange(e)}
                    margin="normal"
                />
                <TextField
                    type="password"
                    label="Confirm Password"
                    name="password2"
                    className={classes.textField}
                    value={password2}
                    onChange={e => onChange(e)}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">Register</Button>
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
