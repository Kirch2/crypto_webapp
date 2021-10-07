import { WatchListUpdater } from "../components/WatchListUpdater";
import { WatchListForm } from "../components/WatchListForm";

export function WatchListEdit() {
  return (
    <WatchListUpdater>
      {({ updateWatchList, loading }) => (
        <div>
          <h1>Edit watchlist</h1>
          <WatchListForm
            label={"label"}
            description={"description"}
            isPrivate={true}
            loading={loading}
            onSubmit={(watchList) => {
              updateWatchList({
                ...watchList,
              });
            }}
          />
        </div>
      )}
    </WatchListUpdater>
  );
}
