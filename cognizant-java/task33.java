import java.sql.*;

public class task33 {

    public static void main(String[] args)
            throws Exception {

        Connection con =
                DriverManager.getConnection(
                        "jdbc:mysql://localhost:3306/test",
                        "root",
                        "password");

        try {

            con.setAutoCommit(false);

            PreparedStatement debit =
                    con.prepareStatement(
                            "UPDATE accounts SET balance=balance-? WHERE id=?");

            debit.setDouble(1,100);
            debit.setInt(2,1);

            debit.executeUpdate();

            PreparedStatement credit =
                    con.prepareStatement(
                            "UPDATE accounts SET balance=balance+? WHERE id=?");

            credit.setDouble(1,100);
            credit.setInt(2,2);

            credit.executeUpdate();

            con.commit();

            System.out.println("Transfer Successful");

        } catch(Exception e) {

            con.rollback();

            System.out.println("Transfer Failed");
        }

        con.close();
    }
}

/*CREATE TABLE accounts(
id INT PRIMARY KEY,
balance DOUBLE
); */