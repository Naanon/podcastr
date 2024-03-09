import { api } from "@/services/api";

type Episode = {
  id: string
  title: string;
  members: string
}

type HomeProps = {
  episodes: Array<Episode>
}

export default async function Home(props: HomeProps) {
  const { data } = await api.get("episodes", {
    params: {
      _limit: 12,
      _sort: "_published_at",
      // _order: "desc"
    }
  })

  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

//16:40