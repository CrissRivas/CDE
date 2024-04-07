export default async function apiFetch(
  endpoint: string,
  query?: number
): Promise<{
  pending: globalThis.Ref<boolean>;
  data: any;
  refresh: () => void;
}> {
  const { pending, data, refresh } = await useLazyFetch(
    "https://api.caminodelerrante.com/v1/" + endpoint,
    {
      query: {
        counter: query,
      },
    }
  );
  return { pending, data, refresh };
}
