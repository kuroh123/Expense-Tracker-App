import React, { useState } from "react";
import "./DisplayExpense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function DisplayExpense(props) {
  //parent of componenets --> ExpenseITem, ExpenseFilter, ExpenseChart
  const [filterYear, setFilterYear] = useState("2022");
  const yearData = (year) => {
    setFilterYear(year);
  };

  const filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onFilterChange={yearData} />
        <ExpenseChart expenses={filteredExpense} />
        <ExpenseList items={filteredExpense} />
      </Card>
    </div>
  );
}

export default DisplayExpense;
