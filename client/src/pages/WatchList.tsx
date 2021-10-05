import { Watchlist, WatchlistFetcher } from "../components/WatchlistFetcher";
import { Loading } from "../components/Loading";

export function WatchlistCard(props: { watchlist: Watchlist }) {
  return <pre>{JSON.stringify(props, null, 4)}</pre>;
}

export function WatchLists() {
  return (
    <WatchlistFetcher>
      {({ loading, watchlists }) => {
        if (loading) {
          return <Loading />;
        }

        return (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {watchlists.map((watchlist) => (
              <WatchlistCard watchlist={watchlist} key={watchlist.id} />
            ))}
          </div>
        );
      }}
    </WatchlistFetcher>
  );
}
