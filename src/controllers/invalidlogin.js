import React, { useEffect, useRef } from "react";

function InvalidLoginInput({ shouldFocus = true }) {
    const passInputRef = useRef(null);

    useEffect(() => {
        if (shouldFocus && passInputRef.current) {
            passInputRef.current.focus();
        }
    }, [shouldFocus]);

    return (
        <div>
            <label htmlFor="login_password">Password</label>
            <input
                type="password"
                id="login_password"
                ref={passInputRef}
                placeholder="Enter your password"
                aria-describedby="passwordHelpText"
            />
            <small id="passwordHelpText" className="form-text text-muted">
                Please enter your password.
            </small>
        </div>
    );
}

export default InvalidLoginInput;