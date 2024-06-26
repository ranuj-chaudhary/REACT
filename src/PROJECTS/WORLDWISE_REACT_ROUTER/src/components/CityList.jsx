import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../context/CityContext";
import { memo } from "react";

const CityList =() => {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (cities.length === 0)
    return <Message message={"Click on Map to add city"} />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city, idx) => (
        <CityItem city={city} key={idx} />
      ))}
    </ul>
  );
};
export default CityList;
