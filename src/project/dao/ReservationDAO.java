package project.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import project.model.Reservation;
import project.util.DBConnect;

public class ReservationDAO {
	
	public static ArrayList<Reservation> getAll(){
				
		Connection con = DBConnect.connector();
		PreparedStatement ps = null;
		ResultSet rs = null;
		ArrayList<Reservation> list = new ArrayList<Reservation>();
		
		try {
			ps = con.prepareStatement("SELECT * FROM reservations_db");
			rs = ps.executeQuery();

			while(rs.next()){
				
				Reservation res = new Reservation();
				res.setReservation_id(rs.getInt("reservation_id"));
				res.setGuest_name(rs.getString("guest_name"));
				res.setGuests(rs.getInt("guests"));
				res.setDate(rs.getDate("date"));
				res.setContact(rs.getString("contact"));
				res.setEmail(rs.getString("email"));
				
				list.add(res);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBConnect.closeConnection(ps, rs, con);
		}
		
		return list;
	}

	public static long addReservation(Reservation res){
		
		Connection con = DBConnect.connector();
		PreparedStatement ps = null;
		ResultSet rs = null;
		long id = generateID(res);
		
		try {
			ps = con.prepareStatement("INSERT INTO reservations_db (reservation_id, guest_name, date, guests, contact, email) VALUES(?, ?, ?, ?, ?, ?)");
			ps.setLong(1, id);
			ps.setString(2, res.getGuest_name());
			ps.setDate(3, res.getDate());
			ps.setInt(4, res.getGuests());
			ps.setString(5, res.getContact());
			ps.setString(6, res.getEmail());
			ps.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBConnect.closeConnection(ps, rs, con);
		}
			
		return id;
	}
	
	public static void deleteReservation(long id){
		
		Connection con = DBConnect.connector();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		try {
			ps = con.prepareStatement("DELETE FROM reservations_db WHERE reservation_id=?");
			ps.setLong(1,id);
			ps.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBConnect.closeConnection(ps, rs, con);
		}
		
	}
	
	public static Reservation getReservation(long id){
		
		Connection con = DBConnect.connector();
		PreparedStatement ps = null;
		ResultSet rs = null;
		Reservation rsv = new Reservation();
		
		try {
			
			ps = con.prepareStatement("SELECT * FROM reservations_db WHERE reservation_id= ?");
			ps.setLong(1, id);
			rs = ps.executeQuery();
			rs.next();
			
				rsv.setReservation_id(rs.getLong(1));
				rsv.setGuest_name(rs.getString(2));
				rsv.setDate(rs.getDate(3));
				rsv.setGuests(rs.getInt(4));
				rsv.setContact(rs.getString(5));
				rsv.setEmail(rs.getString(6));
						
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBConnect.closeConnection(ps, rs, con);
		}
		
		return rsv;
	}

	public static void editedReservation(Reservation res){
		
		Connection con = DBConnect.connector();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		try {
			ps = con.prepareStatement("INSERT INTO reservations_db (reservation_id, guest_name, date, guests, contact, email) VALUES(?, ?, ?, ?, ?, ?)");
			ps.setLong(1, res.getReservation_id());
			ps.setString(2, res.getGuest_name());
			ps.setDate(3, res.getDate());
			ps.setInt(4, res.getGuests());
			ps.setString(5, res.getContact());
			ps.setString(6, res.getEmail());
			ps.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBConnect.closeConnection(ps, rs, con);
		}
	}
	
	public static long generateID(Reservation res){
		
		long unix = System.currentTimeMillis() / 1000L;
		return unix;
	}

}
