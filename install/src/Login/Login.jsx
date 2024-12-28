import React from 'react'
import styles from './Login.module.css';

export const Login = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.formcontainer}>
                <h1>Sign Up</h1>
                <p>Already have an account? <a href="#">Login here</a></p>
                <form>
                    <div className={styles.formgroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' placeholder='Enter your name here' />
                    </div>

                    <div className={styles.formgroup}>
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' placeholder='Enter your email here' />
                    </div>

                    <div className={styles.formgroup}>
                        <label htmlFor="password">Name</label>
                        <input type="password" id='password' placeholder='Enter your name here' />
                    </div>

                    <div className={styles.checkboxGroup}>
                        {/* <input type="checkbox" id='agree' className={styles.checkbox} /> */}
                        <label htmlFor="agree" className={styles.checkboxLabel}>
                            By signing up you agree to receive updates and special offers.
                        </label>
                    </div>
                    <button type='submit' className={styles.submitbuttons}>Submit</button>
                </form>
            </div>
            <div className={styles.imagecontainer}>
                <img className={styles.imagedesign} src='https://plus.unsplash.com/premium_vector-1721224450084-93ef291d0c5f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </div>
        </div>
        </>
    );
}