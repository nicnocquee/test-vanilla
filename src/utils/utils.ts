export const parseRequestURL = (): {
  resource: string;
  id: string;
  verb: string;
} => {
  let url = location.hash.slice(1).toLowerCase() || "/";
  let r = url.split("/");
  let request = {
    resource: r[1],
    id: r[2],
    verb: r[3]
  };

  return request;
};
