package project.restapi;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import project.dao.SettingsDAO;
import project.model.ChangeField;
import project.model.Contact;
import project.model.Profile;
import project.model.Settings;

@Path("/settings")
public class SettingsController {
	
	@GET
	@Path("/profile")
	@Produces(MediaType.APPLICATION_JSON)
	public Profile getProfile(){
		return SettingsDAO.getProfile();
	}	
	
	@POST
	@Path("/updateProfile")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public void updateProfile(Profile prof){
		SettingsDAO.updateProfile(prof);
	}
	
	@GET
	@Path("/get")
	@Produces(MediaType.APPLICATION_JSON)
	public Settings getSettings(){
		return SettingsDAO.getSettings();
	}
	
	@POST
	@Path("/update")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean updateSettings(Settings set){
		return SettingsDAO.updateSettings(set);
	}
	
	@GET
	@Path("/mail")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Contact> getMailingList(){
		return SettingsDAO.getMailingList();
	}
	
	@GET
	@Path("/contact")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Contact> getContactList(){
		return SettingsDAO.getContactList();
	}
	
	@POST
	@Path("/username")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public boolean changeUsername(ChangeField ch){
		return SettingsDAO.changeUsername(ch);
	}
	
	@POST
	@Path("/password")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public boolean changePassword(ChangeField ch){
		return SettingsDAO.changePassword(ch);
	}
	
}
