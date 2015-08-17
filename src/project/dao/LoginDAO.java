package project.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import project.model.Login;
import project.util.DBConnect;

public class LoginDAO {

	public static boolean authenticate(Login log){
	
		Connection con = DBConnect.connector();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		try {
			ps = con.prepareStatement("SELECT * FROM owner_id WHERE username=?");
			ps.setString(1, log.getUsername());
			rs = ps.executeQuery();
			
			if(rs.next()){
				if(log.getPassword().compareTo(rs.getString(2)) == 0)
					return true;
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBConnect.closeConnection(ps, rs, con);
		}
		
		return false;
	}
	
	@SuppressWarnings("resource")
	public static boolean setNew(Login log){
		
		Connection con = DBConnect.connector();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		try {
			
			ps = con.prepareStatement("TRUNCATE TABLE owner_id");
			ps.executeUpdate();
			
			ps = con.prepareStatement("INSERT INTO owner_id VALUES(?, ?)");
			ps.setString(1, log.getUsername());
			ps.setString(2, log.getPassword());
			ps.executeUpdate();
			
			return true;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBConnect.closeConnection(ps, rs, con);
		}		
		
		
		return false;
	}
}
