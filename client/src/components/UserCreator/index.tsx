import React, { useState } from "react";
import { useHistory } from "react-router-dom";

interface Props {
  children: (childProps: {
    loading: boolean;
    createUser: (newUser: any) => void;
  }) => React.ReactNode;
}

//used to create to new newWatchList
export function UserCreator(props: Props) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  function createUser(newUser: any) {
    setLoading(true);
    fetch(`/api/users`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        // history.push(`/watchlists/${data.id}`);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  return (
    <React.Fragment>
      {props.children({
        loading,
        createUser,
      })}
    </React.Fragment>
  );
}
