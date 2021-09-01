import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./Filter";
import "./Expenses.css";
import ListExpense from "./ListExpense";
import GrafikExpenses from "./GrafikExpenses";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const terfilter = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <GrafikExpenses expenses={terfilter}/>
        <ListExpense items={terfilter} />
      </Card>
    </div>
  );
};

export default Expenses;
