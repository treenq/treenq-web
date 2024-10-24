import { createZitadelAuth } from "@zitadel/react";

const config: ZitadelConfig = {
    authority: import.meta.env.VITE_ZITADEL_AUTHORITY,
    client_id: import.meta.env.VITE_ZITADEL_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_ZITADEL_REDIRECT_URI,
    response_type: import.meta.env.VITE_ZITADEL_RESPONSE_TYPE,
    scope: import.meta.env.VITE_ZITADEL_SCOPE,
    post_logout_redirect_uri: import.meta.env.VITE_ZITADEL_LOGOUT_URI,
    response_mode: import.meta.env.VITE_ZITADEL_RESPONSE_MODE,
  };

  const auth = createZitadelAuth(config)
  export default auth