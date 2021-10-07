import {
  WatchListEntry,
  WatchListEntryFetcher,
} from "../components/WatchListEntryFetcher";
import { Loading } from "../components/Loading";
import { WatchListIdFetcher } from "../components/WatchListIdFetcher";
import { useParams } from "react-router";
import { CryptoCard } from "../components/CryptoCard";
import { NavLink } from "react-router-dom";
import { WatchListEntryDeleter } from "../components/WatchListEntryDeleter";
import { CryptoFetcher } from "../components/CryptoFetcher";
import { WatchListEntryCreator } from "../components/WatchListEntryCreator";

export function WatchListEntryCard(props: { entry: WatchListEntry }) {
  return <pre>{JSON.stringify(props, null, 4)}</pre>;
}

export function WatchListId() {
  // @ts-ignore
  let { id } = useParams();
  return (
    <WatchListIdFetcher id={id}>
      {({ watchlist, loading: fetching }) => {
        if (fetching) {
          return <Loading />;
        }

        return (
          <div>
            <h2>{watchlist.label}</h2>
            <p>{watchlist.description}</p>
            <NavLink to={`/watchlists/${watchlist.id}/edit`}>Edit</NavLink>
            <WatchListEntryFetcher>
              {({ loading, watchlistentries }) => {
                if (loading) {
                  return <Loading />;
                }
                const filteredEntries = watchlistentries.filter(
                  (entry) => String(entry.watchlist.id) === id
                );
                return (
                  <div>
                    <CryptoFetcher>
                      {({ loading: fetchingCryptos, cryptocurrencies }) => {
                        if (fetchingCryptos) {
                          return <Loading />;
                        }

                        return (
                          <WatchListEntryCreator>
                            {({
                              loading: fetchingCryptos,
                              createWatchListEntry,
                            }) => (
                              <div>
                                {cryptocurrencies
                                  .filter((c) =>
                                    filteredEntries.every(
                                      (e) => e.cryptocurrency.id !== c.id
                                    )
                                  )
                                  .map((crypto) => (
                                    <CryptoCard
                                      crypto={crypto}
                                      key={crypto.id}
                                      onDelete={() => {
                                        createWatchListEntry({
                                          watchlist_id: id,
                                          cryptocurrency_id: crypto.id,
                                        });
                                      }}
                                    />
                                  ))}
                              </div>
                            )}
                          </WatchListEntryCreator>
                        );
                      }}
                    </CryptoFetcher>
                    <div className="list-group mt-4">
                      {filteredEntries.map((entry) => (
                        <WatchListEntryDeleter>
                          {({ loading: deleting, deleteWatchListEntry }) => (
                            <CryptoCard
                              crypto={entry.cryptocurrency}
                              key={entry.id}
                              onDelete={() => {
                                deleteWatchListEntry(entry.id);
                                console.log("delete");
                              }}
                            />
                          )}
                        </WatchListEntryDeleter>
                      ))}
                    </div>
                  </div>
                );
              }}
            </WatchListEntryFetcher>
          </div>
        );
      }}
    </WatchListIdFetcher>
  );
}
