import React from "react";

function InputEmail ({ email, setEmail }) {
    return (
        <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left">
                <input 
                    className={`input ${testMail(email)? "is-success" : "is-danger"}`}
                    type="email" 
                    placeholder="Email input" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                </span>
            </div>
            {!testMail(email) && <p className="help is-danger">This email is invalid</p>}
        </div>
    );
}

function testMail (email) {
    return(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
}

export default InputEmail;