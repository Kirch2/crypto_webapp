import { Watchlist, WatchlistFetcher } from "../components/WatchlistFetcher";
import { Loading } from "../components/Loading";
import { NavLink } from "react-router-dom";

export function WatchlistCard(props: { watchlist: Watchlist }) {
  const { watchlist } = props;
  return (
    <NavLink
      exact
      className="list-group-item"
      to={"/watchlists/${watchlist.id}"}
    >
      {watchlist.label}
      {watchlist.desciption}
      {watchlist.private}
      <pre>{JSON.stringify(props, null, 4)}</pre>
    </NavLink>
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
