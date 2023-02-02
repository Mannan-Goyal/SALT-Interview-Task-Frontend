function getGoogleOAuthURL() {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    redirect_uri: "http://localhost:5001/api/sessions/oauth/google",
    client_id:
      "668735350151-67pr95c04q85lj1k4j2nm752eijh3h53.apps.googleusercontent.com",
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
}

export default getGoogleOAuthURL;
