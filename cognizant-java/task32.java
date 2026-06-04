
import java.sql.*;

class StudentDAO {

    Connection con;

    public StudentDAO() throws Exception {
        con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/test",
                "root",
                "password");
    }

    public void insertStudent(int id, String name)
            throws Exception {

        String sql =
                "INSERT INTO students(id,name) VALUES(?,?)";

        PreparedStatement ps =
                con.prepareStatement(sql);

        ps.setInt(1, id);
        ps.setString(2, name);

        ps.executeUpdate();

        System.out.println("Student Inserted");
    }

    public void updateStudent(int id, String name)
            throws Exception {

        String sql =
                "UPDATE students SET name=? WHERE id=?";

        PreparedStatement ps =
                con.prepareStatement(sql);

        ps.setString(1, name);
        ps.setInt(2, id);

        ps.executeUpdate();

        System.out.println("Student Updated");
    }
}

public class task32 {

    public static void main(String[] args)
            throws Exception {

        StudentDAO dao = new StudentDAO();

        dao.insertStudent(101, "John");

        dao.updateStudent(101, "David");
    }
}