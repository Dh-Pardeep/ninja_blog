import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { app } from "../firebase";
import {
    createUserWithEmailAndPassword,
    getAuth,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updatePassword
} from "firebase/auth";

const auth = getAuth(app);

const SubscribeTwo = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailin, setEmailin] = useState("");
    const [passwordin, setPasswordin] = useState("");
    const [showSignInPopup, setShowSignInPopup] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [loginMessage, setLoginMessage] = useState("");

    const toggleSignInPopup = () => {
        setShowSignInPopup(!showSignInPopup);
        setShowForgotPassword(false); // Close the Forgot Password popup
        handleOverlay(!showSignInPopup);
    };

    const toggleForgotPassword = () => {
        setShowForgotPassword(!showForgotPassword);
        setShowSignInPopup(false); // Close the Sign In popup
        handleOverlay(!showForgotPassword);
    };
    const handleOverlay = (show) => {
        document.body.classList.toggle('overflow-hidden', show);
    };

    const closePopup = () => {
        setShowSignInPopup(false);
        setShowForgotPassword(false);
        setSuccessMessage(""); // Clear success message when closing the popup
        document.body.classList.remove('overflow-hidden'); // Remove 'overflow-hidden' class
    };

    const overlayClickHandler = (e) => {
        // Check if the click target is the overlay itself or the forgot password link
        if (
            e.target === e.currentTarget ||
            e.target.getAttribute("data-popup-type") === "forgotPassword"
        ) {
            closePopup();
        }
    };
    const createUser = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email.trim(), password.trim())
            .then((userCredential) => {
                const user = userCredential.user;
                setSuccessMessage("Account created successfully!");
                setLoginMessage(""); // Clear login message
                setEmail("");
                setPassword("");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Firebase Error: ${errorCode} - ${errorMessage}`);
            });
    };

    const signInUser = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, emailin.trim(), passwordin.trim())
            .then(() => {
                setLoginMessage("Log in success");
                setEmailin("");
                setPasswordin("");
                toggleSignInPopup();
            })
            .catch(() => {
                setLoginMessage("Error signing in");
            });
    };

    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                setLoginMessage("Sign out success");
            })
            .catch(() => {
                setLoginMessage("Error signing out");
            });
    };

    const changePassword = () => {
        const user = auth.currentUser;
        const newPassword = prompt("Enter your new password:");

        if (newPassword) {
            updatePassword(user, newPassword)
                .then(() => {
                    alert("Password changed successfully!");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(`Firebase Error: ${errorCode} - ${errorMessage}`);
                });
        }
    };

    const forgotPassword = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email.trim())
            .then(() => {
                // Password reset email sent successfully
                setSuccessMessage("Password reset email sent successfully!");
                setEmailin(""); // Clear the email input
                setPasswordin(""); // Clear the password input
                toggleForgotPassword(); // Close the forgot password popup
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Firebase Error: ${errorCode} - ${errorMessage}`);
            });
    };
    const closeForgotPasswordPopup = () => {
        setShowForgotPassword(false);
        setSuccessMessage(""); // Clear success message when closing the popup
        document.body.classList.remove('overflow-hidden'); // Remove 'overflow-hidden' class
    };

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black background
        zIndex: 10, // ensure the overlay is above other elements
        display: showSignInPopup  ? 'flex' : 'none', // Updated condition
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        overflow: (showSignInPopup)  ? 'hidden' : 'auto', // Hide overflow when the popup is open
    };
    const overlayStyletwo = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black background
        zIndex: 10, // ensure the overlay is above other elements
        display:  showForgotPassword ? 'flex' : 'none', // Updated condition
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        overflow: ( showForgotPassword) ? 'hidden' : 'auto', // Hide overflow when the popup is open
    };
    return (
        <div className='container xl:w-[1180px] px-3 sm:px-5 xl:px-0 mx-auto xl:ms-auto xl:me-[100px] mx_auto'>
            <div className='flex flex-col lg:flex-row  gap-10 xl:gap-20 mb-12  mt-12 lg:mt-[104px]  relative'>
                <div className='rounded-md bg-light_blue w-full  lg:w-[36%] xl:w-4/12 py-9 px-5 xl:px-7'>
                    <h2 className='text-white text-center font-Merriweather text-md lg:text-lg font-black leading-[160%] md:max-w-[182px] mx-auto'>Subscribe To Our Newsletter</h2>
                    <p className='text-para_light_gray text-center font-Roboto text-sm md:text-xmd font-medium leading-[160%] pt-3 pb-4'>Get weekly food news, articles, and videos delivered to your inbox.</p>
                    <div className='mx-4 '>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className='sm:flex justify-center lg:justify-start lg:items-start lg:flex-col items-center'>
                                <div className='text-center mb-6 sm:mb-0 lg:mb-6  lg:w-full'>
                                    <input
                                        onChange={e => setEmail(e.target.value)}
                                        value={email}
                                        type="email"
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        placeholder='Email'
                                        className='placeholder:text-light_gray placeholder:font-Roboto placeholder:md:text-xmd placeholder:text-sm placeholder:font-medium placeholder:leading-normal bg-white rounded w-full sm:w-[288px] lg:w-full max-w-[350px] lg:max-w-[305px] ps-4 py-3 outline-none'
                                    />
                                    <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='Password' className='placeholder:text-light_gray placeholder:font-Roboto placeholder:md:text-xmd placeholder:text-sm placeholder:font-medium placeholder:leading-normal bg-white rounded w-full  sm:w-[288px] lg:w-full max-w-[350px] lg:max-w-[305px] ps-4 py-3 outline-none mt-3' />
                                </div>
                                <div className='text-center md:text-start sm:ps-5 lg:ps-0'>
                                    <button type="submit" onClick={createUser} className='text-white font-Roboto  text-sm md:text-xmd font-medium leading-[160%] bg-heading rounded py-[9.6px] px-4 transition-all duration-200 ease-in-out hover:bg-white hover:text-light_blue hover:shadow-[0px_2px_6px_0px] hover:shadow-black'>Sign Up</button>
                                    <button type="button" onClick={toggleSignInPopup} className='text-white font-Roboto  text-sm md:text-xmd font-medium leading-[160%] bg-heading rounded py-[9.6px] px-4 transition-all duration-200 ease-in-out hover:bg-white hover:text-light_blue hover:shadow-[0px_2px_6px_0px] hover:shadow-black ml-3'>Sign In</button>
                                    <button
                                        onClick={toggleForgotPassword}
                                        data-popup-type="forgotPassword"
                                        className='text-white font-Roboto text-sm md:text-xmd font-medium leading-[160%] bg-heading rounded py-[9.6px] px-4 transition-all duration-200 ease-in-out hover:bg-white hover:text-light_blue hover:shadow-[0px_2px_6px_0px] hover:shadow-black mt-3'
                                    >
                                        Forgot Password
                                    </button>

                                </div>
                            </div>
                        </form>
                        {successMessage && (
                            <div className="text-green-500 mt-3  ">{successMessage}</div>
                        )}
                    </div>
                </div>
                <div style={overlayStyletwo} onClick={closeForgotPasswordPopup }></div>
                {/* forgot password popup */}
                {showForgotPassword && (
                    <div className='rounded-md bg-light_blue w-full lg:w-[36%] xl:w-4/12 py-9 px-5 xl:px-7 absolute z-50 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 max-w-[400px]'>
                        <form>
                            <div className='sm:flex justify-center lg:justify-start lg:items-start lg:flex-col items-center mt-5'>
                                <div className='text-center mb-6 sm:mb-0 lg:mb-6 lg:w-full'>
                                    <input
                                        onChange={e => setEmailin(e.target.value)}
                                        value={emailin}
                                        type="email"
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        placeholder='Email'
                                        className='placeholder:text-light_gray placeholder:font-Roboto placeholder:md:text-xmd placeholder:text-sm placeholder:font-medium placeholder:leading-normal bg-white rounded w-full sm:w-[288px] lg:w-full ps-4 py-3 outline-none'
                                    />
                                </div>
                                <div className='text-center md:text-start sm:ps-5 lg:ps-0'>
                                    <button onClick={forgotPassword} className='text-white font-Roboto text-sm md:text-xmd font-medium leading-[160%] bg-heading rounded py-[9.6px] px-4 transition-all duration-200 ease-in-out hover:bg-white hover:text-light_blue hover:shadow-[0px_2px_6px_0px] hover:shadow-black'>Reset Password</button>
                                    <button onClick={closeForgotPasswordPopup} className='text-white font-Roboto text-sm md:text-xmd font-medium leading-[160%] bg-heading rounded py-[9.6px] px-4 transition-all duration-200 ease-in-out hover:bg-white hover:text-light_blue hover:shadow-[0px_2px_6px_0px] hover:shadow-black ml-3'>Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
                <div style={overlayStyle} onClick={toggleSignInPopup }></div>
                {/* sign in popup */}
                {showSignInPopup && (
                    <div className='rounded-md bg-light_blue w-full  lg:w-[36%] xl:w-4/12 py-9 px-5 xl:px-7 absolute z-50 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 max-w-[400px]'>
                        <form>
                            <div className='sm:flex justify-center lg:justify-start lg:items-start lg:flex-col items-center mt-5'>
                                <div className='text-center mb-6 sm:mb-0 lg:mb-6  lg:w-full'>
                                    <input
                                        onChange={e => setEmailin(e.target.value)}
                                        value={emailin}
                                        type="email"
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        placeholder='Email'
                                        className='placeholder:text-light_gray placeholder:font-Roboto placeholder:md:text-xmd placeholder:text-sm placeholder:font-medium placeholder:leading-normal bg-white rounded w-full sm:w-[288px] lg:w-full  ps-4 py-3 outline-none'
                                    />
                                    <input onChange={e => setPasswordin(e.target.value)} value={passwordin} type="password" placeholder='Password' className='placeholder:text-light_gray placeholder:font-Roboto placeholder:md:text-xmd placeholder:text-sm placeholder:font-medium placeholder:leading-normal bg-white rounded w-full  sm:w-[288px] lg:w-full  ps-4 py-3 outline-none mt-3' />
                                </div>
                                <div className='text-center md:text-start sm:ps-5 lg:ps-0'>
                                    <button onClick={signInUser} className='text-white font-Roboto  text-sm md:text-xmd font-medium leading-[160%] bg-heading rounded py-[9.6px] px-4 transition-all duration-200 ease-in-out hover:bg-white hover:text-light_blue hover:shadow-[0px_2px_6px_0px] hover:shadow-black'>Log In</button>
                                    <button onClick={signOutUser} className='text-white font-Roboto  text-sm md:text-xmd font-medium leading-[160%] bg-heading rounded py-[9.6px] px-4 transition-all duration-200 ease-in-out hover:bg-white hover:text-light_blue hover:shadow-[0px_2px_6px_0px] hover:shadow-black ml-3'>Log Out</button>

                                </div>
                            </div>
                        </form>

                        {loginMessage && (
                            <div className="text-green-500 mt-3">{loginMessage}</div>
                        )}
                    </div>
                )}
                <div className='flex flex-col sm:flex-row justify-between gap-10 xl:gap-20  '>
                    <div className='max-w-[320px] w-full'>
                        <h2 className='text-black font-Roboto font-medium leading-[160%] text-xsm'>POPULAR POSTS</h2>
                        <Link to="#" className='mt-7 text-black font-Merriweather leading-[160%] text-xsm md:max-w-[320px] inline-block hover:!underline'>How To Have Your Cake and Eat It Too: The Way of The Chicken Man</Link>
                        <Link className='mt-4 lg:mt-[22px] text-black font-Merriweather leading-[160%] text-xsm hover:!underline inline-block'>My Grandma’s 30-year-old Recipe</Link>
                        <Link className='mt-4 lg:mt-[22px] text-black font-Merriweather leading-[160%] text-xsm hover:!underline inline-block'>What I learned about cooking from Ratatoulie</Link>
                    </div>
                    <div className='max-w-[320px] w-full'>
                        <h2 className='text-black font-Roboto font-medium leading-[160%] text-xsm'>Recent Posts</h2>
                        <Link className='mt-7 text-black font-Merriweather leading-[160%] text-xsm md:max-w-[320px] hover:!underline inline-block'>How To Have Your Cake and Eat It Too: The Way of The Chicken Man</Link>
                        <Link className='mt-4 lg:mt-[22px] text-black font-Merriweather leading-[160%] text-xsm hover:!underline inline-block'>My Grandma’s 30-year-old Recipe</Link>
                        <Link className='mt-4 lg:mt-[22px] text-black font-Merriweather leading-[160%] text-xsm hover:!underline inline-block'>What I learned about cooking from Ratatoulie</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeTwo