import { WatchListCreator } from "../components/WatchListCreator";
import { WatchListForm } from "../components/WatchListForm";

export function WatchListEdit() {
  return (
    <WatchListCreator>
      {({ createWatchList, loading }) => (
        <WatchListForm
          loading={loading}
          onSubmit={(newWatchList) => {
            createWatchList(newWatchList);
          }}
        />
      )}
    </WatchListCreator>
  );
}
