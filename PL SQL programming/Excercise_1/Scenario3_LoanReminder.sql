
DECLARE
    v_days_limit NUMBER := 30;

    CURSOR cur_due_loans IS
        SELECT l.LoanID,
               l.CustomerID,
               l.DueDate,
               c.Name
        FROM Loans l
        JOIN Customers c
        ON l.CustomerID = c.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE
                            AND SYSDATE + v_days_limit;

BEGIN
    FOR loan_rec IN cur_due_loans LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ' ||
            loan_rec.LoanID ||
            ' for customer ' ||
            loan_rec.Name ||
            ' is due on ' ||
            TO_CHAR(
                loan_rec.DueDate,
                'DD-MON-YYYY'
            )
        );

    END LOOP;

    DBMS_OUTPUT.PUT_LINE(
        'Loan reminder processing completed.'
    );

END;
/