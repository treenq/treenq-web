import { UserManagerSettings } from "oidc-client-ts";

const config: UserManagerSettings = {
  authority: ENV.ZITADEL_AUTHORITY,
  client_id: ENV.ZITADEL_CLIENT_ID,
  redirect_uri: ENV.ZITADEL_REDIRECT_URI,
  response_type: "code",
  scope: "openid profile email",
  post_logout_redirect_uri: ENV.ZITADEL_LOGOUT_URI,
  response_mode: "query",
  prompt: "create",
};

export default config;
