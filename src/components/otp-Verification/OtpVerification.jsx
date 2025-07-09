import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Image
import Logo from "../../assets/images/authentication/logo.svg";

const initialOtpState = ["", "", "", "", "", ""];

const initialResendState = {
    timeLeft: 120,
    disabled: true
};

const OtpVerification = () => {

    const { state } = useLocation();
    console.log(state);

    const navigate = useNavigate();

    const [otp, setOtp] = useState(initialOtpState);
    const [resend, setResend] = useState(initialResendState);


    const handleChange = (e, index) => {
        const value = e.target.value.replace(/\D/g, ''); // Only digits
        if (value.length === 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Focus next input
            const nextInput = document.getElementById(`otp-input-${index + 1}`);
            if (nextInput) nextInput.focus();
        } else {
            // Clear the current box if not a valid single digit
            const newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);
        }
    }

    const handleBackspace = (e, index) => {
        // if (e.key === "Backspace" && otp[index] === "" && index > 0) {
        //     document.getElementById(`otp-input-${index - 1}`).focus();
        // }

        if (e.key === "Backspace") {
            const newOtp = [...otp];

            if (otp[index] === "") {
                // Go to previous input
                if (index > 0) {
                    const prevInput = document.getElementById(`otp-input-${index - 1}`);
                    if (prevInput) prevInput.focus();
                }
            } else {
                // Clear current input
                newOtp[index] = "";
                setOtp(newOtp);
            }
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        const enteredOtp = otp?.join('');
        if (enteredOtp.length === 6) {

            if (state === "sign-in") {
                navigate("/create-password");
            }
            else {
                navigate("/address-details");
            }
        }
        else {
            alert("Please enter all 6 digits");
        }
    }


    const handleResend = async () => {
        setOtp(initialOtpState);

        setResend(initialResendState);
    }


    useEffect(() => {
        let timer;

        if (resend.disabled && resend.timeLeft > 0) {
            timer = setInterval(() => {
                setResend(prev => ({
                    ...prev,
                    timeLeft: prev.timeLeft - 1
                }));
            }, 1000);
        }

        if (resend.timeLeft === 0 && resend.disabled) {
            setResend(prev => ({
                ...prev,
                disabled: false
            }));
        }

        return () => clearInterval(timer);
    }, [resend.disabled, resend.timeLeft]);

    return (
        <>
            <div className='authentication otp'>
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-10 col-sm-9 col-md-7 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="logo text-center">
                            <img src={Logo} alt="Logo" className='img-fluid' draggable={false} />
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="top">
                                <h2>OTP Verification</h2>

                                <p>Enter OTP that we have send on <span>abc@gmail.com</span></p>
                            </div>

                            <div className="second">
                                <div className="col-12 mb-2">
                                    <div className='otp-container'>

                                        {otp?.map((digit, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                // pattern='\d*'
                                                maxLength="1"
                                                // id={`otp-${index}`}
                                                id={`otp-input-${index}`}
                                                name="otp"
                                                className="form-control"
                                                value={digit}
                                                onChange={(e) => handleChange(e, index)}
                                                onKeyDown={(e) => handleBackspace(e, index)}
                                                // onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                                autoFocus={index === 0}
                                            />
                                        ))}

                                    </div>
                                </div>

                                <div className='mb-4 resend text-end'>
                                    <button
                                        type='button'
                                        className='resend_btn me-1'
                                        onClick={handleResend}
                                        disabled={resend.disabled}
                                    >
                                        Resend
                                    </button>
                                    {/* in 120 sec */}
                                    {resend.disabled ?
                                        <span> in {resend.timeLeft} sec</span>
                                        :
                                        <span> in {resend.timeLeft} sec</span>
                                    }
                                </div>

                                <div className='text-center'>
                                    <button type='submit' className='main_btn auth_btn'>
                                        VERIFY
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtpVerification;