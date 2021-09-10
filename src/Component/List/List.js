import React, { Fragment, useEffect, useCallback, useState } from "react";
import Item from "../Item/Item";
import Card from "../UI/Card";
const List = (props) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchInfo = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://react-movie-e18ec-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        setError("Something went wrong!");
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setList(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      console.log("this is the error ", error);
    }
  }, []);

  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]);

  if (error) {
    return (
      <Card>
        <p style={{ color: "red" }}>{error}</p>
      </Card>
    );
  }

  const items = list.map((item) => <Item key={item.id} item={item} />);
  return (
    <Fragment>
      {!isLoading && items.length === 0 && (
        <Card>
          <p>No Found ...</p>
        </Card>
      )}
      {!isLoading && items.length > 0 && <Card> {items}</Card>}
      {isLoading && (
        <Card>
          <p>Is Loading ...</p>
        </Card>
      )}
    </Fragment>
  );
};
export default List;
