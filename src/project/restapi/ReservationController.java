package project.restapi;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import project.dao.ReservationDAO;
import project.model.Reservation;

@Path("/reservation")
public class ReservationController {
	
	@POST
	@Path("/new")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public long newReserve(Reservation res){
		 return ReservationDAO.addReservation(res);
	}	
	
	@GET
	@Path("/get/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Reservation getByID(@PathParam("id") long id){
		 return ReservationDAO.getReservation(id);
	}	
	
	@GET
	@Path("/get")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Reservation> getReservations(){
		return ReservationDAO.getAll();
	}
	
	@GET
	@Path("/delete/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public void deleteReserve(@PathParam("id") long id){
		ReservationDAO.deleteReservation(id);
	}	
	
	@POST
	@Path("/edit")
	@Consumes(MediaType.APPLICATION_JSON)
	public void addEdited(Reservation res){
		ReservationDAO.editedReservation(res);
	}	
	
}
