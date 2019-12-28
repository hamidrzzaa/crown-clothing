import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
export const ExpenseSummery = ({expenseCount,expensesTotal}) => {
    const expenseWord=expenseCount===1?'expense':'expenses'
    const format=numeral(expensesTotal).format('$0,0.00')
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} total is {format}</h1>
        </div>
    )
}

const mapStateToProps=(state)=>{
   const visibleExpenses=selectExpenses(state.expenses,state.filters)
    return {
       expenseCount:visibleExpenses.length,
        expensesTotal:selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummery)