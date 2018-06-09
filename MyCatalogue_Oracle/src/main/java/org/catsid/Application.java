package org.catsid;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		 SpringApplication.run(Application.class, args);
		
		 /**	Ouverture du Browser	*/
//		 System.out.println("Application started ... launching browser now");
//		 Browse("http://localhost:4200/blank-page/1");
	} 

//	public static void Browse(String url) {
//	    if(Desktop.isDesktopSupported()){
//	        Desktop desktop = Desktop.getDesktop(); 
//	        try {
//	            desktop.browse(new URI(url));
//	        } catch (IOException | URISyntaxException e) {
//	            e.printStackTrace(); 
//	        }
//	    }else{
//	        Runtime runtime = Runtime.getRuntime();
//	        try {
//	            runtime.exec("rundll32 url.dll,FileProtocolHandler " + url);
//	        } catch (IOException e) {
//	            e.printStackTrace();
//	        }
//	    }
//	}
}
