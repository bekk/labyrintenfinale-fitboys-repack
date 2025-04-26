import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/hjelp", "routes/help.tsx"),
  route("/more-info", "routes/more-info.tsx"),
  route("/om-oss", "routes/om-oss.tsx"),
  route("/kontakt", "routes/kontakt.tsx"),
] satisfies RouteConfig;
