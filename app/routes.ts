import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/hjelp", "routes/help.tsx"),
  route("/more-info", "routes/more-info.tsx"),
  route("/start", "routes/start.tsx"),
  route("/kontakt", "routes/kontakt.tsx"),
  route("/priser", "routes/priser.tsx"),
] satisfies RouteConfig;
