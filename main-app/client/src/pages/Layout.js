import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})

const Layout = ({ onLogout, children }) => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg" className={classes.root}>
      {children}
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
}

export default Layout
