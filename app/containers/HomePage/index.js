/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H2 from 'components/H2';
import { useMutation } from '@apollo/react-hooks';
import Cookies from 'js-cookie';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Section from './Section';
import {
  changeUsername,
  changePass,
  setTokenToStores,
  signOuts,
} from './actions';
import { makeSelectUsername, makeSelectPass } from './selectors';
import reducer from './reducer';
import saga from './saga';
import signInMutation from '../../queries/login.graphql';
import signOutMutation from '../../queries/logout.graphql';

const key = 'home';
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function HomePage({
  username,
  pass,
  onChangeUsername,
  onChangePass,
  setTokenToStore,
  signOut,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [errorMess, setErrorMess] = useState('');
  const token = Cookies.get('customer_access_token');
  const classes = useStyles();

  const [
    signIn,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(signInMutation, {
    fetchPolicy: 'no-cache',
    onCompleted(data) {
      const token = data.generateCustomerToken.token
        ? data.generateCustomerToken.token
        : '';
      setTokenToStore(token);
      window.location.reload();
    },
    onError(error) {
      setErrorMess(error.message);
      console.log(error.message);
    },
  });

  // const [signOut] = useMutation(signOutMutation, {
  //   fetchPolicy: 'no-cache',
  //   onCompleted(data) {
  //     console.log(data);
  //   },
  //   onError(error) {
  //     setErrorMess(error.message);
  //     console.log(error.message);
  //   },
  // });

  if (typeof token === 'undefined') {
    return (
      <article>
        <div className="login-form">
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <p className="messageError">{errorMess}</p>
          <form
            className={classes.form}
            noValidate
            onSubmit={e => {
              e.preventDefault();
              signIn({
                variables: {
                  email: username,
                  password: pass,
                },
              });
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              id="username"
              type="text"
              placeholder="name"
              value={username}
              onChange={onChangeUsername}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="pass"
              type="password"
              placeholder="pass"
              value={pass}
              onChange={onChangePass}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </article>
    );
  }
  return (
    <div>
      <Section>
        <div className="login-form">
          <Typography component="h1" variant="h5">
            Welcome!
          </Typography>
          <Button
            onClick={signOut}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            LogOut
          </Button>
        </div>
      </Section>
    </div>
  );
}

HomePage.propTypes = {
  username: PropTypes.string,
  pass: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onChangePass: PropTypes.func,
  setTokenToStore: PropTypes.func,
  signOut: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  pass: makeSelectPass(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onChangePass: evt => dispatch(changePass(evt.target.value)),
    setTokenToStore: token => dispatch(setTokenToStores(token)),
    signOut: () => dispatch(signOuts()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
