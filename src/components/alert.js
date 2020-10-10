import React, { useState } from 'react';

const Alert = ({ title = "Holy guacamole!", text = "You should check in on some of those fields below.", type = "primary", isShow }) => {

    const [show, setShow] = useState(isShow);
    const toggleShow = () => setShow(prev => !prev);
    
    const styles = {
        position: 'fixed',
        top: 50,
        right: 0,
        left: 0,
        width: "100%",
        zIndex: show ? '100' : -1
    };


    return (
        <div style={styles} className="container">
            <div className="row">
                <div className="col-12">
                    <div className={`alert alert-${type} alert-dismissible fade ${show ? 'show' : ''}`} role="alert">
                        <strong>{title}</strong> {text}
                        <button onClick={toggleShow} type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alert;