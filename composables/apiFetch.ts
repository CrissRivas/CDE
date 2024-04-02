export default async function (endpoint: string, query?: number) {
  const { pending, data, refresh } = await useFetch(
    "https://api.caminodelerrante.com/v1/" + endpoint,
    {
      query: {
        counter: query,
      },
    }
  );
  return { pending, data, refresh };
}
