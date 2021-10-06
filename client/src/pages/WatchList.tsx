import { Watchlist, WatchlistFetcher } from "../components/WatchlistFetcher";
import { Loading } from "../components/Loading";

export function WatchlistCard(props: { watchlist: Watchlist }) {
  const { watchlist } = props;
  return (
    <li className="list-group-item">
      {watchlist.label}
      {watchlist.desciption}
      {watchlist.private}
      <pre>{JSON.stringify(props, null, 4)}</pre>
    </li>
  );
}

export function WatchLists() {
  return (
    <WatchlistFetcher>
      {({ loading, watchlists }) => {
        if (loading) {
          return <Loading />;
        }

        return (
          <div className="">
            {watchlists.map((watchlist) => (
              <WatchlistCard watchlist={watchlist} key={watchlist.id} />
            ))}
          </div>
        );
      }}
    </WatchlistFetcher>
  );
}
