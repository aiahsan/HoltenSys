import Logo from '../components/logo'

const SignUp = () => {

    return <div className="container">
        <div className="login-bxsdas" style={{marginTop:30}}>
        <Logo isBlue={true}/>
            <div className="iasdojwewiasaar2 ioiwq923as21">
                <form >
                   <div className="d-flex justify-content-between flex-wrap align-items-center">
                   <div className="w-100">
                   <div>
                        <label className="lblds-weds">Full Name</label>
                        <input className="form-control" type="text"  />
                    </div>
                   </div>
                   <div className="w11-100">
                        <label className="lblds-weds"> Company name</label>
                        <input className="form-control" name="first_name"  type="text" />
                    </div>
                    <div className="w11-100">
                        <label className="lblds-weds">Adresss</label>
                        <input className="form-control" name="last_name"  type="text" />
                    </div>
                   </div>
                   <div className="w-100">
                   <div>
                        <label className="lblds-weds">Email</label>
                        <input className="form-control" type="text" name="email"  />
                    </div>
                   </div>
                   <div className="d-flex justify-content-between flex-wrap align-items-center">
                   <div className="w11-100">
                        <label className="lblds-weds">Phone Number</label>
                        <input className="form-control"   type="text" />
                    </div>
                    <div className="w11-100">
                        <label className="lblds-weds">OrgNr</label>
                        <input className="form-control"   type="number" maxLength={10} />
                    </div>
                   </div>
                   
                   <div className="d-flex justify-content-between flex-wrap align-items-center">
                   <div className="w11-100">
                        <label className="lblds-weds">Password</label>
                        <input className="form-control" type="password"  name="hashed_password" />
                    </div>
                    <div className="w11-100">
                        <label className="lblds-weds">Confirm Password</label>
                        <input className="form-control" type="password" name="passwordConfirm"   />
                    </div>
                   </div>
                    <p className="asjojds-asdjwie mt-3">By creating an account, you agree to the Terms of Service. For more information about HoltenSys privacy practices, see the HoltenSys Privacy Statement. We'll occasionally send you account-related emails.</p>
                    <div>
                        <button className="btn btn-104123 mt-3" type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
            <div>
                <button className="btn mt-4 aodsfid-fjasieer">Already have an account? <a href="/login">Login</a></button>
            </div>
           
        </div>
    </div>
}

export default SignUp;