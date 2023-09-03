import React from 'react'
// import PropTypes from 'prop-types'


function Alert(props) {
  const capitalize = (capWord) => {

    return capWord.charAt(0).toUpperCase() + capWord.slice(1);

  }  
  return (
    props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
  )
}

// Alert.propTypes = {
//     msgType:   PropTypes.string.isRequired,
//     msg: PropTypes.string.isRequired
// }

export default Alert
