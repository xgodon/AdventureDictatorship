/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.adventureisis;

import com.google.gson.Gson;
import generated.World;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author admin
 */
@Path("generic")
public class GenericResource {

    Services monService;
    @Context
    private UriInfo context;

    /**
     * Creates a new instance of GenericResource
     */
    public GenericResource() {
        
         monService = new Services();
    }

    /**
     * Retrieves representation of an instance of com.mycompany.adventureisis.GenericResource
     * @return an instance of java.lang.String
     */
    @GET
    @Path("world")
    @Produces(MediaType.APPLICATION_XML)
    public World getXml(@Context HttpServletRequest request) {
        String username = request.getHeader("X-user");

        //TODO return proper representation object
        return monService.readWorldFromXml(username);
    }
    
    @GET
    @Path("world")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson(@Context HttpServletRequest request) {
        String username = request.getHeader("X-user");
        //TODO return proper representation object
        return new Gson().toJson(monService.readWorldFromXml(username));
    }

    /**
     * PUT method for updating or creating an instance of GenericResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_XML)
    public void putXml(String content) {
        
    }
}
