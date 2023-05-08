import { useState } from "react";
import styles from "./Home.module.css";
import Browser from "../components/Browser";

export default function Home() {
  return (
    <div className={styles.container}>
      <Browser />
    </div>
  );
}
