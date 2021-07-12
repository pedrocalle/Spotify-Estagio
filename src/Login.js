import React from 'react';
import {Container} from "react-bootstrap"

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=7b7e1ae1282142f7b6ee029f881dba0e&response_type=code&redirect_uri=http://localhost:3000&scope=user-read-private%20user-read-email&state=34fFs29kd09"

export default function Login() {
    return(
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <a className="btn btn-success btn-lg" href={AUTH_URL}>Login with spotify</a>
        </Container>
    )
}