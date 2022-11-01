import React, { useState } from 'react';
import classes from './AddDetails.module.css';
import Card from './Card';

function AddDetails(props){

    const [title,setTitle]=useState('');
    const [email,setEmail]=useState('');
    const [pwd,setPwd]=useState('');

    async function fetchMoviesHandler(event){
        event.preventDefault();
        const response=await fetch('https://react-http-f7479-default-rtdb.firebaseio.com/Details.json');
        const data=response.json();
        console.log(data);
    }
    async function onSubmitHandler(event){
        event.preventDefault();
        const details={
            title:title,
            email:email,
            pwd:pwd
        }
        const response=await fetch('https://react-http-f7479-default-rtdb.firebaseio.com/Details.json',{
            method:'POST',
            body:JSON.stringify(details),
            headers:{
                'content-Type':'application/json'
            }
        });
        const data=response.json();
        console.log(data);
        setPwd('');
        setEmail('');
        setTitle('');
    }
    function titleChangeHandler(event){
        setTitle(event.target.value);
        console.log(event.target.value)
    }
    function emailChangeHandler(event){
        setEmail(event.target.value);
        console.log(event.target.value)
    }
    function pwdChangehandler(event){
        setPwd(event.target.value);
        console.log(event.target.value)
    }

    return <Card className={classes.input}>
    
    <form onSubmit={onSubmitHandler} >
        <div>
            <label htmlFor='title'>Name</label>
            <input type='text' id='title' value={title} onChange={titleChangeHandler}></input>
        </div>
        <div>
            <label htmlFor='email'>email</label>
            <input type='email' id='email' value={email} onChange={emailChangeHandler}></input>
        </div>
        <div>
            <label htmlFor='pwd'>password</label>
            <input type='password' id='pwd' value={pwd} onChange={pwdChangehandler}></input>
        </div>
        <button>Add details</button>
        <button onClick={fetchMoviesHandler}>Fetch details</button>

    </form>

</Card>
}

export default AddDetails;



