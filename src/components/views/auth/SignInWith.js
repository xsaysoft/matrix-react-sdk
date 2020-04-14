import React, { Component, useState } from 'react';
// import GoogleLogin from 'react-google-login';


export class SignInWith extends Component {



    render() {
        // const [name, setName] = useState("");

        // const [email, setEmail] = useState("");

        // const [url, setUrl] = useState("");


        const responseGoogle = (response) => {
            // console.log(response);
            // setName(response.profileObj.name);
            // setEmail(response.profileObj.email)
            // setUrl(respnse.profileObj.imageUrl);
          }

        return (
            <GoogleLogin
                clientId=""
                buttonText="Login With Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        )
    }
}

export default SignInWith
