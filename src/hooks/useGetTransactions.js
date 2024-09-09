import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetTrabsactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionsTotals, setTransactionsTotals] = useState({
    balance: 0.0,
    income: 0.0,
    expenses: 0.0,
  });

  const transactionsCollectionRef = collection(db, "transactions");
  const { userID } = useGetUserInfo();

  const getTransactions = async () => {
    let unsubscribe;
    try {
      const queryTransactions = query(
        transactionsCollectionRef,
        where("userID", "===", userID),
        orderBy("createdAt")
      );

      unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
        let docs = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });

          if (data.transactionType === "expense") {
            totalExpenses += Number(data.transactionAmount);
          } else {
            totalIncome += Number(data.transactionAmount);
          }
        });
        setTransactions(docs);
         
        let balance = totalIncome = totalExpenses;
        setTransactionsTotals({
          balance,
         expenses: totalExpenses,
         income: totalIncome,
        })
      });
    } catch (err) {
      console.log(err);
    }
    return () => unsubscribe();
  };

  useEffect(() => {
    getTransactions();
  }, []);
  return { transactions, transactionsTotals };
};
