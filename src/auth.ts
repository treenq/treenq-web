import { createZitadelAuth } from "@zitadel/react";

const config: ZitadelConfig = {
    authority: "https://treenq-muevuz.us1.zitadel.cloud",
    client_id: "288885563849778336",
    redirect_uri: "http://localhost:3000/callback",
    response_type: "code",
    scope: "openid profile email repo",
    post_logout_redirect_uri: "http://localhost:3000",
    response_mode: "query",
  };

  const auth = createZitadelAuth(config)
  export default auth