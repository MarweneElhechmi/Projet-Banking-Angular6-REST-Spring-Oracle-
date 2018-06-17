# Projet-Banking-Angular6-REST-Spring-Oracle-

1. Allez au Lien : https://oracle.developpez.com/tutoriels/oracle-sql-developper/#LI-D 
2. Suivre les étapes décrites : 
  2.1 Lien Pour Installer Oracle Database Express Edition 11g Release 2 : http://www.oracle.com/technetwork/database/database-technologies/express-edition/downloads/index.html 
  2.2 Lien Pour Installer SQL Developer : http://www.oracle.com/technetwork/developer-tools/sql-developer/overview/index.html 
3. Pour utiliser Oracle avec Spring Boot, il faut ajouter dans le pom une dépendance : 
    
      <dependency>
            <groupId>com.oracle</groupId>
            <artifactId>ojdbc7</artifactId>
            <version>12.1.0.1</version>
        </dependency>
        
4. Il faut installer le jar manuellement et l'ajouter sous .m2 dans le repository : com.oracle.ojdbc7 jar download 
http://www.oracle.com/technetwork/database/features/jdbc/jdbc-drivers-12c-download-1958347.html 
