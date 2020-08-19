/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useMutation } from '@apollo/react-hooks';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// eslint-disable-next-line no-unused-vars
import LoadingIndicator from 'components/LoadingIndicator';
import Section from './Section';
import {
  changeUsername,
  changePass,
  setTokenToStores,
  signOuts,
  setCartIdToStore,
} from './actions';
import {
  makeSelectUsername,
  makeSelectPass,
  makeSelectToken,
} from './selectors';
import saga from './saga';
import signInMutation from '../../queries/login.graphql';
import createEmptyCart from '../../queries/createCart.graphql';

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
  token,
  onChangeUsername,
  onChangePass,
  setTokenToStore,
  signOut,
  setCartId,
}) {
  // useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [errorMess, setErrorMess] = useState('');
  const classes = useStyles();

  // signIn
  const [
    signIn,
    // eslint-disable-next-line no-shadow,no-unused-vars
    { loading: LoadingIndicator },
  ] = useMutation(signInMutation, {
    fetchPolicy: 'no-cache',
    onCompleted(data) {
      // eslint-disable-next-line no-shadow
      const token = data.generateCustomerToken.token
        ? data.generateCustomerToken.token
        : '';
      setTokenToStore(token);
      emptyCart();
      // window.location.reload();
    },
    onError(error) {
      setErrorMess(error.message);
      console.log(error.message);
    },
  });

  // create empty cart
  const [emptyCart] = useMutation(createEmptyCart, {
    fetchPolicy: 'no-cache',
    onCompleted(data) {
      setCartId(data.cartId);
    },
  });

  if (typeof token === 'undefined' || token === '') {
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
              }).then(r => console.log(r));
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
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
  token: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onChangePass: PropTypes.func,
  setTokenToStore: PropTypes.func,
  signOut: PropTypes.func,
  setCartId: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  pass: makeSelectPass(),
  token: makeSelectToken(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onChangePass: evt => dispatch(changePass(evt.target.value)),
    setTokenToStore: token => dispatch(setTokenToStores(token)),
    signOut: () => dispatch(signOuts()),
    setCartId: cartId => dispatch(setCartIdToStore(cartId)),
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
