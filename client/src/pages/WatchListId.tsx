import {
  WatchListEntry,
  WatchListEntryFetcher,
} from "../components/WatchListEntryFetcher";
import { Loading } from "../components/Loading";

export function WatchListEntryCard(props: { entry: WatchListEntry }) {
  return <pre>{JSON.stringify(props, null, 4)}</pre>;
}

export function WatchListId() {
  return (
    <WatchListEntryFetcher>
      {({ loading, watchlistentries }) => {
        if (loading) {
          return <Loading />;
        }

        return (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {watchlistentries.map((entry) => (
              <WatchListEntryCard entry={entry} key={entry.id} />
            ))}
          </div>
        );
      }}
    </WatchListEntryFetcher>
  );
}
