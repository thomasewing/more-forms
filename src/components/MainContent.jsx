import React, {useState, useEffect} from 'react';

const MainContent = ()=>{
    const [number, setNumber]= useState(0);
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [confirmPassword, setConfirmPassword]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    // const counterClickHandler = event => {
        // event.preventDefault();
        // const newNumber = number + 1;
        // setNumber(newNumber);
    // }

    const formHandler = event =>{
        event.preventDefault();

    }
    return(
        <div>
            {/* <p>{number}</p>
            <button onCLick={counterClickHandler}>+1</button> */}
            <form onSubmit={formHandler}>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                </div>
                {firstName.length < 2 && firstName.length > 0 ? (
                    <p>First Name must be at least 2 characters</p>
                ) : null}
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={e=> setLastName(e.target.value)}/>
                </div>
                {lastName.length < 2 && lastName.length > 0 ? (
                    <p>Last Name must be at least 2 characters</p>
                ) : null}
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={e=> setEmail(e.target.value)}/>
                </div>
                {email.length < 5 && email.length > 0 ? (
                    <p>Email must be at least 5 characters</p>
                ) : null}
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>
                </div>
                {password.length < 8 && password.length > 0 ? (
                    <p>First Name must be at least 8 characters</p>
                ) : null}
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={e=> setConfirmPassword(e.target.value)}/>
                </div>
                {confirmPassword.length < 8 && confirmPassword.length > 0 ? (
                    <p>First Name must be at least 8 characters</p>
                ) : null}
                <button>Submit</button>
            </form>
            <h3>{firstName}</h3>
            <h3>{lastName}</h3>
            <h3>{email}</h3>
            <h3>{password}</h3>
            <h3>{confirmPassword}</h3>
        </div>
    )
}
export default MainContent;