DECLARE
    v_customer_age NUMBER;
    v_discount_rate NUMBER := 1;

    CURSOR cur_customers IS
        SELECT CustomerID, DOB
        FROM Customers;

BEGIN
    FOR cust_rec IN cur_customers LOOP

        v_customer_age :=
            FLOOR(MONTHS_BETWEEN(
                SYSDATE,
                cust_rec.DOB
            ) / 12);

        IF v_customer_age > 60 THEN

            UPDATE Loans
            SET InterestRate =
                InterestRate - v_discount_rate
            WHERE CustomerID =
                cust_rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Applied ' || v_discount_rate ||
                '% discount to customer ' ||
                cust_rec.CustomerID
            );

        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Loan discount processing completed.'
    );

END;
/