// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  applications: {
      portal: "wormhole",
      gravitation: "gravitation",
      relay_station: "relay_station",
      star_chart: "star_chart",
      alpha_quadrant: "alpha_quadrant",
      delta_quadrant: "delta_quadrant",
      time_distortion: "time_distortion"
  },
  server_ip: '94.215.26.169',
  server_port: 3000
};
