

DECLARE
    v_vip_threshold NUMBER := 10000;

    CURSOR cur_customers IS
        SELECT CustomerID, Balance
        FROM Customers;

BEGIN
    FOR cust_rec IN cur_customers LOOP

        IF cust_rec.Balance > v_vip_threshold THEN

            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust_rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Customer ' || cust_rec.CustomerID ||
                ' promoted to VIP status. Balance: ' ||
                cust_rec.Balance
            );

        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'VIP promotion processing completed.'
    );

END;
/