import React, { useEffect, useRef } from "react";

function ErrAuth() {
    const passInputRef = useRef(null);

    useEffect(() => {
        if (passInputRef.current) {
            passInputRef.current.focus();
        }
    }, []);

    return (
        <input 
            type="password" 
            id="login_password" 
            ref={passInputRef} 
            placeholder="Enter your password"
        />
    );
}

export default ErrAuth;
