package project.restapi;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import project.dao.LoginDAO;
import project.model.Login;

@Path("/user")
public class LoginController {
	
	@POST
	@Path("/login")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public boolean authenticateLogin(Login log){
		
		return LoginDAO.authenticate(log);
	}	
}
