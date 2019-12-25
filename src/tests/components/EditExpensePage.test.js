import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";
import ExpenseFrom from "../../components/ExpenseForm";

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[2]}
    />
  );
});

test("should render the component correctly", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("should handle edit expense", () => {
  wrapper.find(ExpenseFrom.displayName).prop("onSubmit")(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(editExpense).toHaveBeenCalledWith(expenses[2].id, expenses[2]);
});

test("should handle remove expense", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(removeExpense).toHaveBeenCalledWith(expenses[2].id);
});
