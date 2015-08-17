package project.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import project.model.ChangeField;
import project.model.Contact;
import project.model.Login;
import project.model.Profile;
import project.model.Settings;
import project.util.DBConnect;

public class SettingsDAO {

	public static Profile getProfile() {
		
		Connection con = DBConnect.connector();
		PreparedStatement ps = null;
		ResultSet rs = null;
		Profile prof = new Profile();
		
		try {
			
			ps = con.prepareStatement("SELECT * FROM profile_db");
			rs = ps.executeQuery();
			rs.next();
			
			prof.setRest_name(rs.getString(1));
			prof.setOwner_name(rs.getString(2));
			prof.setEmail(rs.getString(3));
			prof.setContact(rs.getString(4));
			prof.setAddress(rs.getString(5));
			prof.setOpen_during(rs.getInt(6));
			prof.setOpen_time(rs.getString(7));
			prof.setClose_time(rs.getString(8));
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBConnect.closeConnection(ps, rs, con);
		}
		
		return prof;
	}

	@SuppressWarnings("resource")
	public static void updateProfile(Profile prof) {
		
		Connection con = DBConnect.connector();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		try {	
			ps = con.prepareStatement("TRUNCATE TABLE profile_db");
			ps.executeUpdate();
		
			ps = con.prepareStatement("INSERT INTO profile_db VALUES(?,?,?,?,?,?,?,?)");
			ps.setString(1, prof.getRest_name());
			ps.setString(2, prof.getOwner_name());
			ps.setString(3, prof.getEmail());
			ps.setString(4, prof.getContact());
			ps.setString(5, prof.getAddress());
			ps.setInt(6, prof.getOpen_during());
			ps.setString(7, prof.getOpen_time());
			ps.setString(8, prof.getClose_time());
			
			ps.executeUpdate();
		
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBConnect.closeConnection(ps, rs, con);
		}
	}

	
	public static ArrayList<Contact> getContactList() {
		
		Connection con = DBConnect.connector();
		PreparedStatement ps = null;
		ResultSet rs = null;
		ArrayList<Contact> list = new ArrayList<Contact>();
		
		try {
			
			ps = con.prepareStatement("SELECT DISTINCT guest_name, contact FROM reservations_db");
			rs = ps.executeQuery();
			
			while(rs.next()){
				Contact cn = new Contact();
				cn.setName(rs.getString(1));
				cn.setContact(rs.getString(2));
				list.add(cn);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBConnect.closeConnection(ps, rs, con);
		}
		return list;	
	}

	public static ArrayList<Contact> getMailingList() {
		
		Connection con = DBConnect.connector();
		PreparedStatement ps = null;
		ResultSet rs = null;
		ArrayList<Contact> list = new ArrayList<Contact>();
		
		try {
			
			ps = con.prepareStatement("SELECT DISTINCT guest_name, email FROM reservations_db");
			rs = ps.executeQuery();
			
			while(rs.next()){
				Contact cn = new Contact();
				cn.setName(rs.getString(1));
				cn.setContact(rs.getString(2));
				list.add(cn);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBConnect.closeConnection(ps, rs, con);
		}
		return list;
	}

	public static boolean changePassword(ChangeField ch) {
		
		Connection con = DBConnect.connector();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		try {
			
			ps = con.prepareStatement("SELECT * FROM owner_id");
			rs = ps.executeQuery();
			rs.next();
			if(rs.getString(2).compareTo(ch.getOld1()) == 0){
				if(ch.getNew1().compareTo(ch.getCnf1()) == 0){
					
					Login log = new Login();
					log.setUsername(rs.getString(1));
					log.setPassword(ch.getNew1());
					
					return LoginDAO.setNew(log);					
				}
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBConnect.closeConnection(ps, rs, con);
		}		
		
		return false;
	}

	public static boolean changeUsername(ChangeField ch) {
		
		Connection con = DBConnect.connector();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		try {
			
			ps = con.prepareStatement("SELECT * FROM owner_id");
			rs = ps.executeQuery();
			rs.next();
			if(rs.getString(1).compareTo(ch.getOld1()) == 0){
				if(ch.getNew1().compareTo(ch.getCnf1()) == 0){
					
					Login log = new Login();
					log.setUsername(ch.getNew1());
					log.setPassword(rs.getString(2));
					
					return LoginDAO.setNew(log);					
				}
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBConnect.closeConnection(ps, rs, con);
		}		
		
		return false;
	}

	public static Settings getSettings() {
		Connection con = DBConnect.connector();
		PreparedStatement ps = null;
		ResultSet rs = null;
		Settings set = new Settings();

		try {
			
			ps = con.prepareStatement("SELECT * FROM settings_db");
			rs = ps.executeQuery();
			rs.next();
			
			set.setCapacity(rs.getInt(1));
			set.setOverbook(rs.getInt(2));
			if(rs.getInt(3) == 1)
				set.setAutofill(true);
			else set.setAutofill(false);
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBConnect.closeConnection(ps, rs, con);
		}		
		
		return set;
	}

	@SuppressWarnings("resource")
	public static boolean updateSettings(Settings set) {
		
		Connection con = DBConnect.connector();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		try {
			ps = con.prepareStatement("TRUNCATE TABLE settings_db");
			ps.executeUpdate();
			
			ps = con.prepareStatement("INSERT INTO settings_db VALUES(?, ?, ?)");
			ps.setInt(1, set.getCapacity());
			ps.setInt(2, set.getOverbook());
			if(set.isAutofill())
				ps.setInt(3, 1);
			else
				ps.setInt(3, 0);
			
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
