import { onRequestPost as __api_signup_business_ts_onRequestPost } from "C:\\Users\\cidro\\Desktop\\Promptkoffie\\functions\\api\\signup\\business.ts"
import { onRequestPost as __api_signup_user_ts_onRequestPost } from "C:\\Users\\cidro\\Desktop\\Promptkoffie\\functions\\api\\signup\\user.ts"
import { onRequestGet as __api_stats_ts_onRequestGet } from "C:\\Users\\cidro\\Desktop\\Promptkoffie\\functions\\api\\stats.ts"

export const routes = [
    {
      routePath: "/api/signup/business",
      mountPath: "/api/signup",
      method: "POST",
      middlewares: [],
      modules: [__api_signup_business_ts_onRequestPost],
    },
  {
      routePath: "/api/signup/user",
      mountPath: "/api/signup",
      method: "POST",
      middlewares: [],
      modules: [__api_signup_user_ts_onRequestPost],
    },
  {
      routePath: "/api/stats",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_stats_ts_onRequestGet],
    },
  ]