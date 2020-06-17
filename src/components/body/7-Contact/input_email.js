import React from "react";

function InputEmail ({ email, setEmail }) {
    return (
        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
                <input 
                    class={`input ${testMail(email)? "is-success" : "is-danger"}`}
                    type="email" 
                    placeholder="Email input" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
            </div>
            {!testMail(email) && <p class="help is-danger">This email is invalid</p>}
        </div>
    );
}

function testMail (email) {
    return(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
}

export default InputEmail;