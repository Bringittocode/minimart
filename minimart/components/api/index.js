import useSWR from "swr";

async function fetcher(u) {
    const res = await fetch(`/api/hello`);
    const data = await res.json();
    return data;
    
}
function Fetch_api (id) {
    const { data, error } = useSWR(`/api/hello/`, fetcher, {
        revalidateOnReconnect: true,
      })
  
    return {
      items: data,
      isLoading: !error && !data,
      isError: error
    }
}

export default Fetch_api;