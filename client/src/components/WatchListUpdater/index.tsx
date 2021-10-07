import React, { useState } from "react";

interface Props {
  children: (childProps: {
    loading: boolean;
    updateWatchList: (watchlist: any) => void;
  }) => React.ReactNode;
}

//used to create to new newWatchList
export function WatchListUpdater(props: Props) {
  const [loading, setLoading] = useState(false);

  function updateWatchList(watchList: any) {
    setLoading(true);
    fetch(`/api/watchlists/${watchList.id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(watchList),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  return (
    <React.Fragment>
      {props.children({
        loading,
        updateWatchList,
      })}
    </React.Fragment>
  );
}
