/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.adventureisis;

import generated.World;
import java.io.File;
import java.io.InputStream;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;

/**
 *
 * @author admin
 */
public class Services {

    
public World  readWorldFromXml(String userName) {

    World w = null;
 try {
    InputStream input=getClass().getClassLoader().getResourceAsStream("world.xml");

		JAXBContext jaxbContext = JAXBContext.newInstance(World.class);

		Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
		w = (World) jaxbUnmarshaller.unmarshal(input);
		

	  } catch (JAXBException e) {
		e.printStackTrace();
	  }

    return w;
}

public void saveWordlToXml(World w, String userName) {
    
    try {

		File file = new File(userName+"_world.xml");
		JAXBContext jaxbContext = JAXBContext.newInstance(World.class);
		Marshaller jaxbMarshaller = jaxbContext.createMarshaller();

		// output pretty printed
		jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);

		jaxbMarshaller.marshal(w, file);
		jaxbMarshaller.marshal(w, System.out);

	      } catch (JAXBException e) {
		e.printStackTrace();
	      }

    
}

}
