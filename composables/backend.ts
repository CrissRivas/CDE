const API_BASE_URL = "http://localhost:4000/v1/";
export async function getKickAnalitycs() {
  return await useFetch(API_BASE_URL + "kick/analitycs");
}

export async function getKick(limit: number, skip: number) {
  return await useFetch(API_BASE_URL + "kick", {
    query: {
      limit,
      skip,
    },
  });
}
